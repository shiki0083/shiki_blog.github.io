const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}
module.exports = {
	runtimeCompiler: true,
	productionSourceMap: false,
	pages: {
		index: {
			entry: 'src/index/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: '世说新语',
			chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
		}
	},
	devServer: {
		port: 10086,
		historyApiFallback: {
			rewrites: [ { from: /^\/$/, to: '/index.html' } ],
			disableDotRule: true
		},
		proxy: {
			// '/api': {
			//   target: 'https://hellomrbigbigshot.xyz',
			//   changeOrigin: true
			// },
			'^/api': {
				target: 'http://localhost:8081',
				ws: true,
				changeOrigin: true
			}
		}
	},
	chainWebpack: (config) => {
		config.module.rule('vue').use('vue-loader').loader('vue-loader').tap((options) => {
			options.compilerOptions.preserveWhitespace = true;
		});
		config.resolve.alias
			.set('@$', resolve('src'))
			.set('index', resolve('src/index'))
	}
};
