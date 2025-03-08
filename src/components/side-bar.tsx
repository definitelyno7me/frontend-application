"use client";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: "Leads", path: "/admin" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-80 h-screen border-r-1 pt-8">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => router.push(item.path)}
                className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded transition"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
