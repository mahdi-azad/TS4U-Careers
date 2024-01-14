import React from 'react'
import data from '../staticData/jobsData'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const getRandomColor = () => {
    const colors = ['#DCF5DE', '#FCD5D3', '#D2F2FE'];
    const randomIndex = Math.floor(Math.random() * colors.length); 
    //Math.floor rounds a number DOWN
    //Math.random returns a random number between 0 and 1
    return colors[randomIndex];
  };

const getRandomImage = () => {
    const imageFolder = '/career/';
    const imageCount = 8; 
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    return `${imageFolder}image${randomIndex}.png`;
  };


let lastColor;

const Home = () => {
//   console.log(data)
  return (
    <div className="main">
        <div className="header">
            <div className="header-text">
                <h1>Join Our Team</h1>
                <h4>Build your career and work with our highly experienced engineer.</h4>
            </div>
            <div>
                <img src="career/job-vacancy.png" alt="image1" />
            </div>
        </div>
        <div className="content">
            <div className="content-text">
                <h1>Open Positions</h1>
                <h4>Get your dream job by applying.</h4>
            </div>
        </div>
        <div className="jobs-list">
            {
                data.map((jobs, i) => {
                    //Continious random color for background
                    const backGroundcolor = getRandomColor();
                    lastColor = backGroundcolor;
                    const backgroundImage = getRandomImage();

                    return (
                        <StyledLink to={`/jobs/${jobs.id}`}>
                        <div className="job-item" key={jobs.id} style={{ backgroundColor: getRandomColor() }}>
                            
                            
                                <div className="leftSide">
                                    
                                    <img src={backgroundImage} alt="image"/>
                                    
                                    <div className="leftSide-text">
                                        <h3>{jobs.title}</h3>
                                        <p>{jobs.jobType}</p>
                                        <div className="location1">
                                            <img src="career/imagePin.png" alt="pin"/>
                                            <p>{jobs.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className = "rightSide">
                                    <div className="stacks">
                                        {/* This is to map out the array called responsibility inside the data  */}
                                        {jobs.stack.map((stack, index) => (
                                        <div key={index} className="stack-item">
                                            {stack}
                                        </div>
                                        ))}
                                    </div>
                                    
                                    <button>Apply</button>
                                </div>
                            

                        </div>
                        </StyledLink>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home