const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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


router.post('/login', 
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Некорректный пароль').exists()
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
            
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({message: 'Такого email нет в базе'})
            }

            const isMatch = bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({message: 'Пароли не совпадают'})
            }

            const jwsSecret = 'sdfagadfgsdfg423423r12ejnj24hr5h3k4fjgkefg5'

            const token = jwt.sign(
                {userId: user.id},
                jwsSecret,
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id})



        } catch (error) {
            console.log('Error', error);
        }
})

module.exports = router