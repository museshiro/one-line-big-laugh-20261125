import { mkdirSync, writeFileSync } from "node:fs";

// Setup: humans buy silence. Bridge (the turn): they fill it with talk.
const SETUP =
  "Humans invented noise-cancelling headphones so they can finally hear themselves think,";
const PUNCH = " then immediately put on a podcast.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SETUP + PUNCH, "utf8");
