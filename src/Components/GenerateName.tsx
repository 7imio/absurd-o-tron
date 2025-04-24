import { FC } from 'react';
import { generateRandomName } from '../Helpers/generate-random-name';

interface GenerateNameProps {
    setName: (name: string) => void;
}   

const GenerateName: FC<GenerateNameProps> = ({setName}) => {

const handleGenerateName = () => setName(generateRandomName())

    return <>
    <p>Click the button to generate a name:</p>
    <button onClick={handleGenerateName}> Generate Name
    </button>
    </>
    
}

export default GenerateName;