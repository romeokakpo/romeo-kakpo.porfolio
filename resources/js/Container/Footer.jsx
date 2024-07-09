// import { usePage } from "@inertiajs/react";
import { MdOutlineForkRight, MdOutlineStarOutline } from "react-icons/md";

export default () => {
    // const { component } = usePage();
    // if (component == "Home") return <></>;
    return (
        <footer className="flex justify-around text-[10px] text-white 2xl:text-xs py-2">
            <div className="">
                All rights reserved © Roméo KAKPO {new Date().getFullYear()}
            </div>
            <div className="flex items-center gap-x-4">
                <a href="https://github.com" target="_blank">
                    <div className="flex items-center gap-x-1">
                        <MdOutlineStarOutline className="w-4 h-4 2xl:w-5 2xl:h-5" />
                        Star
                    </div>
                </a>
                <a href="https://github.com" target="_blank">
                    <div className="flex items-center gap-x-1">
                        <MdOutlineForkRight className="w-4 h-4 2xl:w-5 2xl:h-5" />
                        Fork
                    </div>
                </a>
            </div>
        </footer>
    );
};
