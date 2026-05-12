import UserCard from "../components/UserCard";
import { User } from "../types/user";

async function getUsers(): Promise<User[]> {
  const response = await fetch("http://localhost:3000/api/users");

  if (!response.ok) {
    throw new Error("Failed to fetch the users");
  }

  return response.json();
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div>
      <h3> Users List</h3>
      <div>
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
