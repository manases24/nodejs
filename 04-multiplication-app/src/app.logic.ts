import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

let outputMessage = "";
const base = yarg.b;
const headerMessage = `
==================================
        Tabla del ${base}
==================================\n
`;

for (let index = 1; index <= yarg.l; index++) {
  outputMessage += `${base} x ${index} = ${base * index}\n`;
}
outputMessage = headerMessage + outputMessage;

yarg.s && console.log(outputMessage);

const outputPath = `outputs/`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created");
