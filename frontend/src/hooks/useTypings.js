import {useCallback, useEffect, useRef, useState} from "react";

const isKeyboardCodeAllowed = (code) => {
    return (
        code.startsWith("Key") ||
        code.startsWith("Digit") ||
        code === "Backspace" ||
        code === "Space"
    );

};

const useTypings = (enabled) => {
    const [cursor, setCursor] = useState(0);
    const [typed, setTyped] = useState("");
    const totalTyped = useRef(0);

    const keydownHandler = useCallback(({key, code }) => {
        if (!enabled || !isKeyboardCodeAllowed(code)) {
            return;
        }

        switch (key) {
            case "Backspace":
                setTyped((prev) => prev.slice[0,-1]);
                setCursor(cursor-1)
                totalTyped.current -= 1;
        }
    }, [cursor,enabled]);

    useEffect (() => {
        window.addEventListener("keydown", keydownHandler);
        return () => {
            window.removeEventListener("keydown", keydownHandler);
        };
    }, [keydownHandler]);
};
export default useTypings;