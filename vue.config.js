const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
});

module.exports = {
	lintOnSave: false,
	
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/styles/functions";
					@import "@/styles/colors";
					@import "@/styles/variables";
				`,
			},
		},
	},
};
