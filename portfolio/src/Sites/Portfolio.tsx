import novelsapi from '../assets/novelapi.jpg'
import bookraider from '../assets/audiobok.jpg'
import portfolio from '../assets/portfolio.jpg'
import display from '../assets/display.jpg'
import nokia from '../assets/Nokia.jpg'

import { useEffect, useState } from 'react'
import CardBuilder from '../Components/Card'
interface cardData {
    title?: string;
    content?: string;
    img?: string;
    demo?: string;
    github?: string;
  }

interface input{
    main:VoidFunction,
    resume:VoidFunction,
}


const projects:cardData[]= [
    { title: 'Portfolio', content: "I built a portfolio website showcasing my skills and projects. The website features a modern design and a responsive layout that adapts to different screen sizes. Visitors can browse through my projects, read descriptions, view screenshots, and visit live demos or GitHub repositories. ", img:portfolio,demo:"https://google.com",github:"https://github.com/pete02/bookraider"  },
    { title: 'Bookraider', content: "This website is a tool designed to make searching for and downloading audiobooks quick and easy. It searches popular audiobook websites for books that match the user's query and provides a list of results. Once a book is selected, the website will automatically download and process it for use on an audiobook player", img:bookraider,demo:"https://google.com",github:"https://github.com/pete02/bookraider"  },
    { title: 'Novelsapi', content: "Website that automatically download. Users can browse a series of book covers and select specific volumes to download. The website includes links to the series' official website and several API endpoints for searching, saving, and modifying JSON files. ", img:novelsapi,demo:"https://google.com",github:"https://github.com/pete02/Novelsapi"  },
    { title: 'Ardino Weather display', content: 'Arduino-based weather display that provides real-time and forecasted weather data. The display queries current weather data from my own server and future weather data from a weather server. ', img:display,demo:"",github:"https://github.com/pete02/Arduino/tree/master/display"  },
];


const work:cardData[]= [
    {img:nokia,content: "As a Trainee, I handled data migration from Live Link to Share Point OnLine and updated the PPR database using Oracle DB and SQL. I worked independently in the migration team, ensuring transparent data transfer across systems. Collaborating closely with the customer and project team, I contributed my coding skills to deliver high-quality results. My problem-solving attitude made me a supportive and collaborative team member."},
   
];

  
function Port({main, resume}:input){
    const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    const calculateNumColumns = () => {
        const cardWidth = 400; // Replace with actual card width in pixels
        const containerWidth = window.innerWidth - 40; // 20px padding on each side
        const newNumColumns = Math.floor(containerWidth / cardWidth);
        console.log(window.innerWidth)
        setNumColumns(newNumColumns);
      };
  
      calculateNumColumns();
  
      window.addEventListener('resize', calculateNumColumns);
  
      return () => {
        window.removeEventListener('resize', calculateNumColumns);
      };
  }, []);

  return (
    <div>
    <button onClick={main}>Frontpage</button>
    <button onClick={resume}>Resume</button>
    <h2>Personal Projects</h2>
    <div className="mesh" style={{display:'grid'}}>
        {projects.map(card=>(
            <CardBuilder title={card.title} content={card.content} img={card.img} demo={card.demo} github={card.github}/>
        ))}
    
        <div className="spacer" style={{ gridColumn: `span ${numColumns}` }}></div>
    </div>
        
    <hr />
    <h2>Work Experience</h2>
    <div className="mesh" style={{display:'grid'}}>
        {work.map(card=>(
            <CardBuilder title={card.title} content={card.content} img={card.img} demo={card.demo} github={card.github}/>
        ))}
    
        <div className="spacer" style={{ gridColumn: `span ${numColumns}` }}></div>
    </div>
    </div>
  );
}

export default Port