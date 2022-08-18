const path = require("path");
const glob = require("glob");

module.exports = {
	stats: {
		errorDetails: true
	},
	mode: "production",
	entry: ["./src/index.ts", ...glob.sync(path.join(__dirname, "src/**/**/*.ts"))],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ["babel-loader", "ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(txt|css)$/i,
				use: "raw-loader",
			},
		],
	},
	resolve: {
		extensions: [".ts"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};