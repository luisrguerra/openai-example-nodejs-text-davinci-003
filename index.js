const readline = require('readline');
const api = require('./api');

async function sendPrompt(promptText, tokenTextSize) {
    const response = await api.completionsTextModel(promptText,tokenTextSize)
    const responseText = response.data.choices[0].text;
    console.log("Response:\n" + responseText);
 };

let terminalReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminalReader.question("Prompt:\n", function(answer) {
    sendPrompt(answer,512)
    terminalReader.close();
});



