import { Dimensions, Platform } from "react-native";
// import Config from 'react-native-config';
// export const config = {
//   apiUrl: Config.apiUrl,
//   blogApi: Config.blogApi,
//   shareUrl: Config.shareUrl,
//   authSite: Config.authSite,
//   facebookAuthUrl: Config.facebookAuthUrl,
//   googleAuthUrl: Config.googleAuthUrl,
//   mapsSearchUrl: Config.mapsSearchUrl,
//   mapUrl: Config.mapUrl,
//   geoServerUrl: Config.geoServerUrl,
//   otpServer: Config.otpServer,
//   codePushAndroidKey: Config.codePushAndroidKey,
//   codePushIosKey: Config.codePushIosKey,
//   NAME: Config.NAME,
//   googleMapsApi: Config.googleMapsApi,
//   NEXT_PUBLIC_AWS_REGION: Config.NEXT_PUBLIC_AWS_REGION,
//   NEXT_PUBLIC_AWS_COGNITO_POOL_REGION:
//     Config.NEXT_PUBLIC_AWS_COGNITO_POOL_REGION,
//   NEXT_PUBLIC_AWS_COGNITO_POOL_ID: Config.NEXT_PUBLIC_AWS_COGNITO_POOL_ID,
//   NEXT_PUBLIC_AWS_COGNITO_POOL_WEB_ID:
//     Config.NEXT_PUBLIC_AWS_COGNITO_POOL_WEB_ID,
//   NEXT_PUBLIC_AWS_DOMAIN: Config.NEXT_PUBLIC_AWS_DOMAIN,
//   NEXT_PUBLIC_SOCIAL_SIGN_IN_URL: Config.NEXT_PUBLIC_SOCIAL_SIGN_IN_URL,
//   NEXT_PUBLIC_SOCIAL_SIGN_OUT_URL: Config.NEXT_PUBLIC_SOCIAL_SIGN_OUT_URL,
//   CODE_PUSH_IOS_KEY: Config.CODE_PUSH_IOS_KEY,
//   CODE_PUSH_ANDROID_KEY: Config.CODE_PUSH_ANDROID_KEY,
// };
// export const encrpytion_key = 'graana@123';

// const SERVER_URL = config.apiUrl; // --- Production

// const googleMapsApi = config.googleMapsApi;
const FontBold = "Poppins-Bold";
const FontSemiBold = "Poppins-SemiBold";
const FontMedium = "Poppins-Medium";
const FontRegular = "Poppins-Regular";
const FontLight = "Poppins-Light";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

const w = (i: number) => layout.window.width * i;

const h = (i: number) => layout.window.height * i;

const getAge = (str: string) => {
  let temp = new Date(str);
  let current = new Date();
  let difference = current.getTime() - temp.getTime();

  return Math.ceil(difference / (1000 * 3600 * 24));
};

export const isAndroid: boolean = Platform.OS !== "ios";

export {
  // SERVER_URL,
  FontBold,
  FontSemiBold,
  FontMedium,
  FontRegular,
  FontLight,
  layout,
  h,
  w,
  getAge,
  // googleMapsApi,
};
