import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix icon tidak muncul
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'
});

function MapView() {
  return (
    <MapContainer
      // center={[-7.2575, 112.7521]} // koordinat Surabaya
      center={[-7.5136633,112.4948579]} // koordinat Kluwung beans & vanilla
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: '20em', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker untuk lokasi Kluwung beans & vanilla */}
      <Marker position={[-7.5136633,112.4948579]}>
        <Popup>
          Kluwung Beans & Vanilla! <br />
          Lokasi Usaha Kami. <br />
          <a href="https://maps.app.goo.gl/qDuZMTRaRKcDGZKo8" target="_blank" rel="noopener noreferrer">Lihat di Google Maps</a>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapView
