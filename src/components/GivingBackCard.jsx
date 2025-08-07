const GivingBackCard =(props) => {

    const {data} =props

    return(
        <div className="card">
            <h2> {data.title} </h2>
            <p> {data.description} </p>
        </div>
    )
}

export default GivingBackCard