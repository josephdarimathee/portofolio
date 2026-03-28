'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faX, faGlobe, faStar } from '@fortawesome/free-solid-svg-icons';

const WorkedLearnDialog: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 300000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => setIsOpen(false);

    const handleVisitSite = () => {
        window.open('https://site-vitrine-txf1.vercel.app/', '_blank');
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-50 bg-[#090d1a]/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={handleClose}
                    />

                    {/* Dialog centré — pointer-events-none sur le wrapper, auto sur la card */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            className="relative w-full max-w-md pointer-events-auto"
                            initial={{ opacity: 0, y: 24, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.95 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Halo derrière la card */}
                            <div className="absolute -inset-4 rounded-3xl bg-[#3b82f6] opacity-[0.06] blur-[60px] pointer-events-none" />

                            {/* Card */}
                            <div className="relative bg-[#0d1220] border border-[#1e2a4a] rounded-2xl overflow-hidden shadow-2xl">

                                {/* Ligne top */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent pointer-events-none" />

                                {/* Déco intérieure */}
                                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#3b82f6] opacity-[0.04] blur-[60px] pointer-events-none" />
                                <div
                                    className="absolute inset-0 opacity-[0.02] pointer-events-none"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
                                        backgroundSize: '32px 32px',
                                    }}
                                />

                                <div className="relative z-10 p-7">

                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-xl bg-[#3b82f610] border border-[#3b82f625] flex items-center justify-center shrink-0">
                                                <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 text-[#3b82f6]" />
                                            </div>
                                            <div>
                                                <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full border border-[#3b82f640] bg-[#3b82f610] mb-1">
                                                    <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-[#3b82f6]" />
                                                    <span className="text-[10px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">
                                                        Site vitrine
                                                    </span>
                                                </div>
                                                <h2 className="text-lg font-black text-white leading-tight">
                                                    Découvrez{' '}
                                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">
                                                        ServiceExpress
                                                    </span>
                                                </h2>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleClose}
                                            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#ffffff10] transition-all duration-200 shrink-0 ml-2"
                                        >
                                            <FontAwesomeIcon icon={faX} className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Séparateur */}
                                    <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f620] to-transparent mb-5" />

                                    {/* Description */}
                                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                        Visitez mon site vitrine pour découvrir mes{' '}
                                        <span className="text-gray-200 font-semibold">services</span> et{' '}
                                        <span className="text-gray-200 font-semibold">réalisations</span>.
                                        Une expérience pensée pour vous donner envie de collaborer.
                                    </p>

                                    {/* URL live */}
                                    <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-[#0a0f1e] border border-[#1e2a4a]">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                                        <span className="text-xs text-gray-400 font-mono truncate">site-vitrine-txf1.vercel.app</span>
                                        <span className="ml-auto text-[10px] font-bold text-[#3b82f6] font-mono uppercase tracking-widest shrink-0">Live ↗</span>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={handleClose}
                                            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-400 border border-[#1e2a4a] hover:border-[#3b82f640] hover:text-white bg-transparent transition-all duration-200 font-mono"
                                        >
                                            Plus tard
                                        </button>
                                        <button
                                            onClick={handleVisitSite}
                                            className="flex-1 group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-black text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#3b82f630]"
                                        >
                                            Visiter le site
                                            <FontAwesomeIcon icon={faUpRightFromSquare} className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WorkedLearnDialog;
