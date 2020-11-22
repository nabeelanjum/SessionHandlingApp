import {SCREEN_HEIGHT, SCREEN_WIDTH, BASE_UNIT_WIDTH, BASE_UNIT_HEIGHT} from './constants';

export function normalizeFont(size, uncontrolled = false) {
  const fontSize = (SCREEN_HEIGHT/BASE_UNIT_HEIGHT)*size;
  if (uncontrolled) {
    return fontSize;
  } else {
    return fontSize > 20 ? 20 : fontSize;
  }
}

export function normalizeX(size) {
  return Math.round((SCREEN_WIDTH/BASE_UNIT_WIDTH)*size);
}

export function normalizeY(size) {
  return Math.round((SCREEN_HEIGHT/BASE_UNIT_HEIGHT)*size);
}