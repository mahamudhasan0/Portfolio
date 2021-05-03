import React from 'react';
import './Resume.css'
import Tittle from '../Tittle/Tittle'

const Resume = () => {
  return (
    
    <div className="resume">
    <div className="b-title">
            <Tittle title={'Resume'} span={'My Resume'} />
        </div>
     
    <div className="project-details">
    <h4>Projects Details</h4>
    <p><span>Store Valley:</span> It’s an E-Commerce site. I developed this 
     using Reactjs,Nodejs,Expressjs many modern library. This is an online store Website. 
     Where users can buy products. Also, this website has an 
     admin section. Admin can create a product also delete a 
      product from UI</p>
      <br/>
      <p><span>Easy Rides: </span> I developed this using React Js. In this project, 
UI shows the category of rides such as Bus, Train, Bike, Car. 
Users can select any rides we provide. Also Authentication 
of a user such as Google, Facebook.
</p>
<br/>
<p><span>Dream League:</span> I developed this using React Js. In this 
project, I am using sportsdb API. This is a sports-based 
project where show all the team on the homepage and also 
i used react-router-dom to show the details of an individual 
team.</p>
<br/>
<h4>Language & Technology</h4>
<p>
● C,C++,C# ,JavaScript
<br/>
● ASP.NET BASIC
<br/>
● React Js
<br/>
● HTML5 , CSS3
<br/>
● MySql , MongoDb
<br/>
● OOP , Design Principles
<br/>
● Node Js , ExpressJs
<br/>
● MaterialUi , Bootstrap
<br/>
● Firebase Authentication
<br/>
● StripeJs
</p>
<br/>
<p><span>TOOLS:</span>VsCode,Git,Microsoft visual studio</p>
<br/>
<h4>Education</h4>
<p>Bachelor of Science in Computer 
Science and Engineering ( 4th Year 1rst 
Semester )</p>
<p><span>Bangladesh Institute Of Science and 
Technology.</span><br/>
Session : 2016-2017</p>




    </div>
      
    </div>
  );
};

export default Resume;