import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const SECRET = process.env.SECRET;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const MODEL = process.env.MODEL;
export const CONTENT = process.env.CONTENT;
export const USER_ROLE = process.env.USER_ROLE;
export const SPEECH_KEY = process.env.SPEECH_KEY;
export const SPEECH_REGION = process.env.SPEECH_REGION;
export const RESPONSE_MAIL = process.env.RESPONSE_MAIL;
export const RESPONSE_MAILPASS = process.env.RESPONSE_MAILPASS;
export const DOC_ENDPOINT = process.env.DOC_ENDPOINT;
export const DOC_KEY = process.env.DOC_KEY;
export const FORM_RECOGNIZER_ENDPOINT = process.env.FORM_RECOGNIZER_ENDPOINT;
export const FORM_RECOGNIZER_API_KEY = process.env.FORM_RECOGNIZER_API_KEY;
export const FORM_RECOGNIZER_CUSTOM_MODEL_ID =
  process.env.FORM_RECOGNIZER_CUSTOM_MODEL_ID;
