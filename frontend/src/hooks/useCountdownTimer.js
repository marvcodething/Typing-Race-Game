import { useCallback, useEffect, useState, useRef } from "react";

const useCountdownTimer = (seconds) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef(null);

    const startCountdown = useCallback(() => {
        console.log("Starting countdown...");

        intervalRef.current = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);
    }, [setTimeLeft]);

    const resetCountdown = useCallback(() => {
        console.log("Resetting countdown...");

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        setTimeLeft(seconds);
    }, [seconds]);

    useEffect(() => {
        if (timeLeft <= 0 && intervalRef.current) {
            console.log("Clearing timer...");

            clearInterval(intervalRef.current);
        }
    }, [timeLeft]);

    return { timeLeft, startCountdown, resetCountdown };
};

export default useCountdownTimer;