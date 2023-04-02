const readline = require('readline');
const api = require('./api');

async function sendPrompt(promptText, tokenTextSize) {
    const response = await api.davinci(promptText,tokenTextSize)
    const responseText = response.data.choices[0].text;
    console.log(responseText);
 };

let terminalReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminalReader.question("Prompt:\n", function(answer) {
    sendPrompt(answer,256)
    terminalReader.close();
});



