import { Gender } from '../types/Genders';

import { getRandom } from './get-random';
import { middles, prefixes, suffixes, titlesMen, TitlesNeutral, titlesWomen } from './name-lists';

export const generateRandomName = (gender?: Gender): string => {
  const addTitle = Math.random() < 0.3; // 30% chance to add a title
  const addMiddle = Math.random() < 0.6; // 60% chance to add a middle

  const randomPrefix = getRandom(prefixes);
  const randomMiddle = getRandom(middles);
  const randomSuffix = getRandom(suffixes);

  return `${addTitle ? getRandomTitle(gender) : ''} ${randomPrefix}${
    addMiddle ? randomMiddle : ''
  }${randomSuffix}`;
};

const getRandomTitle = (gender?: Gender) => {
  switch (gender) {
    case Gender.FEMALE:
      return getRandom(titlesWomen);
    case Gender.MALE:
      return getRandom(titlesMen);
    case Gender.NEUTRAL:
      return getRandom(TitlesNeutral);
    default:
      break;
  }
};
