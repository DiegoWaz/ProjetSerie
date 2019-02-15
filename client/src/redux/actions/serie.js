export const serie = (name, date, country, dispatch) => {
    const token = localStorage.getItem('token');
    const data = {name, date, country};
    let myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");
    myHeader.append("Authorization", "Bearer " + token);
        fetch('http://localhost:3000/series', {
            method: 'POST',
            mode: "cors",
            headers: myHeader,
            body: JSON.stringify(data)
        }).then(response => response.json())
        .catch(error => console.log(error));
    
    return {
        type: "CONNECTED",
        payload: {}
    }
}

