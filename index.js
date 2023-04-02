const readline = require('readline');
const api = require('./api');

async function generateTextFromApi(promptText,textTokenSize) {
    const apiResponse = await api.completionsTextModel(promptText, textTokenSize);
    return apiResponse.data.choices[0].text;
}

function runTerminal() {
    const terminalReader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    terminalReader.question("Prompt:\n", async function(userInput) {
        const textTokenSize = 512;
        const apiResponseText = await generateTextFromApi(userInput, textTokenSize);
        console.log("Response:\n" + apiResponseText);
        terminalReader.close();
    });
}

runTerminal();
