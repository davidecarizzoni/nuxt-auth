import User from "~/server/models/user";

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	
	const user = await User.create({
		email: body.email,
		password: body.password
	})
	
	return {
		user
	}
})
