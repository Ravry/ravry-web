import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Notification() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    className="fixed flex flex-col justify-center items-center z-50 w-full h-full backdrop-blur-xl"
                >
                    <div className="flex flex-col gap-5 w-100 p-5">
                        <h1 className="text-2xl font-bold">
                            🚀 Contribute to My Project!
                        </h1>
                        <p>
                            Hey everyone! I'm working on an open-source project called Glint – and I’d love your help! If you're interested in contributing, check it out on GitHub: <a href="https://github.com/Ravry/glint" className="underline text-blue-500">https://github.com/Ravry/glint</a>.<br />
                            <br />
                            Whether you're into coding, testing, documentation, or just want to give feedback, every bit helps.✨
                        </p>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow-xl hover:bg-blue-700 transition"
                        >
                            Ok!
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
