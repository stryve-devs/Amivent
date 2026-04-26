import { redirect } from "next/navigation";

export default function Home() {
  // This sends anyone who hits http://localhost:3002 straight to your dashboard
  redirect("/events");
}