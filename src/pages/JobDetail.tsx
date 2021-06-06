import { useCallback, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import dompurify from "dompurify";

import { ArrowBackIcon, ClockIcon, GlobeIcon } from "components/Icons";
import { JobProps } from "components/JobCard";
import imgNotFound from "images/not_found.png";
import getTimeAgoString from "utils/dateUtils";

const JobDetail = () => {
    const { state: job }: { state: JobProps } = useLocation();
    const history = useHistory();
    const sanitize = dompurify.sanitize;

    const init = useCallback(() => {
        dompurify.addHook("afterSanitizeAttributes", function (node) {
            const nodeName = node.nodeName?.toLowerCase();
            const titles = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5" };
            if (nodeName in titles) {
                node.className = "text-bold my-2 ";
            }
            if ("target" in node) {
                node!.setAttribute("target", "_blank");
                node!.setAttribute("rel", "noopener noreferrer");
            }
            if (nodeName === "p") node.className = "mb-2 ";
            if (nodeName === "ul") node.className = "ml-4 pl-4 list-disc mb-2 ";
        });
    }, []);

    useEffect(() => {
        init();
    });

    return (
        <div className="flex flex-col md:flex-row gap-9">
            <div className="md:w-1/5">
                <button
                    className="focus:outline-none flex items-center gap-3 text-blue"
                    onClick={() => history.goBack()}
                >
                    <ArrowBackIcon /> Back to search
                </button>
                <h3 className="uppercase font-bold text-grayish mb-2 mt-9 font-poppins">
                    How to apply
                </h3>
                <div
                    className="text-black font-medium font-poppins anchor-colored anchor-break"
                    dangerouslySetInnerHTML={{
                        __html: sanitize(job.how_to_apply),
                    }}
                />
            </div>
            <div className="md:w-4/5">
                <div className="flex flex-col md:flex-row gap-1 md:gap-4 md:items-center">
                    <h1 className="font-bold text-black2 text-2xl">
                        {job.title}
                    </h1>
                    <span className="rounded py-1 px-2.5 border border-black2 text-black2 text-xs flex-grow-0 flex-shrink-0 w-max md:self-start">
                        {job.type}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-lightGrayish">
                    <ClockIcon />
                    {getTimeAgoString(job.created_at)}
                </div>
                <div className="flex gap-3 mt-9">
                    <img
                        src={job.company_logo || imgNotFound}
                        alt="not found"
                        className="w-11 h-11 object-contain bg-gray-300 rounded shadow-custom"
                    />
                    <div className="flex flex-col gap-1.5">
                        <h3 className="font-bold text-black2 text-lg leading-5">
                            {job.company}
                        </h3>
                        <div className="flex items-center gap-1.5 text-grayish text-xs leading-3">
                            <GlobeIcon />
                            {job.location}
                        </div>
                    </div>
                </div>
                <div
                    className="text-black2 text-base my-8 font-roboto anchor-colored"
                    dangerouslySetInnerHTML={{
                        __html: sanitize(job.description),
                    }}
                />
            </div>
        </div>
    );
};

export default JobDetail;
