import React from "react";
import { clientsData } from "../constants/clientsData";

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <h2 className="clients__title">Clients & Projects</h2>
      <div className="clients__grid container">
        {clientsData.map((client, index) => (
          <div key={index} className="client-card">
            <div className="client-card__logo">{client.logo}</div>
            <h3 className="client-card__name">{client.name}</h3>
            <p className="client-card__project">{client.project}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
