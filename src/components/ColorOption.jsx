import React from "react";

function ColorOption({ onSetColor, option }) {
    const handleColorFilter = () => {
        onSetColor(option);
    };

    return (
        <>
            <button onClick={handleColorFilter} className="btn color-options" style={{ marginBottom: "0.4rem" }}>
                <div style={{ height: "2rem", width: "2rem", borderRadius: "5px", border: "1px black solid", backgroundColor: `${option}` }}></div>
            </button>
        </>
    );
}

export default ColorOption;
