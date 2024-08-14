import React from 'react';

const getRandomInt = (min: any, max: any) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const userList: any[] = [
    {id: 1, name: 'Vasya', pet: 'cat', petName: 'Murka'},
    {id: 2, name: 'Olya', pet: 'dog', petName: 'Sharik'},
    {id: 3, name: 'Dima', pet: 'cat', petName: 'Barsik'}
]

const userListWithAge: any[] = userList.map((user: any) => {
    user.age = getRandomInt(20, 50);
    return user;
})

const userListWithoutId: any[] = userList.map((user: any) => {
    delete user.id;
    return user;
})

const PetList: any[] = userList.map((user: any) => {
    return {pet: user.pet, petName: user.petName};
})

function Component2() {
    return (
        <div className="App">
            <div className="section-description">
                <p>Добавьте типизацию данных для всех сущностей в компоненте</p>
            </div>
        </div>
    );
}

export default Component2;
