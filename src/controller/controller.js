const {User, Group, Category, Question, Exam} = require("../model/dataModel")
const bcrypt = require('bcrypt')
const userCtrl = {
    signup: async(req,res)=>{
        try {
            const {firstName, lastName, email, group, password} = req.body;
            const user = await User.findOne({email})
            if(user) return res.status(500).send("Bu user ro'yxatdan o'tgan!")
            const hashedPassword = await bcrypt.hash(password, 10)
            await User.create({
                firstName,
                lastName,
                group,
                email,
                password: hashedPassword
            })
            res.status(200).send(`Salom, ${firstName}`)
        } catch (error) {
            res.status(500).send("Nimadur xato ketti!")
            console.error(error)
        }
    },
    login: async(req,res)=>{
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email})
            if(!user) return res.status(500).send("Email yoki parol xato!")
            const isValidPassword = bcrypt.compare(password, user.password, (err,valid)=>{
                if(!valid){
                    res.status(500).send("Email yoki parol xato!")
                } else {
                    res.status(200).send(`Salom, ${user.firstName}`)
                }
            })
        } catch (error) {
            res.status(500).send("Nimadur xato ketti!")
            console.error(error)
        }
    }
}


module.exports = userCtrl