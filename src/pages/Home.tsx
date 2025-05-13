import { SearchCar } from "../ui/components/SearchCar";
import VehiclesMaps from "../ui/components/VehiclesMaps";

const veiculos = [
  {
    placa: "ABC-1234",
    frotas: "Frota A",
    status: "Ativo",
    modelo: "Fiat Uno",
    tipo: "Leve",
    latitude: -23.55052,
    longitude: -46.633308,
  },
  {
    placa: "XYZ-5678",
    frotas: "Frota B",
    status: "Em manutenção",
    modelo: "Ford Ranger",
    tipo: "Pesado",
    latitude: -22.9035,
    longitude: -43.2096,
  },
  {
    placa: "JKL-9012",
    frotas: "Frota C",
    status: "Inativo",
    modelo: "Chevrolet S10",
    tipo: "Médio",
    latitude: -19.9167,
    longitude: -43.9345,
  },
  {
    placa: "MNO-3456",
    frotas: "Frota D",
    status: "Ativo",
    modelo: "Volkswagen Saveiro",
    tipo: "Leve",
    latitude: -30.0346,
    longitude: -51.2177,
  },
];

export const Home = () => {
  return (
    <div className="m-auto max-w-7xl space-y-6">
      <SearchCar />

      <section>
        <div className="p-6 bg-secundary rounded-3xl border border-section">
          <h1 className="fton-semibold mb-4">Mapa rastreador</h1>
          <VehiclesMaps veiculos={veiculos} />
        </div>
      </section>

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
              {veiculos.map((v, i) => (
                <tr
                  key={i}
                  className="border-t border-slate-800 hover:bg-secundary text-center"
                >
                  <td className="p-4 border border-section">{v.placa}</td>
                  <td className="p-4 border border-section">{v.frotas}</td>
                  <td className="p-4 border border-section">{v.tipo}</td>
                  <td className="p-4 border border-section">{v.modelo}</td>
                  <td className="p-4 border border-section">{v.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
