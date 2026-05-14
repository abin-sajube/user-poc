import { User } from "../types/user";
import NavigationButton from "./NavigationButton";

interface UserProp {
  user: User;
}

export default function UserDetails({ user }: UserProp) {
  return (
    <main className=" bg-gray-800">
      <div className="bg-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{user.name}</h1>
        <div className="mb-4">
          <p className="text-sm text-gray-500">Email</p>
          <p className="text-lg font-medium text-gray-800">{user.email}</p>
        </div>
        <div className="mb-5">
          <p className="text-sm text-gray-500">Phone</p>
          <p className="text-lg font-medium text-gray-800">{user.phone}</p>
        </div>
        <NavigationButton urlPath="/users" title="Go back to users page" />
      </div>
    </main>
  );
}
