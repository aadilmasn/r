// pages/api/redirect.js

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // Path to the JSON file storing the current URL
  const filePath = path.resolve("./", "current.json");

  // Read the URL from the JSON file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading URL file" });
      return;
    }

    const { url } = JSON.parse(data);
    res.redirect(url);
  });
}
