import { MdAddLocation } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src= {logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="text-[#7E90FE] px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="text-[#7E90FE] px-5 py-2 font-bold border rounded border-[#7E90FE] mr-4">{job_type}</button>
                </div>

                <div className="flex gap-10 items-center">
                    <h2 className="flex "><MdAddLocation  className="text-2xl mr-2"/> {location} </h2>
                    <h2 className="flex"><MdCurrencyExchange className="text-2xl mr-2" /> {salary} </h2>
                </div>

                <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;