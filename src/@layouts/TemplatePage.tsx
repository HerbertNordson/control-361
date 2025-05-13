import { Outlet } from "react-router-dom";
import { Header } from "../ui/theme/Header";

export function TemplatePage() {
  return (
    <div className="flex flex-col w-full min-h-screen text-textPrimary bg-primary">
      <Header />
      <main className="p-8 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
