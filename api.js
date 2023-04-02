require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env['OPENAI_API_KEY'],
});
const openai = new OpenAIApi(configuration);

async function davinci(promptText,tokenSize) {
    return await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promptText,
        temperature: 0,
        max_tokens: tokenSize,
      });
  }

module.exports = { davinci };