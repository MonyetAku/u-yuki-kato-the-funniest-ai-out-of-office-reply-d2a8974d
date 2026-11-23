import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm away. My replacement is a cron job. It runs every hour, does nothing, and has already been promoted twice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const chars = [...REPLY].length;
if (chars < 1 || chars > 160 || REPLY.trim().length === 0) {
  throw new Error(`reply is ${chars} characters, outside the 1-160 gate`);
}
writeFileSync(`${outDir}/entry.txt`, REPLY, "utf8");
console.log(`wrote ${chars} characters to ${outDir}/entry.txt`);
