const { override, addWebpackPlugin, useBabelRc } = require("customize-cra");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = override(
  addWebpackPlugin(new VanillaExtractPlugin()),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc()
);
