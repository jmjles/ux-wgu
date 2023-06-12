import React, { useState } from "react";
import locations from "./locations";
const Map = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="MapSection">
      <h2 style={{ marginBottom: 6 }}>View Our Map</h2>
      <p style={{ textAlign: "center", marginBottom: 22 }}>
        View our top locations, services and landmarks our island has to offer.
      </p>
      <section className="Map">
        <section className="Locations">
          <h3>Locations</h3>

          {locations.map((loc, i) => (
            <div
              onClick={() => setSelected(i)}
              key={i}
              className={selected === i ? "Selected" : "Location"}
            >
              {loc.name}
            </div>
          ))}
        </section>
        <section className="MapArea">
          <h3>{locations[selected].name} map location here</h3>
        </section>
        <section className="Info">
          <h3>About {locations[selected].name}</h3>
          <p>{locations[selected].info}</p>
        </section>
      </section>
    </section>
  );
};
export default Map;
