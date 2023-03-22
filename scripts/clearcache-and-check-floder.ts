import fs from "node:fs";
import path from "node:path";

const runPreBuild = () => {
  const target = path.join(__dirname, "../dist");

  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true });
  }

  console.log("dist folder is clear");
};

runPreBuild();
