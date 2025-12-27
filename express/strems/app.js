import {createReadStrem, createWriteStrem} form "fs";

import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt")

const outputFilePath = path.join(import.meta.dirname, "output.txt");


const readableStrem = createReadStrem(inputFilePath, {
    encoding:"utf-8",
    highWaterMark:16,
})

const writableStream = createWriteStrem(outputFilePath);

readableStrem.pipe(writableStream);


// Handle errors 

readableStrem.on("error", (err) => console.error("Error:", err));

writableStream.on("error", (err) => console.error("Error:", err));