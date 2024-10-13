// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// // used to local packages
// if (__DEV__) {
//   config.resolver.disableHierarchicalLookup = true;
//   // 2. Let Metro know where to resolve packages and in what order
//   config.resolver.nodeModulesPaths = [
//     path.resolve(__dirname, 'node_modules/@reduxjs/toolkit/node_modules'),
//     path.resolve(__dirname, 'node_modules'),
//   ];
//
//   config.resolver.enableGlobalPackages = true;
//   config.watchFolders = ['/Users/myuser/Desktop/react-native-drax'];
// }

module.exports = config;


