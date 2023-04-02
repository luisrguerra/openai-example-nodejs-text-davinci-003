require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
// Key from environment variable
const key = process.env['OPENAI_API_KEY'];
const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);

const gptModelName = "text-davinci-003";
/* 
text-davinci-003: 4,097 tokens	 
Can do any language task with better quality,
longer output, and consistent instruction-following
than the curie, babbage, or ada models.
Also supports inserting completions within text.

text-davinci-002: 4,097 tokens
Similar capabilities to text-davinci-003 but
trained with supervised fine-tuning instead
of reinforcement learning
*/

async function davinci(promptText,tokenSize) {
    return await openai.createCompletion({
        model: gptModelName,
        prompt: promptText,
        temperature: 0,
        max_tokens: tokenSize,
      });
  }

module.exports = { davinci };