"use client";

import Sidebar from "@/components/side-bar";
import { LeadType } from "@/types/lead";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState<LeadType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data));
  }, [router]);

  const updateStatus = async (id: string) => {
    const response = await fetch("/api/leads", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status: "REACHED_OUT" }),
    });

    if (!response.ok) {
      console.error("Failed to update lead status");
      return;
    }

    const updatedLead = await response.json();
    setLeads((prevLeads) =>
      prevLeads.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead))
    );
  };

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="p-8 w-full">
        <h1 className="text-2xl font-bold">Leads</h1>
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b">
                <td className="p-2">
                  {lead.firstName} {lead.lastName}
                </td>
                <td className="p-2">{lead.email}</td>
                <td className="p-2 flex gap-2 items-center">
                  <span
                    className={`${
                      lead.status === "PENDING"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {lead.status}
                  </span>
                  {lead.status === "PENDING" && (
                    <button
                      onClick={() => updateStatus(lead.id)}
                      className="px-4 py-2 bg-black text-white rounded-md"
                    >
                      Mark as Reached Out
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
