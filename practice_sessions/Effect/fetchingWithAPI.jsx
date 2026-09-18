import { useState, useEffect } from "react";

function EmployeerData() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <div>
            <h1>Employee data</h1>

            <button onClick={() => setShow(true)}>
                Click here to fetch data
            </button>

            {show &&
                data.map(data => (
                    <p key={data.id}>{data.name}</p>
                ))
            }
        </div>
    );
}

export default EmployeerData;