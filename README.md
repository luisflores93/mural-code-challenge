## Project setup

### Install dependencies

- run `npm i`

### Start the project

- run `npm run dev`

### dev notes:

- there are some features I were not able to do, like create a FIAT transfer request, and execute transfer, I'll attach API responses in the root.

### Coding Challenge

Using the Mural Pay API Sandbox Environment, create a single-page application that allows a user to create an account and execute a payment. More specifically, the application should allow the following:

- (1) customer & account creation
- (2) transfer request creation
- (3) transfer request execution.

While Typescript and React are ideal, feel free to use the languages, libraries, and frameworks you are most familiar with.

For Sandbox access, please reach out to [boyce@muralpay.com](mailto:boyce@muralpay.com) with your resume and email address that you would like access for.

Once finished, please submit your challenge [here](https://docs.google.com/forms/d/e/1FAIpQLSfzDopDRb-HoMtTNUZCcydzjR4q_HeH9D7d4ffwEFoJiSAPIg/viewform).

### Part 1: Customer & Account Creation

- Allow a user (”Customer”) to create an account
- For the created account, show its:
  - (1) current balance
  - (2) wallet address
  - (3) virtual (deposit) bank account details

### Part 2: Transfer Request Creation

- Allow a user to create a transfer request from the above account
- Allow the user to specify:
  - Amount
  - Recipient bank details
- Show the pending transfer requests in the UI

### Part 3: Transfer Request Execution

- Allow the user to execute the pending transfer request
- Show executed transfer requests in the UI

### Resources:

- API docs (password - 'powerfulpayments'): https://developers.muralpay.com/docs/getting-started
- Platform docs: https://docs.muralpay.com/en/
- For Polygon Amoy testnet funds: https://faucet.circle.com/

<!-- ========================= VITE README ========================= -->

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
