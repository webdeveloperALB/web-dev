/** @type {import('stylelint').Config} */
module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-tailwindcss" // 👈 this is critical
    ],
    rules: {
      "at-rule-no-unknown": null, // Disable unknown at-rules error globally
      "block-no-empty": null, // Optional: no errors for empty blocks
    }
  };
  