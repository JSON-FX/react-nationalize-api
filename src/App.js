import { useState, useEffect } from 'react';
import Detail from './Detail';

const API_URL = 'https://api.nationalize.io/';

const App = () => {
    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState([]);

    // api request 

    const getNationalize = async(name) => {
        const response = await fetch (`${API_URL}?name=${name}`);
        const data = await response.json();
        console.log(data.country);
        setSearchName(data.country);
    }

    // getting default values after page reload

    // useEffect(() => {
    //     getNationalize('Jayson');
    // }, []);

    return (
        <div className='app'>
            <div className='displayName'>
                <h1>Name: {name}</h1>
            </div>
            <div className='formInput'>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={() => getNationalize(name)}>Submit</button>
            </div>
            {
                searchName?.length > 0
                ? (
                    <div className='container'>
                        {searchName.map((res) => (
                            <Detail res = {res} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No result</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;