import { getUsers } from "@/services/user.service";
import UserCard from "../../components/UserCard";
import { User } from "../../types/user";
import NavigationButton from "@/components/NavigationButton";

export default async function Users() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-slate-900 p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white mb-8"> Users List</h1>
        <div>
          <NavigationButton title="Add User" urlPath="/users/create" />
          <NavigationButton title="Home" className="ml-8" />
        </div>
      </div>
      <div className="grid gap-4">
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
