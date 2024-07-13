import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";

const About = () => {
    return (
        <>
            <Head title="About" />
            <h1 className="my-10 text-4xl font-bold">About Me.</h1>
            <div>
                <section>
                    <div className="flex justify-center my-5 lg:py-8">
                        <div className="flex items-center">
                            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                                About
                            </span>
                            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        </div>
                    </div>
                </section>
                <section id="experience">
                    <h1></h1>
                </section>
                <section id="skills">
                    <h1></h1>
                </section>
                <section id="education">
                    <h1></h1>
                </section>
            </div>
        </>
    );
};

About.layout = (page) => <DefaultLayout children={page} />;

export default About;
