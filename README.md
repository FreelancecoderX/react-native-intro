# react-native-intro

## Set up a new React Native project
The command to create a new React Native project with Expo is npx create-expo-app.

In your terminal, run:

```bash
npx create-expo-app --help
```
Set up app with blank typescript template
```bash
yarn create expo-app app-name -t
```
```bash
cd app-name
```
```bash
yarn start
```
```bash
# if using yarn
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

# if using other package managers
npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```
Then, to integrate Prettier with ESlint, update your `.eslintrc.js` as follows
```javascript
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
```

for codespace use this command to access your app.
```bash
npx expo start --tunnel
```

```bash
npx expo install expo-font
```