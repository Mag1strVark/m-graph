import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { json } from 'express'

// Register usr
export const register = async (req, res) => {
    try {
        const {username, password} = req.body

        const IsUsed = await User.findOne({username})

        if (IsUsed) {
            return res.json({
                message: 'Данный E-mail уже занят'
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash
        })

        const token = jwt.sign({
                id: newUser._id,
            }, process.env.JWT_SECRET,
            {expiresIn: '30d'}
        )

        await newUser.save()

        res.json({
            newUser,
            message: 'Регистрация прошла успешно.'
        })
    } catch (error) {
        res.json({message: 'Ошибка при создании пользователя.'})
    }
}
// Login user
export const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})

        if (!user) {
            return res.json({
                message: 'Такого полльзоватея не существует'
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({
                message: 'Неверрный пароль.'
            })
        }

        const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET,
            {expiresIn: '30d'}
        )

        res.json({
            token, user, message: 'Вы вошли в систему.'
        })
    } catch (error) {
        res.json({message: 'Ощибка при авторизации.'})
    }
}
// Get me

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if (!user) {
            return res.json({
                message: 'Такого полльзоватея не существует'
            })
        }

        const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET,
            {expiresIn: '30d'}
        )

        res.json({
            user,
            token
        })

    } catch (error) {
        res.json({message: 'Нет Доступа.'})
    }
}