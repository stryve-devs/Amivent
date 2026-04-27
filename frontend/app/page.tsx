import { redirect } from "next/navigation";

export default function Home() {
  // This ensures the first thing a user sees is the Auth Page
  redirect("/login");
}