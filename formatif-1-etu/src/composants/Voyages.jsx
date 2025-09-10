export default function Voyages() {
    const age = 26;
    const paysVisite = ["Maroc","France","Saudi Arabia"]
    const afficheAge = true;
    const sequenceExclue = "S"; // on exclut les pays qui commencent par "S"


    return (
        <>
            <p> l'age de la personne en mois est : {afficheAge && age * 12} </p>
            {paysVisite
                .filter(pays => !pays.startsWith(sequenceExclue)).map((pays, index) => <li key={index}>{pays}</li>)
            }
        </>
    )
}