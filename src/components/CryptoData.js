import React from 'react';
import '../CSS/style.css'
import {Button ,Table} from 'mdbreact';
import axios from 'axios';

export default class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinData: [],
            showResults: false,
            baseCurrency : '',
            currency : '',
            error:undefined,
            wrongData:undefined,
            onClickData: {id : '', symbol : '', name : '', rank : '', price_usd : '', price_btc : '',percent_change_7d: '',percent_change_1h: '',percent_change_24h: '',last_updated: ''}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`https://api.coinmarketcap.com/v1/ticker/`)
            .then(res => {
                const coinData = res.data;
                this.setState({ coinData });
            })
    }

    handleChange(event) {
        this.setState( {baseCurrency : event.target.value} );
    }

    handleChange1(event) {
        this.setState( {currency : event.target.value} );
    }



    handleSubmit(event) {
        var isRightCurrency = false;

        this.setState({ wrongData : ''});
        this.setState({ error : ''});

        if( this.state.currency === '') {
            this.setState({
                error:<h4 style={{
                    fontFamily:'sans-serif',fontSize:'20px' ,
                    fontWeight:'600' ,marginTop:'10px',
                    marginBottom:'10px'}}>
                    Please enter the currency name
                </h4>
            });
            return;
        }


        this.state.coinData.map(row => {
            if (row.symbol === this.state.currency.toUpperCase()  )
            {
                 this.setState ( {onClickData : row});
                 this.setState ( {showResults : true});
                 isRightCurrency = true;
            }
        });

        if(isRightCurrency === false)
        {
            this.setState ( {
                wrongData : <h4
                    style={{fontFamily:'sans-serif',fontSize:'20px' ,
                        fontWeight:'600' ,marginTop:'10px',marginBottom:'10px'}}>
                    Please enter the right currency name
                </h4>
            });
        }
    }


    render() {
        return (
            <div>

                <form>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <input type="text"  onChange={this.handleChange1} value={this.state.currency}  className="form-control"  name="currency" placeholder="Cryptocurrency..." aria-required="true"/>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" onChange={this.handleChange} value={this.state.baseCurrency} className="form-control" name="baseCurrency" placeholder="USD" readOnly aria-required="true"/>
                        </div>
                    </div>
                    <div className="row justify-content-md-center mt-3">
                        <Button type="button" onClick={this.handleSubmit} className="btn w-50" color="deep-orange">Get Info</Button>
                    </div>
                </form>
                { this.state.showResults ?
                <Table className="mt-5 bg-white">
                    <thead className="mdb-color darken-3">
                    <tr className="text-white">
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Rank</th>
                        <th>USD</th>
                        <th>BTC</th>
                        <th>Percent_change_24h</th>
                        <th>Percent_change_1h</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">{this.state.onClickData.name}</th>
                        <td className="text-center">{this.state.onClickData.symbol}</td>
                        <td className="text-center">{this.state.onClickData.rank}</td>
                        <td className="text-center">{this.state.onClickData.price_usd}</td>
                        <td className="text-center">{this.state.onClickData.price_btc}</td>
                        <td className="text-center">{this.state.onClickData.percent_change_24h}</td>
                        <td className="text-center">{this.state.onClickData.percent_change_1h}</td>
                    </tr>
                    </tbody>
                </Table> : <div className="row error mt-4 justify-content-md-center ">
                        {this.state.error}
                        {this.state.wrongData}
                    </div>
                }
            </div>

        )
    }
}