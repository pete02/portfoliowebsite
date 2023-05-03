import { Card} from 'react-bootstrap'

interface CardBuilderProps {
    title?: string;
    content?: string;
    img?: string;
    demo?: string;
    github?: string;
    skills?:string;
  }

function CardBuilder({title,content,img,demo,github,skills}:CardBuilderProps){
    return(
        <Card style={{ width: '280px', height:'580px',background:'white', color:'black', textAlign:'left'}} className='Card'>
        <Card.Body>
            {(title)?<Card.Title>{title}</Card.Title>:null}
            {(img)?<img src={img} className='cardImage'/>:null}
            
            {(content)?<div>{content}</div>:null}
           
           {(skills&&skills.length>0)? <div>
                <p>Skills:</p>
                <p>{skills}</p>
            </div>:null}
            {(demo&&demo.length>0)?<a href={demo} target='_blank'><button className='link'>live demo</button></a>:null}
            {(github&&github.length>0)?<a href={github} target='_blank'><button className='link'>Github</button></a>:null}
        </Card.Body>
        </Card>
    )
}
export default CardBuilder