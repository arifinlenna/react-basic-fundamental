import React, { useEffect, useState} from 'react'
import BeatLoader from "react-spinners/BeatLoader";

const override= {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function insideContent(e) {
    e.stopPropagation()

}

export default function Modal(params) {
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(params.loading.LoadingUser)
    },[params])
    return(
        <>
        {
            params.show === true &&
            <div>
                { loading ?
                <div className="m-auto z-1 h-100 w-100 position-fixed d-block">
                    <div className="card overflow-auto h-100 w-100" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                        <div className="card-body w-50 m-auto">
                            <BeatLoader 
                                color="#36d7b7"
                                loading={loading}
                                cssOverride={override}
                                speedMultiplier={1}
                            />
                        </div>
                    </div>
                </div> :
                <div className="m-auto z-1 h-100 w-100 position-fixed d-block" onClick={params.onClick}>
                    <div className="card overflow-auto h-100 w-100" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                        <div className="card-body w-50 m-auto">
                        <ul className="list-group list-group-flush"  onClick={insideContent}>
                            <li className="list-group-item">{params.user.name}</li>
                            <li className="list-group-item">{params.user.username}</li>
                            <li className="list-group-item">{params.user.email}</li>
                            <li className="list-group-item">{params.user.phone}</li>
                        </ul>
                        </div>
                    </div>
                </div>
                }
            </div>
        }
        </>
    )
}