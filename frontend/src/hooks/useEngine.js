import { useState } from "react";
import useWords from "../hooks/useWords";
import useCountdownTimer from "../hooks/useCountdownTimer.js";
const NUMBER_OF_WORDS = 30;
const COUNTDOWN_SECONDS = 60
const useEngine = () => {
     const [state, setState] = useState("start");
    const { words, updateWords } = useWords(Number(NUMBER_OF_WORDS));
    const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(COUNTDOWN_SECONDS);
     return { state,words }
};

export default useEngine

