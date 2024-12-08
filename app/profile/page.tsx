"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PhotoUrl from '../../public/assets/profile.jpg';
import { motion } from "framer-motion";

const Profile = (): JSX.Element => {
    const skill = [
        { name: "Python", icon: "/assets/skill/python.png" },
        { name: "Java", icon: "/assets/skill/java.png" },
        { name: "C", icon: "/assets/skill/c.png" },
        { name: "HTML", icon: "/assets/skill/html.png" },
        { name: "CSS", icon: "/assets/skill/css.png" },
        { name: "Java Script", icon: "/assets/skill/js.png" },
        { name: "Procreate", icon: "/assets/skill/procreate.png" },
        { name: "Godot", icon: "/assets/skill/godot.png" },
        { name: "Word", icon: "/assets/skill/word.png" },
        { name: "Canva", icon: "/assets/skill/canva.png" },
    ];

    const profile = [
        { field: "Name:", value: "Chayapa Suwanchinda" },
        { field: "Age:", value: "17 Year Old" },
        { field: "Birthdate :", value: "30/01/2007" },
        { field: "Nationality:", value: "Thai" },
        { field: "Tel:", value: "0963798828" },
        { field: "Email:", value: "suwanchindachaypa@gmail.com" },
    ];

    const hobby = [
        { name: "Programming", icon: "/assets/hobby/programming.png" },
        { name: "Language Learning", icon: "/assets/hobby/language.png" },
        { name: "Badminton", icon: "/assets/hobby/badminton.png" },
        { name: "Drawing", icon: "/assets/hobby/drawing.png" },
        { name: "Reading Books", icon: "/assets/hobby/book.png" },
    ];

    const education = [
        { field: "Primary School: ", name: "Triam Parinyanusorn School", icon: "/assets/education/primary.jpg" },
        { field: "Middle School: ", name: "Poolcharoen Witthayakhom School", icon: "/assets/education/highschool.png" },
        { field: "High School: ", name: "Poolcharoen Witthayakhom School", icon: "/assets/education/highschool.png" }
    ];

    return (
        <div>
            <div className="container mx-auto h-full text-neutral-600">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.2, duration: 0.6, ease: "easeIn" }
                    }}
                    className="flex flex-col justify-center items-center mb-8 xl:mb-0"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" }
                        }}
                        className="relative w-[45vh] h-[45vh] mb-8"
                    >
                        <Image
                            src={PhotoUrl}
                            priority
                            quality={100}
                            alt="Profile Photo"
                            layout="fill"
                            className="object-cover rounded-full"
                        />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.8, duration: 0.6, ease: "easeInOut" }
                        }}
                        className="h3 mb-2 xl:mb-8 text-center"
                    >
                        <span className="text-accent font-extrabold text-3xl">`Profile`</span> is not just a reflection of who we are, <br /> But a story of what we’ve learned and how far we’ve come.
                    </motion.h1>
                </motion.div>

                {/* Adjusted Layout for Profile and Education */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1, duration: 0.6, ease: "easeIn" }
                    }}
                    className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-32 mt-8"
                >
                    {/* Personal Information Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 1.2, duration: 0.6, ease: "easeInOut" }
                        }}
                        className="w-full xl:w-1/2 flex flex-col gap-8 px-4 items-center justify-center"
                    >
                        <div className="flex flex-col gap-4 space-y-4">
                            <Button disabled={true} className="flex items-center justify-center text-white text-2xl w-48 h-12 mx-auto">
                                Profile
                            </Button>
                            <div className="gap-4">
                                {profile.map((element, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-4">
                                        <span className="text-accent-hover font-semibold">{element.field}</span>
                                        <span>{element.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 1.4, duration: 0.6, ease: "easeInOut" }
                        }}
                        className="w-full xl:w-1/2 flex flex-col gap-8 px-4 items-center justify-center"
                    >
                        <div className="flex flex-col gap-4 space-y-4">
                            <Button disabled={true} className="flex items-center justify-center text-white text-2xl w-48 h-12 mx-auto">
                                Education
                            </Button>
                            <div className="gap-4">
                                {education.map((element, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-4">
                                        <Image
                                            src={element.icon}
                                            width={80}
                                            height={80}
                                            alt={`${element.name} icon`}
                                            className="object-cover rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-accent-hover font-semibold">{element.field}</span>
                                            <span className="ml-2 font-semibold">{element.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            <div className="container mx-auto h-full text-neutral-600 ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.6, duration: 0.6, ease: "easeIn" }
                    }}
                    className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-32 mt-8"
                >
                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 1.8, duration: 0.6, ease: "easeInOut" }
                        }}
                        className="w-full xl:w-1/2 flex flex-col gap-8 px-4 items-center justify-center"
                    >
                        <div className="flex flex-col gap-4 space-y-4">
                            <Button disabled={true} className="flex items-center justify-center text-white text-2xl w-48 h-12 mx-auto">
                                Skill
                            </Button>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {skill.map((element, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-4">
                                        <Image
                                            src={element.icon}
                                            width={40}
                                            height={40}
                                            alt={`${element.name} icon`}
                                            className="object-cover rounded-full"
                                        />
                                        <span>{element.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Hobby Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 2, duration: 0.6, ease: "easeInOut" }
                        }}
                        className="w-full xl:w-1/2 flex flex-col gap-8 px-4 items-center justify-center"
                    >
                        <div className="flex flex-col xl:space-y-14">
                            <Button disabled={true} className="flex items-center justify-center text-white text-2xl w-48 h-12 mx-auto">
                                Hobby
                            </Button>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {hobby.map((element, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-4">
                                        <Image
                                            src={element.icon}
                                            width={40}
                                            height={40}
                                            alt={`${element.name} icon`}
                                            className="object-cover rounded-full"
                                        />
                                        <span>{element.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
