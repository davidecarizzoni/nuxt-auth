import User, {IUser} from "~/server/models/user";

type Body = IUser & { confirmPassword: string }

export default defineEventHandler(async (event) => {
	const body = await readBody<Body>(event)
	
	const {
		password,
		confirmPassword
	} = body
	
	const user = await User.findOne<IUser>({
		email: body.email
	})
	
	
	
	return {
		user
	}
})
