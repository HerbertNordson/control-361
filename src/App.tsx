import { useEffect, useState } from "react";
import "./App.css";
import { VehiclesRequests } from "./api/vehicles";

function App() {
  const { getList: listVehicles } = VehiclesRequests();
  const [data, setData] = useState();
  async function list() {
    const dt = await listVehicles({ type: "tracked", page: 1 });
    if (dt) {
      setData(dt);
      console.log(dt);
    }
  }

  useEffect(() => {
    if (!data) {
      list();
    }
  }, [data]);

  return <div className="min-h-screen"></div>;
}

export default App;
