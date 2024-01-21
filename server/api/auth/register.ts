export default defineEventHandler(async (event) => {
	// ... Do whatever you want here
	const body = await readBody(event)
	
	return {
		user: 'user',
		token: 'token',
		refreshToken: ''
	}
})
