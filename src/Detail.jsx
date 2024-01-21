const Detail = ( {res} ) => {
    return (
        <div className="Result">
            <ul>
                <li>
                    Country: {res.country_id}
                </li>
                <li>Probability: {res.probability}</li>
            </ul>
        </div>
    );
}

export default Detail;