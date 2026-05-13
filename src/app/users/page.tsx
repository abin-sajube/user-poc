import { getUsers } from "@/services/user.service";
import UserCard from "../../components/UserCard";
import { User } from "../../types/user";

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
