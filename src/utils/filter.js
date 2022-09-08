const filter = (searchDest, putovanja, sortiranje) => {

    let tempPrikazPutovanja = [];

    if (searchDest === '') {
        tempPrikazPutovanja = [...putovanja];
    } else {

        tempPrikazPutovanja = putovanja.filter((putovanje, idx) => {
            // if(putovanje.destinacija === searchDest) return putovanje
            if (putovanje.destinacija.toUpperCase().startsWith(searchDest.toUpperCase())) return putovanje
        });

        // tempPrikazPutovanja = [...tempPut];
    }


    switch (sortiranje) {
        case '1':
            tempPrikazPutovanja.sort((a, b) => {
                const destA = a.destinacija.toUpperCase();
                const destB = b.destinacija.toUpperCase();

                if (destA < destB) {
                    return -1;
                }

                if (destA > destB) {
                    return 1;
                }

                return 0;

            })
            break;

            case '2':
                tempPrikazPutovanja.sort((a, b) => {
                    const destA = a.destinacija.toUpperCase();
                    const destB = b.destinacija.toUpperCase();
    
                    if (destA > destB) {
                        return -1;
                    }
    
                    if (destA < destB) {
                        return 1;
                    }
    
                    return 0;
    
                })
                break;

        default:
            break;
    }




    return tempPrikazPutovanja;
}

export default filter;