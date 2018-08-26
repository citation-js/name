module.exports = {
  "presets": [
    ["@babel/env", {"targets": {
      "node": "6"
    }}]
  ],
  "plugins": [
    ["@babel/plugin-proposal-unicode-property-regex", {
      useUnicodeFlag: false
    }],
  ],
  "env": {
    "test": {
      "plugins": ["istanbul"]
    }
  },
  "comments": false
}
 
