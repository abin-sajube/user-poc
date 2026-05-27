import Link from "next/link";

export default function NavigationButton({
  title,
  urlPath = "/",
  className = "",
}: {
  title: string;
  urlPath?: string;
  className?: string;
}) {
  return (
    <Link
      href={urlPath}
      className={`bg-blue-600 hover:bg-blue-800 cursor-pointer text-white px-5 py-3 rounded-xl ${className}`}
    >
      {title}
    </Link>
  );
}
