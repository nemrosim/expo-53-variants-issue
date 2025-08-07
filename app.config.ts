import {ConfigContext, ExpoConfig} from "@expo/config";

const IS_DEV = process.env.APP_VARIANT === 'development';

export default ({config}: ConfigContext): ExpoConfig => {
    return {
        "name": IS_DEV ? "Expo53-dev" : "Expo53",
        "slug": "expo-53-example",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "userInterfaceStyle": "light",
        "newArchEnabled": true,
        "splash": {
            "image": "./assets/splash-icon.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "ios": {
            "supportsTablet": true,
            "bundleIdentifier": IS_DEV ? "com.nemrosim.expo.dev" : "com.nemrosim.expo"
        },
        "android": {
            "adaptiveIcon": {
                "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#ffffff"
            },
            "edgeToEdgeEnabled": true
        },
        "web": {
            "favicon": "./assets/favicon.png"
        }
    }
}

