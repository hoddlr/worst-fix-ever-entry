import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "fix: replaced the bug with a smaller, angrier bug";

if (line.length < 1 || line.length > 100 || line.includes("\n")) {
  throw new Error("entry line must be a single line of 1-100 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
