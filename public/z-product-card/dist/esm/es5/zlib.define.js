// zlib: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './zlib.core.js';
import {
  ZProductCard
} from './zlib.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    ZProductCard
  ], opts);
}