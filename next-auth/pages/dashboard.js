import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
export default function Dashboard() {
  const { data, status } = useSession();

  if (status === "unauthenticated") {
    signIn();
  }

  if (status === "unauthenticated") {
    return <h1>Loading...</h1>;
  }
  return <h1>Dashboard Page</h1>;
}
