import { createRequire } from "module";

const require = createRequire(import.meta.url);

export default {
  printWidth: 140,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "none",
  arrowParens: "avoid",
  semi: true,
};
