import { useEffect } from "react";
import { getAllSchools } from "../services/faunaQueries";

export default function Schools() {
    useEffect(() => {
        async function test() {
            const response = await getAllSchools();
            console.log(response);
        }

        test();
    }, []);

    return (
        <h1>Schools</h1>
    );
};
