import { Schema } from "../hooks/schema";

export const personSchema = new Schema({
  name: { type: String, required: true, minLength: 10 },
  surname: { type: String, required: true, minLength: 10 },
  hobbies: { type: Array, required: true, minLength: 3 },
});
