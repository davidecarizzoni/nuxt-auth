import { Schema, model } from "mongoose";

type User = {
	email: string;
	password: string;
	name?: string;
	surname?: string;
}

const schema = new Schema<User>(
	{
		email: {
			type: String,
			unique: true
		},
		password: {
			type: String,
			bcrypt: true
		},
		name: {
			type: String,
		},
		surname: {
			type: String
		}
	},
);

export default model("User", schema, "user");

