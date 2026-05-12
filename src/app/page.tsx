import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>User management</h1>
      <Link href={"/users"}>
        <button>Go to users page</button>
      </Link>
    </div>
  );
}
