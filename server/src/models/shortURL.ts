import mongoose, {Document} from "mongoose";
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 10)

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

const schema = new mongoose.Schema({
  shortId: { type: String, required: true, unique: true, default: () => nanoid() },
  destination: { type: String, required: true }
})

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;