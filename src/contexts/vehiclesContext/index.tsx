import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { IProvider } from "../../@types/provider";
import type { IVehicleContext } from "../../@types/vehiclesContext";
import type { locationVehicles, vehicles } from "../../@types/vehicles";
import { VehiclesRequests } from "../../api/vehicles";

const VehiclesContext = createContext<IVehicleContext>({} as IVehicleContext);

export const VehiclesProvider: React.FC<IProvider> = ({ children }) => {
  const [vehicles, setVehicles] = useState<Array<vehicles>>(
    [] as Array<vehicles>
  );
  const [maps, setMaps] = useState<Array<locationVehicles>>(
    [] as Array<locationVehicles>
  );

  const { getList } = VehiclesRequests();
  
  const getVehicles = useCallback(async () => {
    const res = await getList({ type: "tracked", page: 1, perPage: 20 });

    if (res) {
      setVehicles(res.vehicles);
      setMaps(res.locationVehicles);
    }
  }, []);

  useEffect(() => {
    getVehicles();
  }, []);

  const value = useMemo(
    () => ({ vehicles, setVehicles, maps, setMaps }),
    [vehicles, setVehicles, maps, setMaps]
  );

  return (
    <VehiclesContext.Provider value={value}>
      {children}
    </VehiclesContext.Provider>
  );
};

export default VehiclesContext;

// eslint-disable-next-line react-refresh/only-export-components
export const useVehiclesContext = () => useContext(VehiclesContext);
