import { useLoaderData } from "react-router-dom"


export default function Jobs () {
    const jobsData = useLoaderData()
    return (
        <div>
            {jobsData.map((job)=> (
                <div>
                    <h3>{job.jobtitle}</h3>
                    <p>{job.location}</p>
                </div>
            ))}
    
        </div>
    )
}

export const loader = async ()=> {
   const response = await fetch("http://localhost:5000/jobs")
   return response.json()
}