import React from "react"

class Form extends React.Component{
    render(){
        return (
            <div>

                <form onSubmit={this.props.getWeather}>

                    <input type="text" name="currency" placeholder="Cryptocurrency..." aria-required="true"/>
                    <input type="text" name="baseCurrency" placeholder="Base Currency..."  aria-required="true"/>
                    <button>Get Info</button>

                </form>

            </div>
        );
    }
}

export default Form;