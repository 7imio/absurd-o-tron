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
  if (!gender) {
    return getRandom(TitlesNeutral); // Neutral title
  } else {
    //   const isGendered = Math.random() < 0.5; // 50% chance to get a title neutral or gendered
    //   if (isGendered) {
    //   return getRandom(TitlesNeutral); // Neutral title
    // }
    // else
    // {
    return getRandom(gender === Gender.FEMALE ? titlesWomen : titlesMen);
    // }
  }
};
