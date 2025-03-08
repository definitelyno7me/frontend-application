"use client";

import { LeadType } from "@/types/lead";
import { useState, useEffect } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState<LeadType[]>([]);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data));
  }, []);

  const updateStatus = async (id: string) => {
    await fetch(`/api/leads/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "REACHED_OUT" }),
    });

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id ? { ...lead, status: "REACHED_OUT" } : lead
      )
    );
  };

  return (
    <div className="p-8">
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
  );
}
