import { FC, useState } from 'react';

import { generateRandomName } from '../Helpers/generate-random-name';
import { Gender } from '../types/Genders';

interface GenerateNameProps {
  setName: (name: string) => void;
}

const GenerateName: FC<GenerateNameProps> = ({ setName }) => {
  const [isGendered, setIsGendered] = useState<boolean>(false); // State to track
  const [gender, setGender] = useState<Gender | undefined>(undefined);

  const handleGenerateName = (gender?: Gender) => {
    const newName = generateRandomName(gender);
    setName(newName);
  };

  const switchToNeutral = () => {
    setIsGendered(false);
    setGender(undefined); // Reset
  };

  const switchToGendered = () => {
    setIsGendered(true);
    setGender(Math.random() < 0.5 ? Gender.FEMALE : Gender.MALE); // Random
  };

  return (
    <>
      <p>Click the button to generate a name:</p>
      <div>
        <button onClick={() => handleGenerateName(gender)}> Generate Name</button>
        <button
          onClick={() => {
            if (isGendered === true) {
              switchToNeutral();
            } else {
              switchToGendered();
            }
          }}
          title={isGendered ? 'Switch to Neutral' : 'Switch to Gendered'}
        >
          '⚥'
        </button>
        {isGendered && (
          <div>
            <button
              onClick={() => {
                const newGender = gender === Gender.MALE ? Gender.FEMALE : Gender.MALE;
                handleGenerateName(newGender);
                setGender(newGender);
              }}
            >
              {gender === Gender.MALE ? '♂️' : '♀️'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GenerateName;
