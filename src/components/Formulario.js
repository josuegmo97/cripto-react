import React, { Component } from 'react'
import OptionSelect from './OptionSelect'

class Formulario extends Component {

    monedaRef = React.createRef();
    criptoRef = React.createRef();


    cotizarMonedas = (e) =>{
        e.preventDefault();

        // crear objeto
        const cotizacion = {
            moneda: this.monedaRef.current.value,
            cripto: this.criptoRef.current.value
        }
        
        // enviar por props
        this.props.obtenerValoresCripto(cotizacion);
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.cotizarMonedas}>
                    <div className="form-group">
                        <label htmlFor="">Moneda:</label>
                        <select ref={this.monedaRef} className="form-control">
                            <option value="" disabled defaultValue>Elije tu moneda</option>
                            <option value="USD">Dolar Estadounidense</option>
                            {/* <option value="MXN">Peso Mexicano</option>
                            <option value="GBP">Libras</option>
                            <option value="EUR">Euros</option>
                            <option value="JPY">Yen</option>
                            <option value="BOB">Bolivian Boliviano (WTF DE NOMBRE)</option> */}

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Criptomoneda</label>
                        <select ref={this.criptoRef} className="form-control">

                            {Object.keys(this.props.monedas).map(key => (
                                <OptionSelect
                                    key={key}
                                    moneda={this.props.monedas[key]}
                                />
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Cotizar"/>
                    </div>
                </form>
            </div>
        )
    }
}
// https://api.coinmarketcap.com/v2/listings/
// d2d68901-bfb7-4e50-8fce-2903c65b2309

export default Formulario
