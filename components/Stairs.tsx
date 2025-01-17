import { motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    },
};

// calculate the reverse index fot staggred delay
const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}


const Stairs = (): JSX.Element => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className="h-full w-full bg-[#F6A6B8] relative"
                    />
                )
            })}
        </>
    )
}

export default Stairs