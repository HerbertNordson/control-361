import { Routes, Route } from "react-router-dom";

//Layouts

// Pages
import NotFound from "../pages/NotFound";
import { Home } from "../pages/Home";
import { TemplatePage } from "../@layouts/TemplatePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<TemplatePage />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
