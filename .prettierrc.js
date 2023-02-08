module.exports = {
  printWidth: 200, //一行代码的最大字符数
  tabWidth: 2, //指定每个缩进级别的空格数
  useTabs: false, //是否使用tab来缩进
  semi: true, //语句末尾使用分号
  // vueIndentScriptAndStyle: true, //缩进Vue文件  true是缩进Vue文件中的脚本和样式标签
  singleQuote: false, // 使用单引号
  quoteProps: "as-needed", //object对象中key值是否加引号（as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号）
  bracketSpacing: true, //object对象里面的key和value值和括号间的空格
  trailingComma: "es5", //尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况
  // bracketSameLine: false, //将多行 HTML（HTML、JSX、Vue、Angular）元素的尖括号 > 放在最后一行的末尾，（false单独放在下一行）
  jsxBracketSameLine: false, //jsx标签多行属性写法时，尖括号是否另起一行
  jsxSingleQuote: false, //在jsx文件中的引号需要单独设置
  arrowParens: "always", //箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: "<always|avoid>"）
  insertPragma: false, //自当插入pragma到已经完成的format的文件开头
  requirePragma: false, //格式化有特定开头编译指示的文件
  proseWrap: "never", //文章换行,默认情况下会对你的markdown文件换行进行format会控制在printwidth以内
  htmlWhitespaceSensitivity: "strict", //"<css|strict|ignore>" html中的空格敏感性
  endOfLine: "auto", //"<lf|crlf|cr|auto>" 行尾换行符,默认是lf,
  rangeStart: 0, //range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件（rangeStart: <int>  rangeEnd: <int>）
  rangeEnd: Infinity,
  embeddedLanguageFormatting: "off", //控制被引号包裹的代码是否进行格式化（"auto" | "off"）
  // 针对不同文件或目录设置不同配置的方法
  overrides: [
    {
      files: ".prettierrc",
      options: { 
	    "parser": "json", //永远不要将解析器选项放在配置的顶层，仅在覆盖内使用它。否则，将会禁用 Prettier 的基于自动文件扩展名的解析器推断。
	  },
    }
  ],
};
