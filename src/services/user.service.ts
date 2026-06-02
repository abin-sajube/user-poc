import { User } from "@/types/user";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_BASE_URL || "http://localhost:3000";

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${BASE_URL}/api/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch the users");
  }

  return response.json();
}

export async function getUser(userId: string): Promise<User> {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);

  if (!response.ok) {
    notFound();
  }

  return response.json();
}