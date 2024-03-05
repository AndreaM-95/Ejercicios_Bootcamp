import React from 'react';
import {motion} from "framer-motion";

const TransitionVariants = {
    initial:{
        y: "100%",
        height: "100%"
    },

    animate:{
        y: "0%",
        height: "0%"
    },

    exit:{
        y: ["0%", "100%"],
        height: ["0%", "100%"]
    }
}

function Transition() {
  return (
    <div>
        <motion.div 
            className='h-screen w-screen botton-full'
            variants={TransitionVariants}
            initial= "initial"
            exit= "exit"
            animate= "animate"
            transition={{delay:0.4, duration: 0.8, ease:"easeInOut"}}
        >
        </motion.div>

        <motion.div 
            className='h-screen w-screen botton-full'
            variants={TransitionVariants}
            initial= "initial"
            exit= "exit"
            animate= "animate"
            transition={{delay:0.6, duration: 0.8, ease:"easeInOut"}}
        >
        </motion.div>

        <motion.div 
            className='h-screen w-screen botton-full'
            variants={TransitionVariants}
            initial= "initial"
            exit= "exit"
            animate= "animate"
            transition={{delay:0.8, duration: 0.8, ease:"easeInOut"}}
        >
        </motion.div>
    </div>
  );
}

export default Transition;

