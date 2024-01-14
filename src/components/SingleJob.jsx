import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../staticData/jobsData'



const SingleJob = () => {
    const {id} = useParams()
    
    // const singleCareer = data.jobsData.find((job) => job.id)
    const singleCareer = data.find((job) => job.id === parseInt(id))
    console.log('single career', singleCareer)
    // console.log(singleCareer.requiredQualification)
    return (
        <div>
            <div className="header">
                <div className="header-text">
                    <h1>Join Our Team</h1>
                    <h4>Build your career and work with our highly experienced engineer.</h4>
                </div>
                <div>
                    <img src="/career/job-vacancy.png" alt="image1" />
                </div>
            </div>

            <div className="singleJob-content">
                <h1 className="job-title">{singleCareer.title}</h1>
                <p className="job-desc">{singleCareer.jobDescription}</p>
                <div className="location">
                    <div>
                        <div className="dhaka">
                            <img src="/career/imagePin.png" alt="pin"/>
                            <p>{singleCareer.location}</p> <br/>
                        </div>
                        <p><strong>Job Type:</strong> {singleCareer.jobType}</p>
                    </div>
                    <button>Apply for the Job</button>
                </div>

               <div className="responsibility">
                    <h2>Responsibilities</h2>
                    {singleCareer.responsibility.map((resp, index) => (
                        <div key={index} className="resp-item">
                            <p><img className="pointer"  src="/career/pointer.png" alt="pointer"/>  {resp}</p>
                        </div>
                    ))}
               </div>

               <div className="qualification">
                
                    {singleCareer.requiredQualification && singleCareer.requiredQualification.length > 0 && (
                        <h2>Required Qualifications</h2>
                    )}

                    {singleCareer.requiredQualification && singleCareer.requiredQualification.length > 0 && (
                        singleCareer.requiredQualification.map((qual, index) => (
                        <div key={index} className="qual-item">
                            <p><img className="pointer" src="/career/pointer.png" alt="pointer"/>  {qual}</p>
                        </div>
                        ))
                    ) }
                </div>
                <div className="info-last">
                    <p><strong>Vacancy:</strong> {singleCareer.vacancy}</p>
                    <p><strong>Office Hours:</strong> {singleCareer.officeHours}</p>
                    <p><strong>Salary Review:</strong> {singleCareer.salaryReview}</p>
                    <p><strong>Festival Bonus:</strong> {singleCareer.festivalBonus}</p>
                    <p><strong>Salary:</strong> {singleCareer.salary}</p>
                </div>
            </div>
            
        </div>
    )
}

export default SingleJob