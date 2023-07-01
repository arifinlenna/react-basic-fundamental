export default function card(params) {
    return(
        <div className="card">
            <img src={params.image} alt="cat" className="card-img-top" />
            <div className="card-body">
                <h4>{params.title}</h4>
                <small className="text-muted">{params.date}</small>
            </div>
        </div>
    )
}