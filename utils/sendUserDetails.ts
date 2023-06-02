import connectionPool from './db'
async function sendUserDetails(body:any) {
    const client = connectionPool();
    const { name,email,phone,trip_duration,start_at,description } = body;
    const insertUserQuery = `INSERT INTO users (name,email,phone,trip_duration,start_at,description) VALUES ($1,$2,$3,$4,$5,$6);`;
    const result = (await client).query(insertUserQuery, [name,email,phone,trip_duration,start_at,description ]);
    const data = (await result).rows;
    return data;
}

export default sendUserDetails;