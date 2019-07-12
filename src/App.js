import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios';
import Resultado from './components/Resultado';



class App extends React.Component {

  state = {
    monedas: [],
    monedaCotizada: '',
    cotizacion: {},
    cargando: false
  }

  componentDidMount() {
      this.obtenerMonedas();
  }

  obtenerMonedas = async () => {
      const url = `https://api.coinmarketcap.com/v2/ticker/`;

      await axios.get(url)
      .then(respuesta => {
          this.setState({
              monedas: respuesta.data.data,
          })
      })
      .catch(e => console.log(e))
  }

  obtenerValoresCripto = async (monedas) => {
    const {moneda, cripto} = monedas;

    const url = `https://api.coinmarketcap.com/v2/ticker/${cripto}/?covert=${moneda}`;

    console.log(moneda, cripto)
    await axios.get(url)
    .then(respuesta => {
      this.setState({
        cargando:true
      })
      setTimeout(() => {
        this.setState({
          monedas: respuesta.data.data,
          cotizacion: respuesta.data.data,
          monedaCotizada: moneda,
          cargando:false
        })
      }, 5000)
    })
    .catch(e => console.log(e))
  }

  render(){

    const cargando = this.state.cargando;

    let resultado;

    if(cargando){
      resultado =  <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                  </div>
    }else{
      resultado = <Resultado 
      cotizacion={this.state.cotizacion}
      monedaCotizada={this.state.monedaCotizada}
            />
    }

    return (
      <div className="container">
        <Header  titulo="Cotiza Criptomoneda al Instante"/>

        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Formulario
              monedas={this.state.monedas}
              obtenerValoresCripto={this.obtenerValoresCripto}
            />

            {resultado}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
