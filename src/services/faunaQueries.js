import { query as q } from 'faunadb';
import { client } from ".";

export function getAllSchools() {
    const schools = client.query(
        q.Select([
            'schoolName'
        ], q.Documents(
            q.Collection(
                "school"
            )
        ))
    )
    return schools
}
