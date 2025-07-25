import OpenAI from 'openai';
import { OPENAI_GPT_KEY } from './constants';
const openai = new OpenAI({
  apiKey: process.env[OPENAI_GPT_KEY], // This is the default and can be omitted
});
export default openai