import LogoChrome from '@/assets/logo-chrome.svg';
import LogoFirefox from '@/assets/logo-firefox.svg';
import LogoOpera from '@/assets/logo-opera.svg';
import type { Card } from '@/types/card.type';

export const cards: Card[] = [
  {
    imageUrl: LogoChrome,
    title: "Chrome",
    version: 62,
  },
  {
    imageUrl: LogoFirefox,
    title: "Firefox",
    version: 55,
  },
  {
    imageUrl: LogoOpera,
    title: "Opera",
    version: 46,
  },
];
