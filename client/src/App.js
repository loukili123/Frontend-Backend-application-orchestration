import { useState, useEffect } from "react";

const App = props => {
    const [bio, setBio] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/');
            const data = await response.json();
            console.log(data);
            setBio(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <pre>{JSON.stringify(bio.message, null, '\t')}</pre>
        </>
    );
};

export default App;