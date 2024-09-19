import { faker } from '@faker-js/faker';
import { useCallback, useState } from 'react';

const generateWords = (count) => {
    return faker.word.words(count).toLowerCase();
};

const useWords = (initialCount) => {
    const [words, setWords] = useState(generateWords(initialCount));

    const updateWords = useCallback(() => {
        setWords(generateWords(initialCount));
    }, [initialCount]);

    return { words, updateWords };
};

export default useWords;