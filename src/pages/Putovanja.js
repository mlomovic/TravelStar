import {React, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const Putovanja = ({location, setLocation}) => {

    let curLocation = useLocation();
    // console.log(curLocation);
    useEffect(()=>{
        setLocation(curLocation.pathname);
    }, []);

    return (
        <>
            <section className="bg-light py-5 text-dark d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold display-5">Gde zelite da putujete?</h1>
                <p>Pretrazite nasu veliku ponudu premium putovanja</p>
                <form className="row gx-3 gy-2 align-items-center container">

                    <div className="col-sm-3">
                        <input type="text" className="form-control form-control-lg" placeholder="Destinacija"/>
                    </div>

                    <div className="col-sm-3">
                        <select className="form-select form-select-lg" >
                            <option selected>Mesec...</option>
                            <option value="1">Oktobar</option>
                            <option value="2">Novembar</option>
                            <option value="3">Decembar</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <select className="form-select form-select-lg" >
                            <option selected>Sortiraj...</option>
                            <option value="1">Opadajuce</option>
                            <option value="2">Rastuce</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-danger w-100 btn-lg">Pretraga</button>
                    </div>
                </form>
            </section>

            <section className="container pregled-putovanja py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">


                    <div className="col">
                        <div className="card h-100">
                            <img src="img/dominikana.jpg" className="card-img-top" alt="..."/>
                                <div className="card-footer">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Destinacija: Dominikana</li>
                                        <li className="list-group-item">Ocena:
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li className="list-group-item">Datum putovanja: 2.12.2022.</li>
                                        <li className="list-group-item">Cena: 2500E</li>
                                    </ul>
                                </div>
                                <button className="btn btn-danger m-2">Detaljnije</button>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="img/maldivi.jpg" className="card-img-top" alt="..."/>
                                <div className="card-footer">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Destinacija: Dominikana</li>
                                        <li className="list-group-item">Ocena:
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li className="list-group-item">Datum putovanja: 2.12.2022.</li>
                                        <li className="list-group-item">Cena: 2500E</li>
                                    </ul>
                                </div>
                                <button className="btn btn-danger m-2">Detaljnije</button>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="img/uae.jpg" className="card-img-top" alt="..."/>
                                <div className="card-footer">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Destinacija: Dominikana</li>
                                        <li className="list-group-item">Ocena:
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li className="list-group-item">Datum putovanja: 2.12.2022.</li>
                                        <li className="list-group-item">Cena: 2500E</li>
                                    </ul>
                                </div>
                                <button className="btn btn-danger m-2">Detaljnije</button>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="img/engleska.jpg" className="card-img-top" alt="..."/>
                                <div className="card-footer">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Destinacija: Dominikana</li>
                                        <li className="list-group-item">Ocena:
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li className="list-group-item">Datum putovanja: 2.12.2022.</li>
                                        <li className="list-group-item">Cena: 2500E</li>
                                    </ul>
                                </div>
                                <button className="btn btn-danger m-2">Detaljnije</button>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="img/indonezija.jpg" className="card-img-top" alt="..."/>
                                <div className="card-footer">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Destinacija: Dominikana</li>
                                        <li className="list-group-item">Ocena:
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li className="list-group-item">Datum putovanja: 2.12.2022.</li>
                                        <li className="list-group-item">Cena: 2500E</li>
                                    </ul>
                                </div>
                                <button className="btn btn-danger m-2">Detaljnije</button>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="img/italija.jpg" className="card-img-top" alt="..."/>
                                <div className="card-footer">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Destinacija: Dominikana</li>
                                        <li className="list-group-item">Ocena:
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li className="list-group-item">Datum putovanja: 2.12.2022.</li>
                                        <li className="list-group-item">Cena: 2500E</li>
                                    </ul>
                                </div>
                                <button className="btn btn-danger m-2">Detaljnije</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Putovanja;