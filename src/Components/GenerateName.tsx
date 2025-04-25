import { FC, useState } from 'react';

import { generateRandomName } from '../Helpers/generate-random-name';
import { Gender } from '../types/Genders';

import GenderSelection from './GenderSelection/GenderSelection';

interface GenerateNameProps {
  setName: (name: string) => void;
}

const GenerateName: FC<GenerateNameProps> = ({ setName }) => {
  const [gender, setGender] = useState<Gender>(Gender.NEUTRAL);

  const handleGenerateName = (gender: Gender) => {
    const newName = generateRandomName(gender);
    setName(newName);
  };

  return (
    <>
      <p>Click the button to generate a name:</p>
      <GenderSelection genderMode={gender} setGenderMode={setGender} />
      <div>
        <button onClick={() => handleGenerateName(gender)}>Generate Name</button>
      </div>
    </>
  );
};

export default GenerateName;
