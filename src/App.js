import React from "react";

import Titles from "./components/Titles"
import Form from "./components/Form";
import Weather from "./components/Weather";


class App extends React.Component{

    state = {
        mycurrency:undefined,
        mybasecurrency:undefined,

    };

    getWeather = async (e) => {
        e.preventDefault();

        const currency = e.target.elements.currency.value;
        const baseCurrency = e.target.elements.baseCurrency.value;

        const api_call = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currency}&tsyms=${baseCurrency}`);
        const data = await api_call.json();

        console.log(data);

        this.setState({
            mycurrency: data.RAW.currency.baseCurrency.FROMSYMBOL,
            mybasecurrency: data.basecurrency
        })


    };


    render() {
        return (
            <div>
                <Titles/>
                <Form getWeather={this.getWeather} />
                <Weather mycurrency={this.state.mycurrency}

                />
            </div>

        );
    }
}

export default App;