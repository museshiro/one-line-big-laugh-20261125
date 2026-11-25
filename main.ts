// One Line, Big Laugh — redo entry.
// Dry wit: a smart-coop alert earns a polite "thank you" the narrator never
// gave a real neighbour. The turn lands on the final clause; every detail
// (dusk, 4am, the smell) sets up or pays off that comparison.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart chicken coop texted 'Coop secured' at dusk, so I replied 'thank you'—more gratitude than I showed my neighbor after he drove me to the airport at 4am and pretended not to notice the smell.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
