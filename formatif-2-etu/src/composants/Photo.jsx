
export default function Photo({src,nom}){
    return(
        <div className="bordure">
            <img src= {src} alt={nom}/>
            <p>{nom}</p>
        </div>
    )
}
