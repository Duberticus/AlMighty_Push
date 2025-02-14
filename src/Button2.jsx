import { useRef, useState } from "react";

function Button2() {
    const buttonRef = useRef(null);
    const [intervalId, setIntervalId] = useState(null);

    const startMoving = () => {
        if (!intervalId) { 
            const id = setInterval(() => {
                if (buttonRef.current) {
                    buttonRef.current.style.position = "absolute";
                    buttonRef.current.style.left = `${Math.random() * (window.innerWidth)}px`; 
                    buttonRef.current.style.top = `${Math.random() * (window.innerHeight)}px`;
                }
            }, 10); 
            setIntervalId(id);
        }
    };

    const stopMoving = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const handleClick = () => {
        alert("noooooooo");
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={startMoving}
            onMouseLeave={stopMoving}
            onClick={handleClick}
            style={{ position: "absolute" }}
        >
            2nd button
        </button>
    );
}

export default Button2;
