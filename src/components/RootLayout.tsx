import { Outlet } from "react-router";
import { Navbar } from "./Navbar/Navbar";

export function RootLayout() {
  return (
    <div className="flex h-screen">
      <Navbar></Navbar>
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
