import React, { Component } from 'react'

class Resultado extends Component {

    mostrarResultado = () => {

        const {name, quotes} = this.props.cotizacion;
        const monedaCotizado = this.props.monedaCotizada;

        if(!name){ return null }
        const {price, percent_change_1h, percent_change_24h} = quotes[monedaCotizado];

        console.log(quotes)

        // if(true) return null

        return (
            <div className="bg-success py-4">
                <div className="resumen text-light text-center">
                    <h2 className="mb-4">Resumen</h2>
                    <p><span className="font-weight-bold">El precio de {name} en {monedaCotizado} </span>$ {(price.toFixed(2))}</p>
                    <p><span className="font-weight-bold">Porcentaje Ultima Hora: </span>{percent_change_1h} %</p>
                    <p><span className="font-weight-bold">Porcentaje Ultimas 24 horas: </span>{percent_change_24h} %</p>

                </div>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                {/* {this.mostrarmostrarResultado} */}
                {this.mostrarResultado()}
            </React.Fragment>

        )
    }
}

export default Resultado
