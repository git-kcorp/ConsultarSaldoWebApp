const fetchGetSaldo = async () => {
    const api = process.env.REACT_APP_API_KEY;
    const url = `https://consultarsaldo.azurewebsites.net/api/GetSaldo?code=${api}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }else{
        console.log(response)
    }
};
export default fetchGetSaldo;