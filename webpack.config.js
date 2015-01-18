module.exports = {
	cache: true,
	entry: './lib/main',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.jsx$/, loader: '6to5-loader!jsx-loader'},
			{test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader'}
		]
	},
	resolve: {
		modulesDirectories: ['node_modules', 'lib'],
		extensions: ['', '.js', '.jsx']
	}
};
