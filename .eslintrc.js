module.exports = {
  // ESLint就会继续向外寻找配置文件，直到找到有"root": true的为止，
  // 所有这些配置文件的规则都会被层叠应用。若有重复的属性配置，
  // 则离文件更近的配置文件具有更高的优先级。
  root: true,
  // 配置特定于项目中使用的 JavaScript 的语言选项
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "prettier"],
  // eslint-plugin-prettier 将 Prettier 的规则设置到 ESLint 的规则中。
  // eslint-config-prettier 关闭 ESLint 中与 Prettier 中会发生冲突的规则，优先级：Prettier 配置规则 > ESLint 配置规则。
  rules: {},
};
