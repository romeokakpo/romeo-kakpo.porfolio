import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";
import {
    FaAt,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <>
            <Head title="Contact" />
            <h1 className="px-2 my-10 text-4xl font-bold">Contact.</h1>
            <div className="flex items-center justify-center grow ">
                <div className="flex flex-col-reverse items-center justify-center px-2 gap-x-12 gap-y-6 sm:flex-row">
                    <form className="flex flex-col max-w-lg gap-6 p-4 mb-4 border border-gray-600 rounded-md">
                        <div className="text-xs sm:text-sm">
                            If you have any questions or concerns, please don't
                            hesitate to contact me. I am open to any work
                            opportunities that align with my skills and
                            interests.
                        </div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border rounded-md bg-primary placeholder:text-sm border-[#353a52] ring-0 focus:ring-0 outline-0 focus:outline-0 transition-all duration-300 focus:border-emerald-400"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border rounded-md bg-primary placeholder:text-sm border-[#353a52] ring-0 focus:ring-0 outline-0 focus:outline-0 transition-all duration-300 focus:border-emerald-400"
                        />
                        <textarea
                            className="p-3 border rounded-md resize-none bg-primary placeholder:text-sm border-[#353a52] ring-0 focus:ring-0 outline-0 focus:outline-0 transition-all duration-300 focus:border-emerald-400"
                            rows={5}
                            maxLength={500}
                            placeholder="Message"
                        />
                        <button
                            type="button"
                            className="py-2 border rounded-md w-44 border-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 active:scale-[0.98] transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="flex flex-col justify-center gap-y-8">
                        <div className="flex items-center gap-x-2 ">
                            <FaAt className=" w-7 h-7" />
                            <span>romeokakpo3@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-x-2 ">
                            <FaPhoneAlt className=" w-7 h-7" />
                            <span>+229 63 01 55 16</span>
                        </div>
                        <div className="flex items-center gap-x-2 ">
                            <FaAt className="w-6 h-6" />
                            <span>romeokakpo3@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-10 mt-6 mb-4">
                            <a
                                href="https://github.com/romeokakpo"
                                className="hover:text-pink-600"
                            >
                                <FaGithub className="w-8 h-8" />
                            </a>
                            <a
                                href="mailto://romeokakpo3@gmail.com"
                                className="hover:text-pink-600"
                            >
                                <FaAt className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/romeo-kakpo3/"
                                className="hover:text-pink-600"
                            >
                                <FaLinkedin className="w-8 h-8 " />
                            </a>
                            <a
                                href="https://x.com/romskakpo"
                                className="hover:text-pink-600"
                            >
                                <FaXTwitter className="w-8 h-8 2xl:w-7 2xl:h-7" />
                            </a>
                            <a
                                href="https://x.com/romskakpo"
                                className="hover:text-pink-600"
                            >
                                <FaFacebook className="w-8 h-8 2xl:w-7 2xl:h-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Contact.layout = (page) => <DefaultLayout children={page} />;

export default Contact;
