"use client";
import { useSession } from "next-auth/react";
import HomePage from "./Home/page";
import MoviesPage from "./Movies/page";

export default function Index() {
  const { data: session, status } = useSession();
  console.log(session, status);
  if (!session) {
    return <HomePage />;
  }

  return <MoviesPage />;
}
