module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    "react-native-worklets/plugin", // ✅ replace old reanimated/plugin with this
  ],
};
