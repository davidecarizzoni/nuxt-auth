import { Schema, model } from "mongoose";

export type IUser = {
	email: string;
	password: string;
	name?: string;
	surname?: string;
}

const schema = new Schema<IUser>(
	{
		email: {
			type: String,
			unique: true
		},
		password: {
			type: String,
			select: false,
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

export default model<IUser>("User", schema, "user");

