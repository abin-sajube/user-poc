import NavigationButton from "@/components/NavigationButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          User management
        </h1>
        <NavigationButton urlPath="/users" title="Go to users page" />
      </div>
    </main>
  );
}
