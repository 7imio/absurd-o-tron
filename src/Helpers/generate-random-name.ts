import { getRandom } from "./get-random";
import { middles, prefixes, suffixes, titles } from "./name-lists";

export const generateRandomName = (): string => {
  const addTitle = Math.random() < 0.3; // 30% chance to add a title
  const addMiddle = Math.random() < 0.6; // 60% chance to add a middle

  const randomPrefix = getRandom(prefixes);
  const randomMiddle = getRandom(middles);
  const randomSuffix = getRandom(suffixes);

  return `${addTitle ? getRandom(titles) : ""} ${randomPrefix}${
    addMiddle ? randomMiddle : ""
  }${randomSuffix}`;
};
