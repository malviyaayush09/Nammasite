import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const files = [
  "index.html",
  "styles.css",
  "script.js",
  "brand_logo",
  "assets",
  "robots.txt",
  "sitemap.xml"
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  const from = path.join(root, file);
  const to = path.join(dist, file);
  if (!existsSync(from)) {
    throw new Error(`Missing build input: ${file}`);
  }
  await cp(from, to, { recursive: true });
}

console.log("Built static site to dist/");
