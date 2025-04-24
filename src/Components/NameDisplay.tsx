interface NameDisplayProps {
    name:string}

const NameDisplay: React.FC<NameDisplayProps> = ({ name }) => {
    return (
        <div>
            <h2>Generated Name:</h2>
            {name ? <p className='displayed-name'>{name}</p> : <p className='displayed-name'>Click the button to generate insanity !</p>}
        </div>
    );
}

export default NameDisplay;