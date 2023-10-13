import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const MiApi = () => {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Realizar una solicitud a la API para obtener los datos JSON
    fetch("https://mindicador.cl/api/")
      .then((response) => response.json())
      .then((data) => {
        // Filtrar elementos sin datos (por ejemplo, con valor null o undefined)
        const filteredData = Object.keys(data).reduce((filtered, key) => {
          if (data[key].valor !== null && data[key].valor !== undefined) {
            filtered[key] = data[key];
          }
          return filtered;
        }, {});
        setApiData(filteredData);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = Object.keys(apiData).filter((moneda) => {
    const nombre = apiData[moneda].nombre.toLowerCase();
    return nombre.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar monedas..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="row">
        {filteredData.map((moneda) => (
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
}

export default MiApi;

