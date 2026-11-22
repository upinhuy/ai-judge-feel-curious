// Make the AI judge feel curious — make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt.
// Node 22, no dependencies, no network. Deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The last page of the library's oldest book is blank except for one line, in your handwriting, dated tomorrow.";

// Guard the gate before writing: 1-280 Unicode code points, not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1-280 character gate`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
