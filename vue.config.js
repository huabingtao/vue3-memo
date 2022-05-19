const { defineConfig } = require("@vue/cli-service");
// const tsImportPluginFactory = require('ts-import-plugin')
// const babelPluginImport = require('babel-plugin-import')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "/vue3-memo/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "备忘录";
      return args;
    });
  },
});
