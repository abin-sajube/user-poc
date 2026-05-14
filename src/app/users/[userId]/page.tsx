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
    <div className="min-h-screen bg-gray-800 p-10">
      <h1 className="text-4xl font-bold text-white mb-8"> User Details</h1>
      <UserDetails user={user} />
    </div>
  );
}
