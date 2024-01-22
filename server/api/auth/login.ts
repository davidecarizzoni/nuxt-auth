import {createAccessToken, findUserByEmail} from "~/server/utils/user";
import bcrypt from "bcrypt";

export type LoginForm = {
	email: string
	password: string
}

export default defineEventHandler(async (event) => {
	const { email, password } = await readBody<LoginForm>(event)
	
	const user = await findUserByEmail(email)
	
	// control if email and password are provided
	if(!email || !password) {
		return sendError(event, createError({
			statusCode: 400,
			statusMessage: 'Password and email are required'
		}))
	}
	
	// control if user exists
	if(!user) {
		return sendError(event, createError({
			statusCode: 404,
			statusMessage: 'User not found.'
		}))
	}
	
	// control if password is correct
	const hasSamePassword = bcrypt.compareSync(password, user?.password)
	if (!hasSamePassword) {
		return sendError(event, createError({
			statusCode: 401,
			statusMessage: 'Email or password are invalid'
		}))
	}
	
	// create access token
	const accessToken = createAccessToken(user._id?.toString())
	
	return {
		user,
		accessToken
	}
})
