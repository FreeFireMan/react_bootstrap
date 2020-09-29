import {useEffect, useState} from "react";

const HttpMethod = (method, url, body) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    const baseUrl = 'http://127.0.0.1:8000'
    const options = {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (body) {
        options.body = JSON.stringify(body)
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(baseUrl + url, options)
            .then(response => response.json())
            .then((json) => {
                setData(json.data);
                setIsLoading(false)
            })
            .catch(err => {

                setIsLoading(false)
            });
    }, [method, url, body, isLoading, data, options])

    // const response = fetch(baseUrl + url, options)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch();
    // return response.json();
    return {data, isLoading}
}

export default HttpMethod;
