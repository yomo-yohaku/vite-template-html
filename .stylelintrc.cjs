module.exports = {
  extends: ["stylelint-config-recess-order", "stylelint-config-recommended-scss"],
  ignoreFiles: ["**/*.js"],
  rules: {
    "declaration-property-unit-disallowed-list": [
      {
        "font-size": ["px"], // remを使用するため
        "line-height": ["px"], // 単位なしの倍数を使用するため
      },
    ],
    "selector-pseudo-element-colon-notation": "double", // :before　:after を ::before ::after に強制
    "selector-pseudo-class-no-unknown": true, // 擬似クラスの名前があっているかをチェック
    "scss/selector-no-union-class-name": true, // クラス名をアンパサンドでネストしない
  },
};
