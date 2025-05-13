import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import type { IProvider } from "../../@types/provider";
import type { IVehicleContext } from "../../@types/vehiclesContext";

const UserContext = createContext<IVehicleContext>({} as IVehicleContext);

export const UserProvider: React.FC<IProvider> = ({ children }) => {
  
  const [maps, setMaps] = useState<Array<any>>([] as Array<any>);

  const value = useMemo(
    () => ({ maps, setMaps }),
    [maps, setMaps]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);
