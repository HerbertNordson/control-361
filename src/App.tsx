import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes";
import { VehiclesProvider } from "./contexts/vehiclesContext";
import "./App.css";

function App() {
  return (
    <VehiclesProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </VehiclesProvider>
  );
}

export default App;
