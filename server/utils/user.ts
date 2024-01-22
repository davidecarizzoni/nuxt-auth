import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "~/server/models/user";

export const hashPassword = (password: string) => {
	return bcrypt.hashSync(password, 10)
}

export const findUserByEmail = async (email: string) => {
	return User.findOne({
		email
	}, {
		password: 1,
		email: 1
	}).exec()
}

export const createAccessToken = (userId: string) => {
	const config = useRuntimeConfig()
	return jwt.sign({ userId }, config.jwtSecret)
}
