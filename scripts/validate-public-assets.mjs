#!/usr/bin/env node

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function read(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

const [rawServer, readme, connect, security, license] = await Promise.all([
  read("server.json"),
  read("README.md"),
  read("CONNECT.md"),
  read("SECURITY.md"),
  read("LICENSE"),
]);

const server = JSON.parse(rawServer);
const expectedServer = {
  $schema: "https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json",
  name: "com.kepleragents/kepleragents-mcp",
  title: "KeplerAgents",
  description: "Read-only access to authorized business operations through KeplerAgents.",
  repository: {
    url: "https://github.com/Cryptokepler/kepleragents-mcp",
    source: "github",
  },
  version: "1.0.0",
  remotes: [
    {
      type: "streamable-http",
      url: "https://api.kepleragents.com/mcp",
    },
  ],
};

assert.deepEqual(server, expectedServer, "server.json must match the reviewed publication descriptor");
assert.match(server.name, /^[a-zA-Z0-9.-]+\/[a-zA-Z0-9._-]+$/u);
assert.ok(server.description.length >= 1 && server.description.length <= 100);
assert.match(server.version, /^\d+\.\d+\.\d+$/u);

const contactFiles = [
  ["README.md", readme],
  ["CONNECT.md", connect],
];

for (const [filename, content] of contactFiles) {
  assert.ok(content.includes("https://wa.me/524424637790"), `${filename} must include the WhatsApp contact`);
  assert.ok(content.includes("info@kepleragents.com"), `${filename} must include the email contact`);
}

assert.ok(security.includes("info@kepleragents.com"), "SECURITY.md must include the private reporting address");
assert.ok(security.includes("No publiques credenciales"), "SECURITY.md must warn against public secret disclosure");
assert.ok(license.includes("Creative Commons Attribution-NoDerivatives 4.0 International"));
assert.ok(license.includes("https://creativecommons.org/licenses/by-nd/4.0/legalcode"));

const forbiddenSensitiveData = [
  /\b(?:customer|tenant)[_-]?(?:id|name)\b\s*[:=]/iu,
  /\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/iu,
  /\b0x[a-f0-9]{40}\b/iu,
  /\bT[A-HJ-NP-Za-km-z1-9]{33}\b/u,
  /\b(?:mysql|postgres(?:ql)?):\/\/[^\s]+/iu,
];

const forbiddenSecrets = [
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/u,
  /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/u,
  /\bghp_[A-Za-z0-9]{30,}\b/u,
  /\bgithub_pat_[A-Za-z0-9_]{40,}\b/u,
  /\bsk-[A-Za-z0-9_-]{20,}\b/u,
];

for (const [filename, content] of [
  ["server.json", rawServer],
  ...contactFiles,
  ["SECURITY.md", security],
  ["LICENSE", license],
]) {
  for (const pattern of forbiddenSensitiveData) {
    assert.doesNotMatch(content, pattern, `${filename} must not contain sensitive tenant data (${pattern})`);
  }
  for (const pattern of forbiddenSecrets) {
    assert.doesNotMatch(content, pattern, `${filename} must not contain secret material (${pattern})`);
  }
}

console.log("PUBLIC_ASSETS_VALIDATION=PASS");
console.log(`SERVER_NAME=${server.name}`);
console.log(`REMOTE_TRANSPORT=${server.remotes[0].type}`);
console.log(`REMOTE_URL=${server.remotes[0].url}`);
console.log("CONTACTS=PASS");
console.log("CLIENT_DATA_SCAN=PASS");
console.log("SECRET_PATTERN_SCAN=PASS");
