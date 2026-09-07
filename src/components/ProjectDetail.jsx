import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../components/projectsData.js";
import { motion } from "framer-motion";

// Crea la versione animata del Link di React Router
const MotionLink = motion.create ? motion.create(Link) : motion(Link);

// Varianti per le animazioni
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.1, // Anima gli elementi figli in sequenza
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === Number(id));

    const [open, setOpen] = useState(false);

    if (!project) {
        return <div className="container py-12 text-center"><h1>Progetto non trovato</h1></div>;
    }

    return (
        <motion.div
            className="pt-4 md:py-12"
            style={{ marginTop: "80px" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col-reverse md:flex-row">

                {/* COLONNA IMMAGINI */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                    {project.video && (
                        <motion.div variants={itemVariants} className="img-size-project-desktop img-size-project-mobile mb-12 mt-12 md:mt-0">
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                playsInline
                                controls
                                className="object-cover h-full w-full">
                            </video>
                        </motion.div>
                    )}

                    {project.gallery && project.gallery.map((img, index) => (
                        <motion.div key={index} variants={itemVariants} className="img-size-project-desktop img-size-project-mobile mb-12">
                            <img
                                src={img}
                                alt={`${project.name} - ${index}`}
                                className="object-cover h-full w-full"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* COLONNA TESTO */}
                <div className="w-full lg:w-1/2 px-6 md:px-12 lg:px-8">
                    <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-8">
                        <motion.h1 variants={itemVariants} className="Aktiv-Grotesk-Black uppercase text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] m-0 p-0">
                            {project.title}
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="Aktiv-Grotesk-RegularItalic text-lg md:text-xl mt-2 mb-8">
                            {project.subtitle}
                        </motion.h2>

                        <motion.div variants={itemVariants} className="space-y-6 text-[16px] md:text-[18px] text-zinc-800 leading-thight mt-4 pb-4">
                            {project.description1 && <p>{project.description1}</p>}
                            {project.description2 && <p>{project.description2}</p>}
                            {project.description3 && <p>{project.description3}</p>}
                            {project.description4 && <p>{project.description4}</p>}
                            {project.description5 && <p>{project.description5}</p>}
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 md:gap-3">
                            {project.tags.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className="px-3 py-1.5 md:px-4 md:py-2 text-md md:text-base border border-black text-black whitespace-nowrap uppercase"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="hidden md:flex flex-col sm:flex-row justify-between items-center gap-4 my-12">
                            {project.workbackId ? (
                                <MotionLink
                                    to={`/project/${project.workbackId}`}
                                    className="w-full sm:w-auto flex justify-center items-center border bg-black px-4 py-2 text-decoration-none text-white"
                                    whileHover={
                                        typeof window !== "undefined" && window.matchMedia('(hover: hover)').matches
                                            ? { y: -5, rotate: 5 }
                                            : {}
                                    }
                                >
                                    <i className="fa-solid fa-caret-left text-lg md:text-xl mr-2"></i>
                                    <p className="Aktiv-Grotesk-RegularItalic text-lg md:text-xl m-0 p-0">{project.workback}</p>
                                </MotionLink>
                            ) : <div />}

                            {project.worknextId ? (
                                <MotionLink
                                    to={`/project/${project.worknextId}`}
                                    className="w-full sm:w-auto flex justify-center items-center border bg-black px-4 py-2 text-decoration-none text-white"
                                    whileHover={
                                        typeof window !== "undefined" && window.matchMedia('(hover: hover)').matches
                                            ? { y: -5, rotate: -5 }
                                            : {}
                                    }
                                >
                                    <p className="Aktiv-Grotesk-RegularItalic text-lg md:text-xl m-0 p-0">{project.worknext}</p>
                                    <i className="fa-solid fa-caret-right text-lg md:text-xl ml-2"></i>
                                </MotionLink>
                            ) : <div />}
                        </motion.div>
                    </div>
                </div>
            </div>



            {/* BOTTONI SU MOBILE */}

            <motion.div variants={itemVariants} className="md:hidden flex flex-col sm:flex-row justify-between items-center gap-4 my-12">
                {project.workbackId ? (
                    <MotionLink
                        to={`/project/${project.workbackId}`}
                        className="w-full sm:w-auto flex justify-center items-center border bg-black px-4 py-2 text-decoration-none text-white"
                    >
                        <i className="fa-solid fa-caret-left text-lg md:text-xl mr-2"></i>
                        <p className="Aktiv-Grotesk-RegularItalic text-lg md:text-xl m-0 p-0">{project.workback}</p>
                    </MotionLink>
                ) : <div />}

                {project.worknextId ? (
                    <MotionLink
                        to={`/project/${project.worknextId}`}
                        className="w-full sm:w-auto flex justify-center items-center border bg-black px-4 py-2 text-decoration-none text-white"
                    >
                        <p className="Aktiv-Grotesk-RegularItalic text-lg md:text-xl m-0 p-0">{project.worknext}</p>
                        <i className="fa-solid fa-caret-right text-lg md:text-xl ml-2"></i>
                    </MotionLink>
                ) : <div />}
            </motion.div>
        </motion.div>
    );
};

export default ProjectDetail;