import Header from '../components/Header';
import UserTable from '../components/UserTable';
import { useState, useEffect } from 'react';

export default function Admin() {
  const cols = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "email",
      label: "EMAIL",
    },
    {
      key: "phone",
      label: "PHONE",
    },
    {
      key: "trip_duration",
      label: "TRIP DURATION",
    },
    {
        key: "description",
        label: "DESCRIPTION",
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
      <Header/>
      {loading ? (
        <div style={styles.loadingContainer}>
          <div style={styles.loadingCircle}></div>
        </div>
      ) : (
        <UserTable columns={cols} rows={users} />
      )}
    </>
  );
}

const styles: Record<string, any> = {
  loadingContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '5px solid #fff',
    borderTopColor: '#000',
    animation: 'spin 1s ease-in-out infinite'
  }
};
