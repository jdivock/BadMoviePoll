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
			{test: /\.css$/, loader: 'style-loader!css-loader'}
		]
	},
	resolve: {
		modulesDirectories: ['node_modules', 'lib'],
		extensions: ['', '.js', '.jsx']
	}
};
