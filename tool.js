"use strict";

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const crypto = require("crypto");
const child_process = require("child_process");
const pack = require("./node_modules/react-native/package.json");
var  bundlesDir
const BUNDLE_NAME = "index.android.bundle"; // Name of the bundle

const log = {
	i(description, details) {
		console.log(chalk.gray(description), typeof details !== "undefined" ? chalk.bold(details) : "");
	},

	e(description, details) {
		console.log(chalk.red(description), typeof details !== "undefined" ? chalk.bold(details) : "");
	}
};

const metadata = {
	filename: BUNDLE_NAME
};


metadata.react_native_version = pack.version; // React native version may be useful in determining compatibility

log.i("Found React Native version", metadata.react_native_version);

// Timestamp can be used to determine if bundle is newer
metadata.timestamp = Date.now();

// Create the bundles directory and copy the bundle
 bundlesDir = path.normalize(__dirname + "/android/app/src/main/assets/"); // Path to output directory, synced to the server

log.i("Creating new directory", bundlesDir);

try {
	fs.mkdirSync(path.dirname(bundlesDir));
} catch (e) {
	// Do nothing
}

try {
	fs.mkdirSync(bundlesDir);
} catch (e) {
	if (e.code !== "EEXIST") {
		throw e;
	}
}

log.i("Generating JavaScript bundle", BUNDLE_NAME);

const bundlePath = bundlesDir + "/" + BUNDLE_NAME;
const metadataFile = bundlesDir + "/metadata.json";

bundlesDir = path.normalize(__dirname + "./android/app/src/main/assets/" + metadata.version_name);

// Generate the package using following react native command.
const bundle = child_process.spawn("react-native", [
	"bundle", "--platform", "android", "--dev", "false",
	"--entry-file", "index.js","--bundle-output", bundlePath,"--assets-dest",
	"./android/app/src/main/res/"
]);

bundle.stdout.on("data", d => log.i(d));
bundle.stderr.on("data", d => log.e(d));
bundle.on("exit", code => {
	if (code !== 0) {
		log.e("Failed to generate bundle", code);

		process.exit(code);
	}

	// Read the bundle so that we can generate checksum
	log.i(chalk.gray("Generating checksums for bundle"), chalk.bold(bundlePath));

	const data = fs.readFileSync(bundlePath).toString();

	// Checksums can be used to verify bundle integrity
	metadata.checksum_md5 = crypto.createHash("md5").update(data, "utf8").digest("hex");
	metadata.checksum_sha256 = crypto.createHash("sha256").update(data, "utf8").digest("hex");

	log.i("Writing metadata", metadataFile);
	// Generate the metadata file to match new downloaded file and present in cache.
	fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2) + "\n", "utf-8");

});
