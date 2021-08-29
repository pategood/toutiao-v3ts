module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended", "@vue/prettier", "@vue/prettier/@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ["prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": [0, "error", "windows"], // 使用windows的换行
    "space-before-function-paren": "off",
    "comma-dangle": [2, "never"], //  对象数组最后一个不带逗号
    semi: ["error", "never"], // 禁用 分号
    "max-len": ["error", 150], // 单行代码最大长度
    "no-tabs": "off", // 最后一行为空
    "prefer-const": "off",
    quotes: [1, "single"], //引号类型 `` "" ''
    indent: [
      2,
      2,
      {
        SwitchCase: 1 // case 针对 switch 语句使用 2 个空格缩进
      }
    ],
    "no-unused-vars": ["error", { varsIgnorePattern: ".*", args: "none" }]
  }
};
