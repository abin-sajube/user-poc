import Link from "next/link";
import { User } from "../types/user";

interface UserProp {
  user: User;
}

export default function UserCard({ user }: UserProp) {
  return (
    <Link href={`/users/${user.id}`}>
      <div className="bg-white p-4 rounded-xl border-4 hover:border-blue-800 cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      </div>
    </Link>
  );
}
