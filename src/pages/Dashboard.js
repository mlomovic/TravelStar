import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = ({ location, setLocation, putovanja, setPutovanja }) => {

    const [destinacija, setDestinacija] = useState('');
    const [naslov, setNaslov] = useState('');
    const [opis, setOpis] = useState('');
    const [img, setImg] = useState('');
    const [datumPolaska, setDatumPolaska] = useState('');
    const [cena, setCena] = useState('');
    const [ocena, setOcena] = useState('');

    const [editMode, setEditMode] = useState({ mode: false, id: null });


    let curLocation = useLocation();
    // console.log(curLocation);

    useEffect(() => {
        setLocation(curLocation.pathname);
    }, []);


    const addPutovanje = (event) => {
        event.preventDefault();
        if (editMode.mode == false) {

            setPutovanja([...putovanja, {
                destinacija: destinacija,
                naslov: naslov,
                opis: opis,
                img: img,
                datumPolaska: datumPolaska,
                cena: cena,
                ocena: ocena
            }])
        } else {
            console.log('editovanje ...');
        }

    }



    const removePutovanje = (idx) => {
        let tempPutovanje = [...putovanja];
        tempPutovanje.splice(idx, 1);
        setPutovanja([...tempPutovanje]);
    }


    const setEdit = (idx) => {
        setEditMode({ mode: true, id: idx });

        setDestinacija(putovanja[idx].destinacija);
        setNaslov(putovanja[idx].naslov);
        setOpis(putovanja[idx].opis);
        setImg(putovanja[idx].img);
        setDatumPolaska(putovanja[idx].datumPolaska);
        setCena(putovanja[idx].cena);
        setOcena(putovanja[idx].ocena);

    }


    const editPutovanje = (event) => {
        event.preventDefault();
        let id = editMode.id;
        if (editMode.mode == true) {

            putovanja[id].destinacija = destinacija;
            putovanja[id].naslov = naslov;
            putovanja[id].opis = opis;
            putovanja[id].img = img;
            putovanja[id].datumPolaska = datumPolaska;
            putovanja[id].cena = cena;
            putovanja[id].ocena = ocena;

            setDestinacija('');
            setNaslov('');
            setOpis('');
            setImg('');
            setDatumPolaska('');
            setCena(0);
            setOcena(0);

            setEditMode({ mode: false, id: null });
        }


    }


    const cancelEdit = (event) => {
        event.preventDefault();
        setDestinacija('');
        setNaslov('');
        setOpis('');
        setImg('');
        setDatumPolaska('');
        setCena(0);
        setOcena(0);

        setEditMode({ mode: false, id: null });
    }



    return (
        <>
            <section className="bg-light py-5 text-dark d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bold display-5 mb-5">Dashboard za putovanja</h1>
                <form className="row gx-3 gy-2 align-items-center container">

                    <div className="col-sm-3">
                        <input value={destinacija} onChange={(event) => setDestinacija(event.target.value)} type="text" className="form-control form-control-lg" placeholder="Destinacija" />
                    </div>

                    <div className="col-sm-3">
                        <input value={naslov} onChange={(event) => setNaslov(event.target.value)} type="text" className="form-control form-control-lg" placeholder="Naslov" />
                    </div>

                    <div className="col-sm-3">
                        <input value={opis} onChange={(event) => setOpis(event.target.value)} type="text" className="form-control form-control-lg" placeholder="Opis" />
                    </div>

                    <div className="col-sm-3">
                        <input value={cena} onChange={(event) => setCena(event.target.value)} type="number" min="0" className="form-control form-control-lg" placeholder="Cena" />
                    </div>

                    <div className="col-sm-3">
                        <input value={datumPolaska} onChange={(event) => setDatumPolaska(event.target.value)} type="date" min="0" className="form-control form-control-lg" />
                    </div>

                    <div className="col-sm-3">
                        <select value={ocena} onChange={(event) => setOcena(event.target.value)} className="form-select form-select-lg" >
                            <option defaultValue={'Ocena'}>Ocena...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <select value={img} onChange={(event) => setImg(event.target.value)} className="form-select form-select-lg" >
                            <option defaultValue={'Slika'}>Slika...</option>
                            <option value="engleska.jpg">engleska</option>
                            <option value="italija.jpg">italija</option>
                            <option value="dominikana.jpg">dominikana</option>
                            <option value="maldivi.jpg">maldivi</option>
                            <option value="uae.jpg">uae</option>
                            <option value="indonezija.jpg">indonezija</option>
                        </select>
                    </div>

                    {editMode.mode == false ?
                        <div className="col-sm-3">
                            <button onClick={(event) => addPutovanje(event)} type="submit" className="btn btn-success btn-lg">Dodaj</button>
                            <button onClick={(event) => cancelEdit(event)} type="submit" className="btn btn-danger btn-lg">Odustani</button>
                        </div>
                        :
                        <div className="col-sm-3">
                            <button onClick={(event) => editPutovanje(event)} type="submit" className="btn btn-warning btn-lg">Snimi</button>
                            <button onClick={(event) => cancelEdit(event)} type="submit" className="btn btn-danger btn-lg">Odustani</button>
                        </div>
                    }


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
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {putovanja.map((putovanje, idx) => {
                            return (
                                <tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td><img src={'../img/' + putovanje.img} alt="" width="50" /></td>
                                    <td>{putovanje.destinacija}</td>
                                    <td>{putovanje.cena}</td>
                                    <td>{putovanje.ocena}</td>
                                    <td>{putovanje.datumPolaska}</td>
                                    <td><button onClick={() => setEdit(idx)} className="btn btn-warning">izmeni</button></td>
                                    <td><button onClick={() => removePutovanje(idx)} className="btn btn-danger">obrisi</button></td>
                                </tr>

                            )
                        })}



                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Dashboard;