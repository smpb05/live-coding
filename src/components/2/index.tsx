import React from 'react';
import {useFetch} from "./useFetch";

function Component1() {
    const data = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <div className="App">
            <div className="section-description">
                <p>Реализуйте хук "useFetch" для возможности получения данных с разных URL</p>
                <p>Получите список пользователей и выведите его на страницу</p>
            </div>
            <h3>Список пользователей</h3>
            <div>
                список...
            </div>
        </div>
    );
}

export default Component1;
