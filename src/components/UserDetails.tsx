import Link from "next/link";
import { User } from "../types/user";

interface UserProp {
  user: User;
}

export default function UserDetails({ user }: UserProp) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
      <p>
        <strong>Phone:</strong>
        {user.phone}
      </p>
      <Link href={"/users"}>
        <button>Go back to users page</button>
      </Link>
    </div>
  );
}
