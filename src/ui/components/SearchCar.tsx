import { useState } from "react";
import { VehiclesRequests } from "../../api/vehicles";
import { useVehiclesContext } from "../../contexts/vehiclesContext";
import type { locationVehicles, vehicles } from "../../@types/vehicles";

export const SearchCar = () => {
  const [filter, setFilter] = useState<string>("");

  const { getList: listCar } = VehiclesRequests();
  const { maps, setVehicles, setMaps } = useVehiclesContext();

  async function onSubmit(type: "tracked" | "others") {
    const res = await listCar({
      filter: filter,
      type: type,
      page: 1,
      perPage: 20,
    });

    if (res) {
      setVehicles(res.content.vehicles);

      if (type !== "tracked") {
        const mapFilter: Array<locationVehicles> = maps.filter(
          (item: locationVehicles) =>
            res.content.vehicles.find((el: vehicles) => el.plate === item.plate)
        );
        setMaps(mapFilter);
      }

      setMaps(res.content.locationVehicles);
    }
  }

  return (
    <section className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-accessories pb-6">
      <div className="w-full md:w-4/12 flex justify-between items-center">
        <p className="font-semibold">Lista</p>
        <div className="flex gap-6 p-4 text-white">
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center border-2 border-accessories rounded-full p-1">
              <input
                type="radio"
                name="status"
                value="tracked"
                className="appearance-none w-2 h-2 rounded-full checked:bg-accessories checked:border-accessories"
                defaultChecked
                onChange={(ev) => {
                  onSubmit(ev.target.value as "tracked" | "others");
                }}
              />
            </div>
            Rastreados
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center border-2 border-accessories rounded-full p-1">
              <input
                type="radio"
                name="status"
                value="others"
                className="appearance-none w-2 h-2 rounded-full checked:bg-accessories checked:border-accessories"
                onChange={(ev) => {
                  onSubmit(ev.target.value as "tracked" | "others");
                }}
              />
            </div>
            Outros
          </label>
        </div>
      </div>
      <div className="flex w-full gap-6 md:w-5/12">
        <input
          className="w-4/5 px-2 py-3 text-sm placeholder-shown:text-input outline-none border-2 border-solid border-input rounded-lg"
          placeholder="Buscar por placa ou frota"
          value={filter}
          onChange={(ev) => setFilter(ev.target.value)}
        />
        {/* Optei pelo termo BUSCAR, pois faz uma referência mais fiel a função do botão. */}
        <button
          type="button"
          className={`w-2/5 p-3 rounded-lg bg-accessories cursor-pointer hover:opacity-60 ${
            !filter ? "bg-gray-400 opacity-40" : ""
          }`}
          onClick={() => onSubmit("tracked")}
          disabled={!filter}
        >
          Buscar
        </button>
      </div>
    </section>
  );
};
