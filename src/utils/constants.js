import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const isIOS = Platform.OS === 'ios' ? true : false;
export const isAndroid = Platform.OS === 'android' ? true : false;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;