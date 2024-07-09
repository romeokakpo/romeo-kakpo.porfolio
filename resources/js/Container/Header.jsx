import { Link } from "@inertiajs/react";
import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode((dark) => !dark);
    };

    return (
        <header className="px-2 border-b border-gray-700">
            <nav className="text-white bg-transparent">
                <div className="flex items-center justify-between py-5">
                    <div>
                        <Link
                            href="/"
                            className="text-xl font-bold 2xl:text-2xl text-emerald-400"
                        >
                            Roméo KAKPO
                        </Link>
                    </div>
                    <ul className="hidden text-xs lg:flex lg:flex-row 2xl:text-sm">
                        <li>
                            <Link
                                href="/about"
                                className="px-4 transition-colors duration-300 hover:text-pink-600"
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about#experience"
                                className="px-4 transition-colors duration-300 hover:text-pink-600"
                            >
                                EXPERIENCE
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about#skills"
                                className="px-4 transition-colors duration-300 hover:text-pink-600"
                            >
                                SKILLS
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about#education"
                                className="px-4 transition-colors duration-300 hover:text-pink-600"
                            >
                                EDUCATION
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="px-4 transition-colors duration-300 hover:text-pink-600"
                            >
                                PROJECTS
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="px-4 transition-colors duration-300 hover:text-pink-600"
                            >
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    <div className="ml-4">
                        {darkMode ? (
                            <button onClick={toggleDarkMode}>
                                <MdOutlineLightMode className="w-5 h-5 2xl:w-6 2xl:h-6" />
                            </button>
                        ) : (
                            <button onClick={toggleDarkMode}>
                                <MdOutlineDarkMode className="w-5 h-5 2xl:w-6 2xl:h-6" />
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};
