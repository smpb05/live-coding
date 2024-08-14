import {useEffect, useState} from "react";

export function useFetch(url:string) {
    // // TODO
    // const data: any[] = [];
    // return [data];
    //
    //
    // const [data, setData] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((respData) => setData(respData));
    }, []);

    return [data];
}