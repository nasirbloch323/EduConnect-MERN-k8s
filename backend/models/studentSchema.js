const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNum: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sclassName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sclass',
        required: true,
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true,
    },

    role: {
        type: String,
        default: "Student"
    },
    examResult: [
        {
            subName: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'subject',
            },
            marksObtained: {
                type: Number,
                default: 0
            }
        }
    ],
    attendance: [{
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ['Present', 'Absent'],
            required: true
        },
        subName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject',
            required: true
        }
    }]

//     phoneNumber: {
//         type: Number,
//     },
//     addresses: [
//         {
//             country: {
//                 type: String,
//             },
//             city: {
//                 type: String,
//             },
//             address1: {
//                 type: String,
//             },
//             address2: {
//                 type: String,
//             },
//             zipCode: {
//                 type: Number,
//             },
//             addressType: {
//                 type: String,
//             },
//         }
//     ],

//     avatar: {
//         public_id: {
//             type: String,
//             required: true,
//         },
//         url: {
//             type: String,
//             required: true,
//         },
//     },

//     //  resetPasswordToken: String,
//     //  resetPasswordTime: Date,

});


// //  Hash password
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//         next();
//     }

//     this.password = await bcrypt.hash(this.password, 10);
// });

// // jwt token
// userSchema.methods.getJwtToken = function () {
//     return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
//         expiresIn: process.env.JWT_EXPIRES,
//     });
// };

// // compare password
// userSchema.methods.comparePassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };



module.exports = mongoose.model("student", studentSchema);


