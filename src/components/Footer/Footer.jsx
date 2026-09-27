import React, { useState } from 'react';
import firma from "../../assets/img/firma_sara.png";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isInstaHovered, setIsInstaHovered] = useState(false);
    const [isCvHovered, setIsCvHovered] = useState(false);

    return (
        <>
            <div id="contact" className="container p-3">
                {/* Su mobile in colonna e centrato, su desktop in riga con spazio tra gli elementi */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
                    <a
                        href="/#home"
                        className="uppercase Aktiv-Grotesk-Black text-decoration-none animate-fonts"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            width: '150px', // Regola in base alla larghezza della tua scritta/firma
                            height: '50px',
                            fontSize: "25px",
                            transition: "all 0.3s ease",
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => {
                            // Attiva lo stato solo se il dispositivo ha un vero mouse (desktop)
                            if (window.matchMedia('(hover: hover)').matches) {
                                setIsHovered(true);
                            }
                        }}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={() => setIsHovered(false)} // Resetta subito l'effetto al tocco su mobile
                    >
                        {/* Testo */}
                        <span style={{
                            opacity: isHovered ? 0 : 1,
                            transition: 'opacity 0.2s ease',
                            color: 'black',
                            fontSize: '18px'
                        }}>
                            sara molino
                        </span>

                        {/* Immagine */}
                        <img
                            src={firma}
                            alt="Firma"
                            style={{
                                position: 'absolute',
                                opacity: isHovered ? 1 : 0,
                                width: '100%',
                                height: 'auto',
                                pointerEvents: 'none',
                                transition: 'opacity 0.2s ease',
                                objectFit: 'contain'
                            }}
                        />
                    </a>

                    {/* Contenitore per Email e Bottone Download Portfolio */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <motion.a
                            href="mailto:saramolino35@gmail.com"
                            className="m-0 Aktiv-Grotesk-Light text-black text-decoration-none"
                            style={{ fontWeight: 300, willChange: "font-weight" }}
                            whileHover={{ fontWeight: 700, y: -2, rotate: 1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            saramolino35@gmail.com
                        </motion.a>

                    </div>

                    <div className="flex justify-between items-center gap-3 text-xl">


                        <div className='relative inline-block'>
                            {/* <AnimatePresence>
                                {isCvHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.5, y: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-10 whitespace-nowrap pointer-events-none"
                                    >
                                        <div className="bg-white text-black font-extrabold text-xs px-3 py-1.5 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
                                            *se non l’hai già visto qui trovi la versione noiosa di tutto lo sbatti che ho fatto <br /> per arrivare fin qui e, spoiler, non è ancora finita
                                        </div>
                                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black mx-auto -mt-[1px]" />
                                    </motion.div>
                                )}
                            </AnimatePresence> */}
                            {/* Bottone Scarica Portfolio */}
                            <motion.a
                                href="/portfolio.pdf" 
                                download="Portfolio_Sara_Molino.pdf" // Nome che avrà il file scaricato
                                className="flex items-center gap-2 border border-black text-black px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200"
                                whileHover={{ y: -2, scale: 1.03 }}
                                onMouseEnter={() => setIsCvHovered(true)}
                                onMouseLeave={() => setIsCvHovered(false)}
                                whileTap={{ scale: 0.95 }}
                            >
                                <i className="fa-solid fa-download"></i>
                                <span>CV</span>
                            </motion.a>
                        </div>

                        {/* Container del badge di Instagram + Fumetto */}
                        <div className="relative inline-block">
                            {/* Fumetto Pop-up */}
                            <AnimatePresence>
                                {isInstaHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.5, y: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-10 whitespace-nowrap pointer-events-none"
                                    >
                                        {/* Box stile fumetto */}
                                        <div className="bg-white text-black font-extrabold text-xs px-3 py-1.5 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
                                            *se ti avanza un follow clicca qui!
                                        </div>
                                        {/* Freccetta del fumetto */}
                                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black mx-auto -mt-[1px]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Icona Instagram */}
                            <motion.a
                                href="https://www.instagram.com/salefino.sm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                className="text-black no-underline block"
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => {
                                    if (window.matchMedia('(hover: hover)').matches) {
                                        setIsInstaHovered(true);
                                    }
                                }}
                                onMouseLeave={() => setIsInstaHovered(false)}
                                onTouchStart={() => setIsInstaHovered(false)}
                                whileHover={
                                    typeof window !== "undefined" && window.matchMedia('(hover: hover)').matches
                                        ? { y: -5, rotate: 5 }
                                        : {}
                                }
                                whileTap={{ scale: 0.9 }}
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </motion.a>
                        </div>

                        <motion.a
                            href="https://www.linkedin.com/in/sara-molino-6604882b3/"
                            className="text-black no-underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </motion.a>
                    </div>
                </div>

                {/* Testo finale centrato su mobile per estetica, mantenuto normale su desktop */}
                <motion.a href="#" className="Aktiv-Grotesk-Light text-black text-center md:text-left text-sx md:text-md mt-3 md:mt-2 block text-decoration-none">
                    © 2026 tutti i diritti riservati, se hai letto fin qua giù ora le opzioni sono due: o mi offri un lavoro o un aperitivo
                </motion.a>
            </div>
        </>
    )
}

export default Footer;