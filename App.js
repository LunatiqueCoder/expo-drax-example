/** 
 * @description This file is needed for Expo Router to work with Snack
 * @link https://github.com/expo/snack/issues/459#issuecomment-2821318093
 */

import { ExpoRoot } from "expo-router";
import Head from "expo-router/head";

export default function ExpoRouterApp() {
    return (
        <Head.Provider>
            <ExpoRoot context={require.context("./app", true)} location="/" />
        </Head.Provider>
    );
}