import DG from "2gis-maps";
import React, { useEffect } from "react";

export const Map = () => {
  useEffect(() => {
    let map;
    map = DG.map("map-container", {
      center: [54.9966033, 73.3784771],
      zoom: 13,
      key: "123456",
    });
    DG.marker([54.9966508, 73.3790184]).addTo(map);
    return () => map.destroy();
  }, []);

  return (
    <div className="map-component-karta">
      <div className="map-component-title">
        <h1>Мы находимся здесь</h1>
      </div>
      <div id="map-container" style={{ width: "300", height: "500px" }} />
    </div>
  );
};

export default Map;
