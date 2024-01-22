import User, {IUser} from "~/server/models/user";

type RegisterBody = IUser & {
	confirmPassword: string
}

export default defineEventHandler(async (event) => {
	const body = await readBody<RegisterBody>(event)
	
	const { password, confirmPassword } = body
	
	if (password !== confirmPassword) {
		return sendError(event, createError({
			statusCode: 400,
			statusMessage: 'Password and confirm password do not match.'
		}))
	}
	
	const user = await User.create<IUser>({
		email: body.email,
		password: hashPassword(body.password),
	})
	
	return {
		user
	}
})
