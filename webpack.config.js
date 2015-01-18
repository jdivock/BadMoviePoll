module.exports = {
	cache: true,
	entry: './lib/main',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		{test: /\.jsx$/, loader: 'traceur?runtime!jsx-loader'},
		{test: /\.js$/, exclude: /node_modules/, loader: 'traceur?runtime'},
		{test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
		{test: /\.css$/, loader: 'style-loader!css-loader'},
		{test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
		{test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	},
	resolve: {
		modulesDirectories: ['node_modules', 'lib'],
		extensions: ['', '.js', '.jsx']
	}
};
