const App = () => {
  //  const miArreglo =[1, 2, 3, 4, 5];
  // SPREAD
  const persona = {
    nombre: "Obed",
    apellido: "Nolasco",
    edad: 21,
    direccion: {
      calle: "Avenida Siempre Viva",
      numExt: 742,
      numInt: "",
      ciudad: "Springflied",
    },
  };

  const contactoPersona = {
    telefono: "2871234557",
    email: "bart.s@live.com",
    web: "www.thesimpsons.com",
  };

  const inforPersona = { ...persona, ...contactoPersona, empresa: "Disney" };
  inforPersona.apodo = "Bart";

  //console.table(inforPersona)

  const { edad, nombre, apellido } = persona;
  const { calle, numExt, ciudad } = persona.direccion;
  const humanos = ["Homer", "Margorie", "Lisa", "Maggie"];
  const [padre, madre, hermana1, hermana2] = humanos;
  const mascotas = ["Santa's helper", "snow ball"];

  const familia = [...humanos, ...mascotas, "Michelle", "citlalli"];
  console.log(familia);

  return (
    <div className="App">
      {/*EcmaScript 6 */}
      <h3>{`Mi nombre es ${nombre} ${apellido}, tengo ${edad} años y 
      vivo en ${calle} número ${numExt}, ${ciudad}`}</h3>
      <br />
      {"Mi familia la conforman:"}
      <ul>
        <li>{`Mi padre es: ${padre}`}</li>
        <li>{`Mi madre: ${madre}`}</li>
        <li>{`Mis hermanas: ${hermana1} y ${hermana2}`}</li>
      </ul>
    </div>
  );
};
export default App;
