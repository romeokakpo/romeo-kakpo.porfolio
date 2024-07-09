import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";

const About = () => {
    return (
        <>
            <Head title="About" />
            <h1 className="my-10 text-4xl font-bold">About Me.</h1>
        </>
    );
};

About.layout = (page) => <DefaultLayout children={page} />;

export default About;
