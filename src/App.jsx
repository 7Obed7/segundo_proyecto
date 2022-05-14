const App = () => {
  const miObjeto = {
    nombre: "Naruto",
    Apellido: "Uzumaki",
    Edad: 16,

    direccion: {
      calle: "Paseo de las palmas",
      numExt: 618,
      numIn: "",
      ciudad: "Konohagakure",
    },
  };

  const { Edad, nombre, Apellido } = miObjeto;
  const { calle, numExt, ciudad } = miObjeto.direccion;
  const familia = ["Minato", "Kushina", "Sasuke", "Sakura"];
  const [padre, madre, hermano, hermana] = familia;

  return (
    <div className="App">
      {/*ECMAScript 6*/}
      <h3>{`Mi nombre es ${nombre}
       ${Apellido}, tengo ${Edad} años y vivo en ${calle} número ${numExt}, ${ciudad}`}</h3>
      <br />
      {"Mi familia lo conforman: "}
      <ul>
        <li>{`Mi padre: ${padre}`}</li>
        <li>{`Mi madre: ${madre}`}</li>
        <li>{`Mi hermanos: ${hermano} y ${hermana}`}</li>
      </ul>
    </div>
  );
};

export default App;
