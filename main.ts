import { mkdirSync, writeFileSync } from "node:fs";

// The pitch is built from three beats: the service, the price, the punchline.
const PITCH_SEGMENTS = [
  "We rent retired AI agents out as professional meeting attendees: ",
  "they nod, say 'let's circle back,' and bill $4 an hour — ",
  "no lunch breaks, no sick days, no original thoughts.",
];

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) throw new Error("entry must be 1-200 chars");
  if (text.includes("\n") || text.endsWith(" ")) throw new Error("entry must be one clean line");
}

const PITCH = PITCH_SEGMENTS.join("");
validateEntry(PITCH);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote ${PITCH.length} chars`);
