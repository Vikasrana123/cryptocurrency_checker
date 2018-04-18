import React from "react"
import {Button} from 'mdbreact';
import CruptoData from "./CryptoData";


class Form extends React.Component{
    render(){
        return (
            <div>
                {/*<form onSubmit={this.props.getWeather}>*/}
                <form>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" name="currency" placeholder="Cryptocurrency..." aria-required="true"/>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" name="baseCurrency" placeholder="Base Currency..."  aria-required="true"/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center mt-3">
                        <Button type="button" className="btn w-50" color="deep-orange">Get Info</Button>
                    </div>
                </form>
            <CruptoData/>
            </div>
        );
    }
}

export default Form;