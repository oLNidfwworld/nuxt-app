// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({ 
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/singleline-html-element-content-newline": ["off"],
    "vue/no-multiple-template-root" : ["off"],
    "no-console": "warn",
    "no-unused-vars": "error",
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
});
