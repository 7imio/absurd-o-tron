import { FC } from 'react';

import './gender-selection.css';
import { Gender } from '../../types/Genders';

interface GenderSelectionProps {
  genderMode: string;
  setGenderMode: (mode: Gender) => void;
}

const GenderSelection: FC<GenderSelectionProps> = ({ genderMode, setGenderMode }) => {
  return (
    <div className="gender-switch">
      <button
        className={genderMode === 'neutral' ? 'active' : ''}
        title="Neutral mode"
        onClick={() => {
          setGenderMode(Gender.NEUTRAL);
        }}
      >
        ⚧️
      </button>
      <button
        className={genderMode === 'male' ? 'active' : ''}
        title="Male"
        onClick={() => setGenderMode(Gender.MALE)}
      >
        ♂️
      </button>
      <button
        className={genderMode === 'female' ? 'active' : ''}
        title="Female"
        onClick={() => setGenderMode(Gender.FEMALE)}
      >
        ♀️
      </button>
    </div>
  );
};

export default GenderSelection;
