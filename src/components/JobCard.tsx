import { useHistory } from "react-router";
import { ClockIcon, GlobeIcon } from "./Icons";
import imgNotFound from "images/not_found.png";

export interface JobProps {
    id: string;
    type: string | null;
    url: string;
    created_at: string; //"Tue May 18 16:12:42 UTC 2021"
    company: string; //"Car Registration, Inc. "
    company_url: null;
    location: string; //"Elk Grove, Ca - REMOTE",
    title: string; //"Software Architect/Developer",
    description: string;
    how_to_apply: string;
    company_logo: string;
}

const JobCard = (job: JobProps) => {
    const history = useHistory();
    const jobDetail = () => {
        history.push(`/position/${job.id}`, job);
    };

    return (
        <div className="bg-white rounded p-3 shadow hover:shadow-md flex gap-4 cursor-pointer">
            <img
                src={job.company_logo || imgNotFound}
                alt="not found"
                className="rounded text-black size-90 flex-grow-0 flex-shrink-0 object-contain"
            />
            <div
                className="flex flex-col gap-1 w-full text-primary"
                onClick={jobDetail}
            >
                <h3 className="font-bold text-sm">{job.company}</h3>
                <h1 className="text-base flex-1">{job.title}</h1>
                <div className="flex flex-col gap-8 md:flex-row md:items-center mt-2 md:justify-between">
                    <button className="rounded py-1 px-2.5 border border-primary text-primary text-xs flex-grow-0 flex-shrink-0 w-max md:self-start">
                        {job.type}
                    </button>
                    <div className="flex gap-8 text-grayish text-xs md:self-end">
                        <div className="flex items-center gap-1.5">
                            <GlobeIcon className="flex-shrink-0 flex-grow-0" />
                            {job.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <ClockIcon className="flex-shrink-0 flex-grow-0" />5
                            days ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
