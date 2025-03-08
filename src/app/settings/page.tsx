"use client";

import Sidebar from "@/components/side-bar";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/login");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 w-full">
        <h1 className="text-2xl font-bold">Settings</h1>
        <button
          onClick={handleLogout}
          className="bg-black text-white px-4 py-2 rounded mt-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
