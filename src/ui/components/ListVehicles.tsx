import type { vehicles } from "../../@types/vehicles";
import { useVehiclesContext } from "../../contexts/vehiclesContext";

export const ListVehicles = () => {
  const { vehicles } = useVehiclesContext();

  return (
    <section>
      <div className="border border-section bg-secundary rounded-3xl overflow-hidden">
        <table className="w-full table-auto text-left text-white">
          <thead className="text-sm text-white/70 text-center">
            <tr>
              <th className="p-4 border border-section">Placa</th>
              <th className="p-4 border border-section">Frota</th>
              <th className="p-4 border border-section">Tipo</th>
              <th className="p-4 border border-section">Modelo</th>
              <th className="p-4 border border-section">Status</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v: vehicles) => (
              <tr
                key={v.id}
                className="border-t border-slate-800 hover:bg-secundary text-center"
              >
                <td className="p-4 border border-section">{v.plate}</td>
                <td className="p-4 border border-section">{v.fleet}</td>
                <td className="p-4 border border-section">{v.type}</td>
                <td className="p-4 border border-section">{v.model}</td>
                <td className="p-4 border border-section">{v.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
