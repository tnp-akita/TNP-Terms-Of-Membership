#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");

// Style と結合
const stylingContent = fs.readFileSync("./Styling.md", {
  options: { encoding: "utf8" },
});
const termsContent = fs.readFileSync("./TNP_Terms_Of_Membership.md", {
  options: { encoding: "utf8" },
});

// ./generated/styled.md にいったん書き込む
fs.writeFileSync("./generated/styled.md", `${stylingContent}\n${termsContent}`);

// md-to-pdf で PDF に変換
execSync("npx md-to-pdf ./generated/styled.md", { stdio: "inherit" });
