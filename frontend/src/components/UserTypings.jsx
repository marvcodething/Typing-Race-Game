import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const UserTypings = ({
                         userInput, // Now expecting an array
                         words,
                         className = '',
                     }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Join the user input with spaces and split into characters
    const typedCharacters = userInput.join(' ').split('');

    // Join the words with spaces and split into characters
    const expectedCharacters = words.join(' ').split('');

    // Function to handle index updating
    const updateIndex = (typedChar, expectedChar) => {
        if (typedChar === expectedChar) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    // Call updateIndex for each character typed
    typedCharacters.forEach((char, index) => {
        if (index === currentIndex) {
            updateIndex(char, expectedCharacters[index]);
        }
    });

    return (
        <div className={className}>
            {expectedCharacters.map((char, index) => (
                <Character
                    key={`${char}_${index}`}
                    actual={typedCharacters[index] || ''}
                    expected={char}
                    isCurrent={index === currentIndex}
                />
            ))}
        </div>
    );
};

UserTypings.propTypes = {
    userInput: PropTypes.arrayOf(PropTypes.string).isRequired, // Now accepting an array of strings
    words: PropTypes.arrayOf(PropTypes.string).isRequired, // Assuming words is also an array of strings
    className: PropTypes.string,
};

UserTypings.defaultProps = {
    className: '',
};

const Character = ({
                       actual,
                       expected,
                       isCurrent,
                   }) => {
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === ' ';

    return (
        <span
            className={cn({
                'text-red-500': !isCorrect && !isWhiteSpace && isCurrent,
                'text-primary-400': isCorrect && !isWhiteSpace && isCurrent,
                'bg-red-500/50': !isCorrect && isWhiteSpace && isCurrent,
                'text-gray-500': !isCurrent, // Optional: Add a style for characters not currently focused
            })}
        >
      {expected}
    </span>
    );
};

Character.propTypes = {
    actual: PropTypes.string.isRequired,
    expected: PropTypes.string.isRequired,
    isCurrent: PropTypes.bool.isRequired,
};

export default UserTypings;