import { useEffect, useState } from "react";
import { BriefcaseIcon, GlobeIcon } from "components/Icons";
import JobCard, { JobProps } from "components/JobCard";
import api from "api";
import axios from "axios";

const cities = [
    { id: "london", label: "London" },
    { id: "amsterdam", label: "Amsterdam" },
    { id: "new york", label: "New York" },
    { id: "berlin", label: "Berlin" },
];

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState<JobProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [fullTime, setFulltime] = useState<boolean>(false);
    const [location, setLocation] = useState<string | null>(null);
    const [description, setDescription] = useState<string>("");

    const getData = () => {
        setLoading(true);
        api.get("", {
            params: {
                page: page,
                description: description,
                location: location,
                full_time: fullTime ? "true" : "false",
            },
        })
            .then(res => {
                setLoading(false);
                setJobs(res.data);
            })
            .catch(err => {
                if (axios.isCancel(err)) return;
                setLoading(false);
                console.log(err);
            });
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div className="px-4 py-11 grid place-items-center mb-10 bg-gray-300 rounded-lg bg-cover bg-image">
                <div className="relative p-1 flex items-center gap-2.5 w-full md:max-w-3xl bg-white rounded">
                    <BriefcaseIcon className="ml-3.5 text-grayish flex-shrink-0 flex-grow-0" />
                    <input
                        type="text"
                        className="w-full focus:outline-none placeholder-grayish"
                        placeholder="Title, companies, expertise or benefits"
                        onChange={e => setDescription(e.target.value.trim())}
                    />
                    <button
                        className="bg-blue text-white rounded py-3.5 px-12 focus:outline-none shadow-lg"
                        onClick={getData}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="flex gap-8 flex-col md:flex-row">
                <div className="md:w-1/3 font-poppins">
                    <div className="mb-8 px-3 flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="full-time"
                            id="full-time"
                            className="w-4 h-4"
                            onChange={e => setFulltime(e.target.checked)}
                        />
                        <label htmlFor="full-time" className="text-primary">
                            Full time
                        </label>
                    </div>
                    <h3 className="uppercase font-bold text-grayish">
                        Location
                    </h3>
                    <div className="flex py-4 px-3.5 items-center gap-2 bg-white rounded shadow hover:shadow-md">
                        <GlobeIcon className="text-grayish" />
                        <input
                            type="text"
                            placeholder="City, state, zip code or country"
                            className="placeholder-grayish font-roboto w-full"
                            onChange={e => setLocation(e.target.value.trim())}
                        />
                    </div>
                    <div className="mt-6 text-primary">
                        {cities.map(city => (
                            <div
                                key={city.id}
                                className="mx-3 my-2 flex items-center gap-3"
                            >
                                <input
                                    type="radio"
                                    name="city"
                                    id={city.id}
                                    value={city.id}
                                    // defaultChecked={city.id === "new york"}
                                    className="w-4 h-4"
                                    onChange={e => setLocation(e.target.value)}
                                />
                                <label htmlFor={city.id}>{city.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:w-2/3 flex flex-col gap-8">
                    {loading && (
                        <p className="text-center font-bold text-xl">
                            Loading...
                        </p>
                    )}
                    <div className="hidden" onClick={() => setPage(p => p + 1)}>
                        Next
                    </div>
                    {jobs?.map(job => (
                        <JobCard key={job.id} {...job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
