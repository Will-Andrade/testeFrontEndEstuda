import faunadb from 'faunadb';

export const client = new faunadb.Client({
secret: process.env.MY_KEY
});
