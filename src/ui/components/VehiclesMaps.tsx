import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: -23.55052,
  lng: -46.633308,
};

type Veiculo = {
  placa: string;
  frotas: string;
  status: string;
  modelo: string;
  tipo: string;
  latitude: number;
  longitude: number;
};

interface Props {
  veiculos: Veiculo[];
}

const VehiclesMaps: React.FC<Props> = ({ veiculos }) => {
  const [veiculoSelecionado, setVeiculoSelecionado] = useState<Veiculo | null>(
    null
  );

  return (
    <div className="rounded-3xl overflow-hidden">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          {veiculos.map((v, i) => (
            <Marker
              key={i}
              position={{ lat: v.latitude, lng: v.longitude }}
              onClick={() => setVeiculoSelecionado(v)}
              title={`Placa: ${v.placa}`}
            />
          ))}

          {veiculoSelecionado && (
            <OverlayView
              position={{
                lat: veiculoSelecionado.latitude,
                lng: veiculoSelecionado.longitude,
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="bg-primary p-2 rounded shadow-md w-60">
                <h3 className="text-lg font-semibold">
                  {veiculoSelecionado.modelo}
                </h3>
                <p className="text-sm">Placa: {veiculoSelecionado.placa}</p>
                <p className="text-sm">Status: {veiculoSelecionado.status}</p>
              </div>
            </OverlayView>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default VehiclesMaps;
