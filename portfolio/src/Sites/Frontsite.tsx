import git from '../assets/git.png'
import ln from '../assets/LinkedIn.png'

interface input{
    port:VoidFunction,
    resume:VoidFunction,
}



function Main({port,resume}:input) {
    return(
        <>
            <h1>Hi, I'm Petrik Räsänen</h1>
            <div>
                <a href="https://github.com/pete02" target="_blank">
                <img src={git} className="logo"/>
                </a>
                <a href="https://www.linkedin.com/in/petrik-r%C3%A4s%C3%A4nen-b7a54516a/" target="_blank">
                <img src={ln} className="logo"/>
                </a>
            </div>

            <button onClick={port} className='link'>Portfolio</button>
            <br/>
            <button onClick={resume} className='link'>Resume</button>
    </>
    )
}

export default Main