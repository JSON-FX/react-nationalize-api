const PeopleResult = ({getPeople}) => {
    return (
        <ul>
            <li>{getPeople.name.title}. {getPeople.name.first} {getPeople.name.last}</li>
            <li>{getPeople.gender}</li>
            <li>{getPeople.email}</li>
        </ul>
    );
}

export default PeopleResult;