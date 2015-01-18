module.exports = {
	cache: true,
	entry: './lib/main',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.jsx$/, loader: 'traceur?runtime!jsx-loader'},
			{test: /\.js$/, exclude: /node_modules/, loader: 'traceur?runtime'}
		]
	},
	resolve: {
		modulesDirectories: ['node_modules', 'lib'],
		extensions: ['', '.js', '.jsx']
	}
};
