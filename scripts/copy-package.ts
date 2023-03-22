import fs from "node:fs";
import path from "node:path";

const copyPackageFile = () => {
  try {
    fs.copyFileSync(
      path.join(__dirname, "../package.json"),
      path.join(__dirname, "../dist/package.json")
    );
    console.log("package.json file is copied!");
  } catch (error) {
    console.error("copy package.json file fail!");
  }
};

export default copyPackageFile;
