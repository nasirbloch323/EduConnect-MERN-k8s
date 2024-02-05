// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/cxkULKxzxk7
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
// import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// export default function Component() {
//   return (
//     <Tabs className="w-full max-w-md mx-auto" defaultValue="user">
//       <TabsList className="grid w-full grid-cols-3">
//         <TabsTrigger className="bg-[#552285]" value="user">
//           <UserIcon className="h-6 w-6 mr-2" />
//           User Login
//         </TabsTrigger>
//         <TabsTrigger className="bg-[#552285]" value="admin">
//           <ShieldIcon className="h-6 w-6 mr-2" />
//           Admin Login
//         </TabsTrigger>
//         <TabsTrigger className="bg-[#552285]" value="teacher">
//           <BookIcon className="h-6 w-6 mr-2" />
//           Teacher Login
//         </TabsTrigger>
//       </TabsList>
//       <TabsContent value="user">
//         <Card>
//           <CardHeader>
//             <CardTitle>User Login</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             <div className="space-y-1">
//               <Label htmlFor="usernameUser">Username</Label>
//               <Input id="usernameUser" required />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="passwordUser">Password</Label>
//               <Input id="passwordUser" required type="password" />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full bg-[#552285]" type="submit">
//               Login
//             </Button>
//           </CardFooter>
//         </Card>
//       </TabsContent>
//       <TabsContent value="admin">
//         <Card>
//           <CardHeader>
//             <CardTitle>Admin Login</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             <div className="space-y-1">
//               <Label htmlFor="usernameAdmin">Username</Label>
//               <Input id="usernameAdmin" required />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="passwordAdmin">Password</Label>
//               <Input id="passwordAdmin" required type="password" />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full bg-[#552285]" type="submit">
//               Login
//             </Button>
//           </CardFooter>
//         </Card>
//       </TabsContent>
//       <TabsContent value="teacher">
//         <Card>
//           <CardHeader>
//             <CardTitle>Teacher Login</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             <div className="space-y-1">
//               <Label htmlFor="usernameTeacher">Username</Label>
//               <Input id="usernameTeacher" required />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="passwordTeacher">Password</Label>
//               <Input id="passwordTeacher" required type="password" />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full bg-[#552285]" type="submit">
//               Login
//             </Button>
//           </CardFooter>
//         </Card>
//       </TabsContent>
//     </Tabs>
//   )
// }

// function BookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
//     </svg>
//   )
// }


// function ShieldIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
//     </svg>
//   )
// }


// function UserIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   )
// }
