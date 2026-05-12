import Link from "next/link";
import { User } from "../types/user";

interface UserProp {
  user: User;
}

export default function UserCard({ user }: UserProp) {
  return (
    <Link href={`/users/${user.id}`}>
      <h2>{user.name}</h2>
    </Link>
  );
}
