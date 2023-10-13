
import React, { useState } from "react";

const Buscador = ({ setPalabra }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setPalabra(inputValue);
  };

  return (
    <form>
      <input  onChange={handleInputChange} className="form-control me-2" type="text" placeholder="Buscar Moneda ..." aria-label="Search" />
    </form>
  );
};

export default Buscador;
