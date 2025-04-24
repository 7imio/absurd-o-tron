interface NameDisplayProps {
    name:string}

const NameDisplay: React.FC<NameDisplayProps> = ({ name }) => {
    return (
        <div>
            <h2>Generated Name:</h2>
            <p className='displayed-name'>{name}</p>
        </div>
    );
}

export default NameDisplay;