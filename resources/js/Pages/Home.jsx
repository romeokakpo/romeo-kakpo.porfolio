import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head, Link } from "@inertiajs/react";
import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <div className="flex items-center justify-center px-2 my-4 grow sm:px-0">
                <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
                    <div className="flex flex-col w-full sm:w-[90%] lg:w-[40%]">
                        <span className="text-[18px] 2xl:text-[22px] text-emerald-400">
                            Hello 👋🏻, I am
                        </span>
                        <span className="text-4xl font-bold 2xl:text-6xl">
                            Roméo KAKPO
                        </span>
                        <div className="my-4">
                            <span className="text-xl font-bold 2xl:text-2xl text-emerald-400">
                                Full Stack Engineer
                            </span>
                            <ul className="flex text-sm 2xl:text-base">
                                <li className="mr-6 ">Web Developper</li>
                                <li className="mr-6 relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-emerald-400 before:rounded-[10px] before:top-[7px] before:-left-[15px]">
                                    Programmer
                                </li>
                                <li className="mr-6 relative before:absolute before:content-[''] before:w-2 before:h-2 before:bg-emerald-400 before:rounded-[10px] before:top-[7px] before:-left-[15px]">
                                    Blockchain & AI Enthusiast
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center mb-4 gap-x-6">
                            <a
                                href="https://github.com/romeokakpo"
                                className="hover:text-pink-600"
                            >
                                <FaGithub className="w-5 h-5 2xl:w-7 2xl:h-7" />
                            </a>
                            <a
                                href="mailto://romeokakpo3@gmail.com"
                                className="hover:text-pink-600"
                            >
                                <FaAt className="w-5 h-5 2xl:w-7 2xl:h-7" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/romeo-kakpo3/"
                                className="hover:text-pink-600"
                            >
                                <FaLinkedin className="w-5 h-5 2xl:w-7 2xl:h-7" />
                            </a>
                            <a
                                href="https://x.com/romskakpo"
                                className="hover:text-pink-600"
                            >
                                <FaXTwitter className="w-5 h-5 2xl:w-7 2xl:h-7" />
                            </a>
                        </div>
                        <div className="flex text-sm gap-x-4 2xl:text-base">
                            <Link href="/about">
                                <button className="px-4 py-2 border-2 rounded-md bg-emerald-400 border-emerald-400">
                                    About Me
                                </button>
                            </Link>
                            <button className="px-4 py-2 border-2 rounded-md border-emerald-400">
                                Get Resume
                            </button>
                        </div>
                    </div>
                    <div class="w-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] sm:w-[90%] lg:w-[40%]">
                        <div class="flex flex-row">
                            <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                            <div class="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                        </div>
                        <div class="px-4 lg:px-8 py-5">
                            <div class="flex flex-row space-x-2">
                                <div class="h-3 w-3 rounded-full bg-red-400"></div>
                                <div class="h-3 w-3 rounded-full bg-orange-400"></div>
                                <div class="h-3 w-3 rounded-full bg-green-200"></div>
                            </div>
                        </div>
                        <div class="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                            <code class="font-mono text-xs md:text-sm 2xl:text-base">
                                <div class="blink">
                                    <span class="mr-2 text-pink-500">
                                        const
                                    </span>
                                    <span class="mr-2 text-white">coder</span>
                                    <span class="mr-2 text-pink-500">=</span>
                                    <span class="text-gray-400">{"{"}</span>
                                </div>
                                <div>
                                    <span class="ml-4 lg:ml-8 mr-2 text-white">
                                        name:
                                    </span>
                                    <span class="text-gray-400">'</span>
                                    <span class="text-amber-300">
                                        Roméo KAKPO
                                    </span>
                                    <span class="text-gray-400">',</span>
                                </div>
                                <div class="ml-4 lg:ml-8 mr-2">
                                    <span class=" text-white">skills:</span>
                                    <span class="text-gray-400">['</span>
                                    <span class="text-amber-300">React</span>
                                    <span class="text-gray-400">', '</span>
                                    <span class="text-amber-300">Laravel</span>
                                    <span class="text-gray-400">', '</span>
                                    <span class="text-amber-300">Redux</span>
                                    <span class="text-gray-400">', '</span>
                                    <span class="text-amber-300">Express</span>
                                    <span class="text-gray-400">', '</span>
                                    <span class="text-amber-300">Python</span>
                                    <span class="text-gray-400">', '</span>
                                    <span class="text-amber-300">MySql</span>
                                    <span class="text-gray-400">', '</span>
                                    <span class="text-amber-300">MongoDB</span>
                                    <span class="text-gray-400">', '</span>
                                    <span class="text-amber-300">Docker</span>
                                    {/* <span class="text-gray-400">', '</span>
                                    <span class="text-amber-300">AWS</span> */}
                                    <span class="text-gray-400">'],</span>
                                </div>
                                <div>
                                    <span class="ml-4 lg:ml-8 mr-2 text-white">
                                        hardWorker:
                                    </span>
                                    <span class="text-orange-400">true</span>
                                    <span class="text-gray-400">,</span>
                                </div>
                                <div>
                                    <span class="ml-4 lg:ml-8 mr-2 text-white">
                                        quickLearner:
                                    </span>
                                    <span class="text-orange-400">true</span>
                                    <span class="text-gray-400">,</span>
                                </div>
                                <div>
                                    <span class="ml-4 lg:ml-8 mr-2 text-white">
                                        problemSolver:
                                    </span>
                                    <span class="text-orange-400">true</span>
                                    <span class="text-gray-400">,</span>
                                </div>
                                <div>
                                    <span class="ml-4 lg:ml-8 mr-2 text-green-400">
                                        hireable:
                                    </span>
                                    <span class="text-orange-400">
                                        function
                                    </span>
                                    <span class="text-gray-400">() {"{"}</span>
                                </div>
                                <div>
                                    <span class="ml-8 lg:ml-16 mr-2 text-orange-400">
                                        return
                                    </span>
                                    <span class="text-gray-400">(</span>
                                </div>
                                <div>
                                    <span class="ml-12 lg:ml-24 text-cyan-400">
                                        this.
                                    </span>
                                    <span class="mr-2 text-white">
                                        hardWorker
                                    </span>
                                    <span class="text-amber-300">
                                        &amp;&amp;
                                    </span>
                                </div>
                                <div>
                                    <span class="ml-12 lg:ml-24 text-cyan-400">
                                        this.
                                    </span>
                                    <span class="mr-2 text-white">
                                        problemSolver
                                    </span>
                                    <span class="text-amber-300">
                                        &amp;&amp;
                                    </span>
                                </div>
                                <div>
                                    <span class="ml-12 lg:ml-24 text-cyan-400">
                                        this.
                                    </span>
                                    <span class="mr-2 text-white">
                                        skills.length
                                    </span>
                                    <span class="mr-2 text-amber-300">
                                        &gt;=
                                    </span>
                                    <span class="text-orange-400">5</span>
                                </div>
                                <div>
                                    <span class="ml-8 lg:ml-16 mr-2 text-gray-400">
                                        );
                                    </span>
                                </div>
                                <div>
                                    <span class="ml-4 lg:ml-8 text-gray-400">
                                        {"}"};
                                    </span>
                                </div>
                                <div>
                                    <span class="text-gray-400">{"}"};</span>
                                </div>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Home.layout = (page) => <DefaultLayout children={page} />;

export default Home;
