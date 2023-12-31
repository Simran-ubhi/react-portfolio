export default function Projects(props){
    return(
        <>
            <div className="white-bg">
                <h2>{props.title}</h2>
                <p className="bold">Tech: {props.languages}</p>
                <img width="300px" src={props.scrcht} alt={props.title} />
                <a className="underline" href={props.github} target="_blank">See Code</a>
                <p>{props.desc}</p>
            </div>
        </>
    )
}