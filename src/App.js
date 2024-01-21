import { useState, useEffect } from 'react';
import Detail from './Detail';
import PeopleResult from './PeopleResult';

const API_URL = 'https://randomuser.me/api';

const App = () => {
    // const [name, setName] = useState('');
    // const [searchName, setSearchName] = useState([]);
    const [randomPeople, setRandomPeople] = useState([]);

    // api request 

    const getRandomPeople = async() => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();

        console.log(data.results);
        setRandomPeople(data.results);
    }

    // getting default values after page reload

    useEffect(() => {
        getRandomPeople();
    }, []);

    return (
        <div className='app'>
            {/* <button onClick={() => getRandomPeople()}>
                Fetch Random People
            </button> */}

            <h1>Result</h1>
            {
                randomPeople?.length > 0
                ?(
                    <div className='Result'>
                        {randomPeople.map((people) => (
                            <PeopleResult getPeople = {people}  />
                        ))}
                    </div>
                ) : (
                    <div>
                        <h1>No Result</h1>
                    </div>
                )
            }
        </div>
    );
}

export default App;