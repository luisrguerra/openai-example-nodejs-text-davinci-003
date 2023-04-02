const api = require('./api');

let promptText = "Write a poem";
let tokenTextSize = 256;

(async() => {
    const response = await api.davinci(promptText,tokenTextSize)
    console.log(response.data.choices[0].text);
})()
