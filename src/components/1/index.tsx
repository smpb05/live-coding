import React from 'react';
import './App.css';
import {useFetch} from "./useFetch";

function App() {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <div className="App">
            <p>Реализуйте хук "useFetch" для возможности получения данных с разных URL</p>
            <h1>Список пользователей</h1>
            <div>
                {
                    data.map((user: any) => {
                        return <li>[{user.id}] {user.name}</li>
                    })
                }
            </div>
        </div>
    );
}

export default App;
