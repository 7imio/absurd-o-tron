import { FC, useEffect, useState } from 'react';

import './gender-selection.css';
import { Gender } from '../../types/Genders';

interface GenderSelectionProps {
  genderMode: string;
  setGenderMode: (mode: Gender) => void;
}

const GenderSelection: FC<GenderSelectionProps> = ({ genderMode, setGenderMode }) => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const [genderDisplay, setGenderDisplay] = useState('');

  useEffect(() => {
    setGenderDisplay(
      genderMode
        .toString()
        .toLowerCase()
        .split('-')
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('-')
    );
  }, [genderMode]);

  const handleMaleClick = () => {
    const newMale = !male;
    setMale(newMale);
    handleNewGenre(newMale, female);
  };
  const handleFemaleClick = () => {
    const newFemale = !female;
    setFemale(newFemale);
    handleNewGenre(male, newFemale);
  };

  const handleNewGenre = (male: boolean, female: boolean) => {
    if (male && female) {
      setGenderMode(Gender.NONBINARY);
    } else if (male) {
      setGenderMode(Gender.MALE);
    } else if (female) {
      setGenderMode(Gender.FEMALE);
    } else {
      setGenderMode(Gender.NEUTRAL);
    }
  };

  return (
    <div className="gender-switch">
      <button className={male ? 'active' : ''} title="Male" onClick={handleMaleClick}>
        ♂️
      </button>
      <p className="gender-display">{genderDisplay}</p>
      <button className={female ? 'active' : ''} title="Female" onClick={handleFemaleClick}>
        ♀️
      </button>
    </div>
  );
};

export default GenderSelection;
