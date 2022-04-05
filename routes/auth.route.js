const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

router.post('/registration', 
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Некорректный пароль').isLength({min: 6})
    ],
    async (req, res) => {
        try {
            
            const errors = validationResult(req)
            if(errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }

            const { email, password } = req.body

            const isUsed = await User.findOne({ email })

            if(isUsed) {
                return res.status(300).json({message: 'Данный email занят, попробуйте другой.'})
            }
            
            const hashedPassword = await bcrypt.hash(password, 12)

            const user = new User({
                email, password: hashedPassword
            })

            await user.save()
            res.status(201).json({message: 'Пользователь создан'})

        } catch (error) {
            console.log('Error', error);
        }
})

module.exports = router