import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";
import type { locationVehicles } from "../../@types/vehicles";
import { useVehiclesContext } from "../../contexts/vehiclesContext";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: -23.55052,
  lng: -46.633308,
};

const VehiclesMaps = () => {
  const { maps } = useVehiclesContext();

  const [veiculoSelecionado, setVeiculoSelecionado] =
    useState<locationVehicles | null>(null);

  const newDate = (date: string) =>
    new Date(date).toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

  return (
    <div className="rounded-3xl overflow-hidden">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          {maps &&
            maps.length > 0 &&
            maps.map((v, i) => (
              <Marker
                key={i}
                position={{ lat: v.lat, lng: v.lng }}
                onClick={() => setVeiculoSelecionado(v)}
                title={`Placa: ${v.plate}`}
              />
            ))}

          {veiculoSelecionado && (
            <OverlayView
              position={{
                lat: veiculoSelecionado.lat,
                lng: veiculoSelecionado.lng,
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="bg-primary p-2 rounded shadow-md w-60">
                <p className="text-sm">Placa: {veiculoSelecionado.plate}</p>
                <p className="text-sm">
                  {newDate(veiculoSelecionado.createdAt)}
                </p>
                <a href="#" className="text-accessories hover:opacity-40">
                  Latitude: {veiculoSelecionado.lat} | Longitude:{" "}
                  {veiculoSelecionado.lng}
                </a>
              </div>
            </OverlayView>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default VehiclesMaps;
