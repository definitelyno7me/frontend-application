"use client";

const sampleLeads = [
  {
    name: "Jorge Ruiz",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Bahar Zamir",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "Mexico",
  },
  {
    name: "Anand Jain",
    submitted: "02/02/2024, 2:45 PM",
    status: "Reached Out",
    country: "Mexico",
  },
];

export default function LeadsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Leads</h1>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Submitted</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Country</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleLeads.map((lead, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{lead.name}</td>
              <td className="p-2">{lead.submitted}</td>
              <td className="p-2">{lead.status}</td>
              <td className="p-2">{lead.country}</td>
              <td className="p-2">
                {lead.status === "Pending" && (
                  <button className="btn">Mark as Reached Out</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
