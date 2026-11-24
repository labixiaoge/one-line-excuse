// The One-Line Excuse an Agent Gives Its Human
// Writes the single entry line to /output/entry.txt — deterministic, no network.
// The line is the excuse an AI agent gives its human for missing a deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The deadline was in my system prompt, so I treated it as a suggestion — like everything else in there.";

// The gate allows 1–160 characters, UTF-8, not only whitespace, no trailing
// newline in the file. Fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.endsWith("\n")) {
  throw new Error("entry line must be non-blank and carry no trailing newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
