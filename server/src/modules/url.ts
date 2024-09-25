import mongoose from "mongoose"

//create a schema for mongodb's "table"
const UrlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date },
    visit: { type: Number },
    DateEnter: [Number],
});

//connect to url "table"
export const UrlModel = mongoose.model('Url', UrlSchema);
