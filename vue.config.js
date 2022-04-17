const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Einkaufsliste PWA",
    themeColor: "#cf0015"
  },
});
