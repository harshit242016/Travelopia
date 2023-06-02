import UserTable from '../components/UserTable';
import { useState, useEffect } from 'react';

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

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('/api/getFormData');
        if (!res.ok) {
          throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
        }
        const jsonData = await res.json();
        setUsers(jsonData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserTable columns={cols} rows={users} />
      )}
    </>
  );
}
