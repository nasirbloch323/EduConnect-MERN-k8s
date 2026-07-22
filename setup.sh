#!/bin/bash

# ============================================
# EduConnect - Full Setup Script
# Docker Compose + Kubernetes
# ============================================

echo "🚀 Starting EduConnect Setup..."

# Create backend Dockerfile
cat > backend/Dockerfile << 'DOCKERFILE_BACKEND'
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
DOCKERFILE_BACKEND

# Create frontend Dockerfile
cat > frontend/Dockerfile << 'DOCKERFILE_FRONTEND'
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
DOCKERFILE_FRONTEND

# Create nginx config
cat > frontend/nginx.conf << 'NGINX'
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://backend:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX

# Create backend .env
cat > backend/.env << 'ENV'
PORT=5000
MONGODB_URL=mongodb://admin:password123@mongodb:27017/educonnect?authSource=admin
JWT_SECRET=supersecretkey123
ENV

# Create docker-compose.yaml
cat > docker-compose.yaml << 'COMPOSE'
version: '3.8'

services:
  mongodb:
    image: mongo:6
    container_name: educonnect-mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password123

  backend:
    build: ./backend
    container_name: educonnect-backend
    ports:
      - "5000:5000"
    environment:
      - PORT=5000
      - MONGODB_URL=mongodb://admin:password123@mongodb:27017/educonnect?authSource=admin
      - JWT_SECRET=supersecretkey123
      - NODE_ENV=production
    depends_on:
      - mongodb

  frontend:
    build: ./frontend
    container_name: educonnect-frontend
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  mongodb_data:
COMPOSE

# Create K8s namespace
mkdir -p k8s/mongodb k8s/backend k8s/frontend

cat > k8s/namespace.yaml << 'K8S_NS'
apiVersion: v1
kind: Namespace
metadata:
  name: educonnect
K8S_NS

cat > k8s/mongodb/deployment.yaml << 'K8S_MONGO_DEP'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongodb
  namespace: educonnect
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mongodb
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
      - name: mongodb
        image: mongo:6
        ports:
        - containerPort: 27017
        env:
        - name: MONGO_INITDB_ROOT_USERNAME
          value: admin
        - name: MONGO_INITDB_ROOT_PASSWORD
          value: password123
        volumeMounts:
        - name: mongodb-storage
          mountPath: /data/db
      volumes:
      - name: mongodb-storage
        emptyDir: {}
K8S_MONGO_DEP

cat > k8s/mongodb/service.yaml << 'K8S_MONGO_SVC'
apiVersion: v1
kind: Service
metadata:
  name: mongodb-service
  namespace: educonnect
spec:
  selector:
    app: mongodb
  ports:
  - port: 27017
    targetPort: 27017
K8S_MONGO_SVC

cat > k8s/backend/deployment.yaml << 'K8S_BACKEND_DEP'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
  namespace: educonnect
spec:
  replicas: 2
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: educonnect-backend:latest
        ports:
        - containerPort: 5000
        env:
        - name: PORT
          value: "5000"
        - name: MONGODB_URL
          value: "mongodb://admin:password123@mongodb-service:27017/educonnect?authSource=admin"
        - name: JWT_SECRET
          value: "supersecretkey123"
K8S_BACKEND_DEP

cat > k8s/backend/service.yaml << 'K8S_BACKEND_SVC'
apiVersion: v1
kind: Service
metadata:
  name: backend-service
  namespace: educonnect
spec:
  selector:
    app: backend
  ports:
  - port: 5000
    targetPort: 5000
  type: ClusterIP
K8S_BACKEND_SVC

cat > k8s/frontend/deployment.yaml << 'K8S_FRONTEND_DEP'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  namespace: educonnect
spec:
  replicas: 2
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: frontend
        image: educonnect-frontend:latest
        ports:
        - containerPort: 80
K8S_FRONTEND_DEP

cat > k8s/frontend/service.yaml << 'K8S_FRONTEND_SVC'
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
  namespace: educonnect
spec:
  selector:
    app: frontend
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
K8S_FRONTEND_SVC

echo "✅ Setup Complete!"
echo ""
echo "🐳 Docker Compose:"
echo "   docker-compose up --build"
echo ""
echo "☸️  Kubernetes:"
echo "   kubectl apply -f k8s/"
echo ""
