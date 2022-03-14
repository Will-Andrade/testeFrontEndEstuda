import { useEffect, useState } from "react";
import { getAllSchools } from "../services/faunaQueries";

export default function Schools() {
    // const [schools, setSchools] = useState({});

    useEffect(() => {
        async function test() {
            const response = await getAllSchools();
            // setSchools(response);
            console.log('oi');
            console.log(response);
        }

        test();
    }, []);

    return (
        <h1>Schools</h1>
    );
};
