import React from "react";

function ColorOption({ onSetColor, option }) {

    const handleColorFilter = (event) => {
        onSetColor(option);
        selectedColor(event.target);
    };

    const selectedColor = (element) => {
        let elem = document.querySelectorAll(".selected");
        for (let i of elem){
            i.classList.remove("selected");
        }
        element.classList.add("selected");
    };


    return (
        <>
            <button onClick={handleColorFilter} className="btn color-option" style={{ marginBottom: "0.4rem" }}>
                <div style={{ height: "2rem", width: "2rem", borderRadius: "5px", border: "1px black solid", backgroundColor: `${option}` }}></div>
            </button>
        </>
    );
}

export default ColorOption;
