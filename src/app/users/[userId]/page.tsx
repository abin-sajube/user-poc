import UserDetails from "@/components/UserDetails";
import { getUser } from "@/services/user.service";

interface UserProp {
  params: {
    userId: string;
  };
}

export default async function UserPage({ params }: UserProp) {

  const { userId } = await params;
  
  const user = await getUser(userId);

  return (
    <div>
      <UserDetails user={user} />
    </div>
  );
}
