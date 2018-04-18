import React from "react";
import '../CSS/style.css';
import CryptoData from './CryptoData';
class Titles extends React.Component{
    render(){
        return (
                <div>
                        <div className="row justify-content-md-center background">
                            <div className="col-sm-6" style={{marginTop:'10rem'}}>
                                <h1 className="font text-center">Cryptocurrencies App</h1>
                                <h5 className="text-center">Track your favorite Cryptocurrencies.</h5>
                            <CryptoData/>
                            </div>
                        </div>

                </div>
        );
    }
}

export default Titles;