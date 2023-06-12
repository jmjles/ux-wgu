import React from "react";
import events from "./events";
const { DateTime } = require("luxon");

const Events = () => {
  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <h2>Events happening soon</h2>
      <div style={{ display: "flex" }}>
        {events.map((e, i) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: 3,
              borderColor: "black",
              borderStyle: "solid",
              padding: 6,
              borderRightWidth: events.length - 1 === i ? 3 : 0,
            }}
          >
            <p style={{ textAlign: "right" }}>
              {DateTime.now()
                .plus({ days: i })
                .toLocaleString(DateTime.DATE_SHORT)}
            </p>
            <p style={{ fontSize: 16 }}>{e.name}</p>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
