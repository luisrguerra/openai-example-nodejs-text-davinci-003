const readline = require('readline');
const api = require('./api');

async function sendPrompt(promptText, tokenTextSize) {
    const response = await api.davinci(promptText,tokenTextSize)
    console.log(response.data.choices[0].text);
 };

let terminalReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminalReader.question("Prompt:\n", function(answer) {
    sendPrompt(answer,256)
    terminalReader.close();
});



