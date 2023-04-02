const readline = require('readline');
const api = require('./api');

async function generateTextFromApi(promptText,textTokenSize) {
    const apiResponse = await api.completionsTextModel(promptText, textTokenSize);
    return apiResponse.data.choices[0].text;
}

async function runTerminal() {
    const terminalReader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const userInput = await new Promise((response) => {
        terminalReader.question('Prompt:\n', response);
    });

    const textTokenSize = 512;
    const apiResponseText = await generateTextFromApi(userInput, textTokenSize);
    console.log("\nResponse:\n" + apiResponseText + "\n");

    terminalReader.close();
    runTerminal();
}

runTerminal();
