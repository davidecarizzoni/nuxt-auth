import User, {IUser} from "~/server/models/user";

export type RegisterBody = IUser & {
	confirmPassword: string
}

export default defineEventHandler(async (event) => {
	const body = await readBody<RegisterBody>(event)
	
	const { password, confirmPassword } = body
	
	// control if email and password are provided - This is an additional control
	if(!password || !confirmPassword) {
		return sendError(event, createError({
			statusCode: 400,
			statusMessage: 'Password and confirm password are required'
		}))
	}
	
	// control if password and confirmPassword are the same
	if (password !== confirmPassword) {
		return sendError(event, createError({
			statusCode: 400,
			statusMessage: 'Password and confirm password do not match.'
		}))
	}
	
	// create user by spread body and hash password
	const user = await User.create<IUser>({
		...body,
		password: hashPassword(body.password),
	})
	
	return {
		user
	}
})
