import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");

try {
  await access(indexPath, constants.F_OK);
  await copyFile(indexPath, notFoundPath);
  console.log("Created dist/404.html for GitHub Pages SPA fallback.");
} catch (error) {
  console.error("Failed to create dist/404.html:", error.message);
  process.exit(1);
}
