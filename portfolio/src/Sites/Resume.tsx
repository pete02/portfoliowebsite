interface input{
    main:VoidFunction,
    port:VoidFunction,
}


function Resume({main,port}:input){
    return(
        <div>
            <button onClick={main} className='link' >Front Page</button>
            <button onClick={port}className='link' >Portfolio</button>
            <br/>
            <embed src={'/assets/CV-English.pdf'} width="800px" height="1131px" />
        </div>
    )
}

export default Resume