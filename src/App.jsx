//ECMAscript 5
var textovar = "Texto var1";

//ECMAScript 6
let textolet = "Texto let 1";
const textoconst = "Texto const 1";

textovar = "texto var 2";
textolet = "texto let 2";
// textoconst "texto var 2";

var textovar = "texto var 3";
//let textolet = "texto let 3";
//const textoconst = "texto const 3";

if (true) {
  var textovar = 5;
  let textolet = 10;
  // textoconst = 15;
}

const App = () => {
  return (
    <div className="App">
      <h1>HOLA MUNDO, este es mi Segundo Proyecto</h1>
      <h1>{textovar}</h1>
      <h1>{textolet}</h1>
      <h1>{textoconst}</h1>
    </div>
  );
};
