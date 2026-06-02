import NavigationButton from "@/components/NavigationButton";
import UserForm from "@/components/UserForm";

export default function CreateUser() {
  return (
    <div className="min-h-screen bg-slate-900 p-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Add User</h1>
        <NavigationButton urlPath="/users" title="Go back to users page" />
      </div>
      <UserForm />
    </div>
  );
}
