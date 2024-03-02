import React from "react";
import { motion } from "framer-motion";




// active: this prop represents wether the button/ tab is currently active or not. 
// its a boolean value 
// selectTab: This prop is a function that will be called when the button/tab is clicked.
// It's a callback function provided by the parent component to handle tab selection
// children: This prop represents the content of the TabButn.
const TabButton = ({ active, selectTab, children }) => {
    // When the button calss is active the text will be while and a blue border will appear at the 
    // bottom of thee text
    const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]'

    const variants = {
        default: { width: 0 },
        active: { width: "calc(100% - 0.75rem)" },
    };


    return (
        // On click of the buttn
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className='h-1 bg-blue-500 mt-2 mr-3'
            ></motion.div>
        </button>
    )
}

export default TabButton;
