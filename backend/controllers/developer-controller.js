const bcrypt = require('bcrypt');
const Developer = require('../models/developerSchema');

const developerRegister = async (req, res) => {
    try {
        const dev = new Developer({
            ...req.body
        });

        const existingAdminByEmail = await Developer.findOne({ email: req.body.email });

        if (existingAdminByEmail) {
            res.send({ message: 'Email already exists' });
        }
        else {
            let result = await dev.save();
            result.password = undefined;
            res.send(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const developerLogIn = async (req, res) => {
    if (req.body.email && req.body.password) {
        let dev = await Developer.findOne({ email: req.body.email });
        if (dev) {
            if (req.body.password === dev.password) {
                dev.password = undefined;
                res.send(dev);
            } else {
                res.send({ message: "Invalid password" });
            }
        } else {
            res.send({ message: "User not found" });
        }
    } else {
        res.send({ message: "Email and password are required" });
    }
};

const getdeveloperDetail = async (req, res) => {
    try {
        let dev = await Developer.findById(req.params.id);
        if (dev) {
            dev.password = undefined;
            res.send(dev);
        }
        else {
            res.send({ message: "No admin found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

// const deletedeveloper = async (req, res) => {
//     try {
//         const result = await Developer.findByIdAndDelete(req.params.id)

//         await Sclass.deleteMany({ school: req.params.id });
//         await Student.deleteMany({ school: req.params.id });
//         await Teacher.deleteMany({ school: req.params.id });
//         await Subject.deleteMany({ school: req.params.id });
//         await Notice.deleteMany({ school: req.params.id });
//         await Complain.deleteMany({ school: req.params.id });

//         res.send(result)
//     } catch (error) {
//         res.status(500).json(err);
//     }
// }

const updatedeveloper = async (req, res) => {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            res.body.password = await bcrypt.hash(res.body.password, salt)
        }
        let result = await Developer.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true })

        result.password = undefined;
        res.send(result)
    } catch (error) {
        res.status(500).json(err);
    }
}

module.exports = { developerRegister, developerLogIn, getdeveloperDetail, updatedeveloper };

module.exports = { developerRegister, developerLogIn, getdeveloperDetail };
