const App = () => {
  const miObjeto = {
    nombre: "Lauro",
    ApPaterno: "Nolasco",
    ApMaterno: "Vazquez",
    Edad: 21,
  };

  return (
    <div className="App">
      {/*ECMAScript 6*/}
      <h1>{`Mi nombre es ${miObjeto.nombre} ${miObjeto.ApPaterno} ${miObjeto.ApMaterno} y tengo ${miObjeto.Edad} años`}</h1>
      {/*ECMAScript 6*/}
      <h2>
        {"Mi nombre es " +
          miObjeto.nombre +
          " " +
          miObjeto.ApPaterno +
          " " +
          miObjeto.ApMaterno +
          " y tengo " +
          miObjeto.Edad +
          " años"}
      </h2>
    </div>
  );
};

export default App;
