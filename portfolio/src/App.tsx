import {useState} from 'react'
import './App.css'
import Main from './Sites/Frontsite'
import Port from './Sites/Portfolio'
import Resume from './Sites/Resume'

function App() {
  const [port,SetPort]=useState(false)
  const [resume,SetResume]=useState(false)
  
  const setResume=()=>{
    SetPort(false)
    SetResume(true)
  }

  const setPort=()=>{
    SetPort(true)
    SetResume(false)
  }

  const setMain=()=>{
    console.log("set main")
    SetPort(false)
    SetResume(false)
  }

  return (
    <div>
      {(!port&&!resume)?<Main port={setPort} resume={setResume}/>:<div/>}
      {(port)?<Port main={setMain} resume={setResume}/>:<div/>}
      {(resume)?<Resume main={setMain} port={setPort}/>:<div/>}
    </div>
  )
}

export default App
