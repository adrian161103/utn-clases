import App from "../App";
import FetchNasa from "../../../../clase-29 login registro y api/vite-project/src/API/FetchNasa";
import { useEffect } from "react";
import { useState } from "react";

function Product() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const fetchedData = await FetchNasa(10);
      setData(fetchedData);
    } catch (error) {
      console.error(error);
    }
  };

  //array de dependencia   lo que cambia se coloca en "[]"
  useEffect(() => {
    getData();
  }, []);
  return (
    <App setData={setData}>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>Productos</div>
        {data.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          data.map((dataItem, i) => (
            <div key={i} style={{ maxWidth: "90vw" }}>
              <h1>{dataItem.title}</h1>
              <p>{dataItem.date} </p>
              <p>{dataItem.explanation} </p>
              <img src={dataItem.hdurl} alt="img" style={{ width: "100%" }} />
            </div>
          ))
        )}
      </section>
    </App>
  );
}

export default Product;
