import {React, useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Detalji = ({location, setLocation, putovanja}) => {

    let curLocation = useLocation();
    let params = useParams();
    // console.log(curLocation);
    useEffect(()=>{
        setLocation(curLocation.pathname);
    }, []);

    return (
        <>
            <section className="bg-light py-5 text-dark d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold display-5">Naslov putovanja</h1>
            </section>

            <section className="container pojedinacno-putovanje py-5">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={'../img/' + putovanja[params.singleId].img} className="w-100 rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-6 d-flex flex-column">
                            <div className="card-body">
                                <h5 className="card-title">Opis putovanja</h5>
                                <p className="card-text">{putovanja[params.singleId].opis}</p>
                            </div>
                            <div className="card-footer">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Destinacija: {putovanja[params.singleId].destinacija}</li>
                                    <li className="list-group-item">Ocena: {putovanja[params.singleId].ocena}</li>
                                    <li className="list-group-item">Datum putovanja: {putovanja[params.singleId].datumPolaska}</li>
                                    <li className="list-group-item">Cena: {putovanja[params.singleId].cena}</li>
                                    <li className="list-group-item"><button className="btn btn-danger w-100">Rezervisi</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Detalji;