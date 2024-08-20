import 'leaflet/dist/leaflet.css'
import style from '../../app/globals.css'

import { MapContainer, TileLayer } from 'react-leaflet'

function Map() {

    const mystyle = {
        width: "100%", height: "40rem"
      };

    return (
        <MapContainer style={mystyle} className={style.map} center={[-42.505, 173.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>" 
                url ="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}

export default Map;