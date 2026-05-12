import UserDetails from "@/app/components/UserDetails";
import { User } from "@/app/types/user";

interface UserProp {
  params: {
    userId: string;
  };
}

async function getUser(userId: string): Promise<User> {

  const res = await fetch(`http://localhost:3000/api/users/${userId}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch the users");
  }
  
  return res.json();
}

export default async function UserPage({ params }: UserProp) {
  const {userId} = await params;
  const user = await getUser(userId);

  return (
    <div>
      <UserDetails user={user} />
    </div>
  );
}
