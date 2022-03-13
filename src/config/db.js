import faunadb from 'faunadb';

const client = new faunadb.Client({
    secret: process.env.MY_KEY
});

const q = faunadb.query;
export { client, q };
