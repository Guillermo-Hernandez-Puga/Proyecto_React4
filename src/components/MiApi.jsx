import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const MiApi = ({ palabra }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API
    fetch("https://mindicador.cl/api/")
      .then((response) => response.json())
      .then((data) => {
        // Filtra los datos basados en la palabra clave (palabra)
        const filteredData = Object.keys(data).reduce((filtered, key) => {
          const valor = data[key].valor;
          if (valor !== null && valor !== undefined) {
            if (palabra && data[key].nombre.toLowerCase().includes(palabra.toLowerCase())) {
              filtered[key] = data[key];
            } else if (!palabra) {
              filtered[key] = data[key];
            }
          }
          return filtered;
        }, {});
        setApiData(filteredData);
      });
  }, [palabra]);

  return (
    <div>
      <div className="row">
        {Object.keys(apiData).map((moneda) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={moneda}>
            <Card>
              <Card.Body>
                <Card.Title>{apiData[moneda].nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{apiData[moneda].codigo}</Card.Subtitle>
                <Card.Text>
                  <strong>Medida:</strong> {apiData[moneda].unidad_medida}
                </Card.Text>
                <Card.Text>
                  <strong>Valor:</strong> {apiData[moneda].valor}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiApi;
