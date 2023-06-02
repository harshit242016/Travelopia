import UserTable from '../components/UserTable';
import getUserDetails from '../utils/getUserDetails';
import { useState,useEffect } from 'react';
export default function Admin() {
    const cols = [
        {
            key: "name",
            label: "NAME",
        },
        {
            key: "role",
            label: "ROLE",
        },
        {
            key: "status",
            label: "STATUS",
        }
    ];
    const [users, setUsers] = useState<any>();

    useEffect(() => {
        async function fetchData() {
            const data = await getUserDetails();
            setUsers(data);
        }
        fetchData();
    },[]);

    return (
        <UserTable columns={cols} rows={users} />
    );
}