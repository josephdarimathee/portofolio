'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkedLearnDialog: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Définir un timer pour 5 minutes (300000 ms)
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 300000);

        // Nettoyer le timer si le composant est démonté
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleVisitSite = () => {
        window.open('https://site-vitrine-jet.vercel.app/', '_blank');
        setIsOpen(false);
    };

    // Variants d'animation pour le backdrop
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    // Variants d'animation pour la boîte de dialogue
    const dialogVariants = {
        hidden: {
            y: -50,
            opacity: 0,
            scale: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 20
            }
        },
        exit: {
            y: 50,
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={handleClose}
                >
                    <motion.div
                        className="bg-gradient-to-br from-[#0a0a2a] to-[#1a1a4a] border border-[#3b82f6] rounded-2xl p-6 max-w-md w-full shadow-2xl"
                        variants={dialogVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Découvrez WorkedLearn
                            </h2>
                            <button
                                onClick={handleClose}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-300 mb-6 text-lg">
                            Visitez mon  site vitrine pour découvrir mes services et réalisations.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={handleClose}
                                className="px-6 py-3 text-gray-300 hover:text-white transition-colors rounded-lg border border-gray-600 hover:border-gray-400"
                            >
                                Fermer
                            </button>
                            <button
                                onClick={handleVisitSite}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                            
                            >
                                Visiter le site
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WorkedLearnDialog;