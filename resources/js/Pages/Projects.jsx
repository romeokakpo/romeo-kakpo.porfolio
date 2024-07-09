import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/react";

const Projects = () => {
    return (
        <>
            <Head title="Projects" />
            <h1 className="my-10 text-4xl font-bold">My Projects.</h1>
        </>
    );
};

Projects.layout = (page) => <DefaultLayout children={page} />;

export default Projects;
