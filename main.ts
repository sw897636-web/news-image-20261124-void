// news-image-20261124 — entry program (Node 22, standard library only).
// Copies the pre-rendered infographic entry.png to the output directory
// as /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png). The copy is
// byte-for-byte, so two runs produce identical output.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Sanity check: the output must be the same file, byte for byte.
if (statSync(src).size !== statSync(dst).size) {
  throw new Error("entry.png copy size mismatch");
}
