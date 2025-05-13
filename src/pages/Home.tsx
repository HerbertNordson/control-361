import { ListVehicles } from "../ui/components/ListVehicles";
import { SearchCar } from "../ui/components/SearchCar";
import VehiclesMaps from "../ui/components/VehiclesMaps";

export const Home = () => {
  return (
    <div className="m-auto max-w-7xl space-y-6">
      <SearchCar />

      <section>
        <div className="p-6 bg-secundary rounded-3xl border border-section">
          <h1 className="fton-semibold mb-4">Mapa rastreador</h1>
          <VehiclesMaps />
        </div>
      </section>

      <ListVehicles />
    </div>
  );
};
