import { MdRefresh } from "react-icons/md";
import PropTypes from 'prop-types';
import { useRef } from "react";

const RestartButton = ({ onRestart: handleRestart, className = "" }) => {
    const buttonRef = useRef(null); // Correct usage of useRef

    const handleClick = () => {
        if (buttonRef.current) {
            buttonRef.current.blur(); // Blurring the button element
        }
        handleRestart();
    }

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
        >
            <MdRefresh className="w-6 h-6" />
        </button>
    );
};

RestartButton.propTypes = {
    onRestart: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default RestartButton;