import type { locationVehicles, vehicles } from "./vehicles";

export interface IVehicleContext {
  maps: Array<locationVehicles>;
  setMaps: React.Dispatch<React.SetStateAction<Array<locationVehicles>>>;
  vehicles: Array<vehicles>;
  setVehicles: React.Dispatch<React.SetStateAction<Array<vehicles>>>;
}
