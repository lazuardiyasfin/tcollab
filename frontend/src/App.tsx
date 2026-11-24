import { config } from "./config/env";
import { useEffect, useState } from "react"

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const response = await fetch(`${config.api.baseUrl}/users`);
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>Users</h2>

      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>id: {user.id}</p>
              <p>name: {user.firstName} {user.lastName}</p>
              <p>activity: {user.isActive ? 'yes' : 'no'}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
