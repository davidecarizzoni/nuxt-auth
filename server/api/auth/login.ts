import User, {IUser} from "~/server/models/user";

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	
	const user = await User.findOne<IUser>({
		email: body.email
	})
	
	return {
		user
	}
})
