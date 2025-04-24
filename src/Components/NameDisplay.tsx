import { useState } from 'react';

interface NameDisplayProps {
  name: string;
}

const NameDisplay: React.FC<NameDisplayProps> = ({ name }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!name) return;
    try {
      navigator.clipboard.writeText(name);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy the name. Please try again.');
      setCopied(false);
    }
  };

  return (
    <div className="name-wrapper">
      <h2>Generated Name:</h2>
      <div className="name-display">
        {name ? (
          <p className="displayed-name" onClick={handleCopy}>
            {name}
          </p>
        ) : (
          <p>Click the button to generate insanity !</p>
        )}
        {copied && <p className="copy-popup">✅ Name copied to clipboard!</p>}
      </div>
    </div>
  );
};

export default NameDisplay;
