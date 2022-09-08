import {React, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = ({location, setLocation}) => {

    let curLocation = useLocation();
    // console.log(curLocation);
    useEffect(()=>{
        setLocation(curLocation.pathname);
    }, []);

    return (
        <>
            <section className="bg-light py-5 text-dark d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold display-5 mb-5">Dashboard za putovanja</h1>
                <form className="row gx-3 gy-2 align-items-center container">

                    <div className="col-sm-3">
                        <input type="text" className="form-control form-control-lg" placeholder="Destinacija"/>
                    </div>

                    <div className="col-sm-3">
                        <input type="text" className="form-control form-control-lg" placeholder="Naslov"/>
                    </div>

                    <div className="col-sm-3">
                        <input type="text" className="form-control form-control-lg" placeholder="Opis"/>
                    </div>

                    <div className="col-sm-3">
                        <input type="number" min="0" className="form-control form-control-lg" placeholder="Cena"/>
                    </div>

                    <div className="col-sm-3">
                        <input type="date" min="0" className="form-control form-control-lg" />
                    </div>

                    <div className="col-sm-3">
                        <select className="form-select form-select-lg" >
                            <option selected>Ocena...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <select className="form-select form-select-lg" >
                            <option selected>Slika...</option>
                            <option value="1">engleska</option>
                            <option value="2">italija</option>
                            <option value="1">dominikana</option>
                            <option value="2">maldivi</option>
                            <option value="1">uae</option>
                            <option value="2">indonezija</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-success btn-lg">Dodaj</button>
                        <button type="submit" className="btn btn-danger btn-lg">Odustani</button>
                    </div>
                </form>
            </section>

            <section className="container spisak-putovanja py-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Slika</th>
                            <th scope="col">Odrediste</th>
                            <th scope="col">Cena</th>
                            <th scope="col">Ocena</th>
                            <th scope="col">Datum</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src="img/dominikana.jpg" alt="" width="50"/></td>
                            <td>Dominikana</td>
                            <td>2500</td>
                            <td>5</td>
                            <td>2.12.2022.</td>
                            <td><button className="btn btn-warning">izmeni</button></td>
                            <td><button className="btn btn-danger">obrisi</button></td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td><img src="img/engleska.jpg" alt="" width="50"/></td>
                            <td>Engleska</td>
                            <td>2500</td>
                            <td>5</td>
                            <td>2.12.2022.</td>
                            <td><button className="btn btn-warning">izmeni</button></td>
                            <td><button className="btn btn-danger">obrisi</button></td>
                        </tr>

                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Dashboard;