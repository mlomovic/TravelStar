import { React, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const Home = ({location, setLocation}) => {

    let curLocation = useLocation();
    // console.log(curLocation);
    useEffect(()=>{
        setLocation(curLocation.pathname);
    }, []);


    return (
        <section className="hero text-white d-flex flex-column justify-content-center align-items-center">
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
    )
}

export default Home;