const SellingCard =(props) => {

    const {data} =props

    return(
        <div className="card">
            <img src={data.image}/>
            <p> {data.title} </p>
            <button> {data.link} </button>
            <p> {data.price} </p>
        </div>
    )
}

export default SellingCard