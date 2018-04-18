import React from "react";
import '../CSS/style.css';
class Marquee extends React.Component{
    render(){
        return (
            <div>
                <div id="example1">
                    <p>
                        <img src="https://www.bitbawa.com/img/assets/btc_logo.png" width="25"/>
                            Bitcoin :
                            <b className="ml-2">549574.12</b>
                        <img className="ml-2" src="https://www.bitbawa.com/img/assets/eth_logo.png" width="25"/>
                            Ethereum :
                            <b className="ml-2">549.12</b>
                        <img className="ml-2" src="https://www.bitbawa.com/img/assets/xrp_logo.png" width="25"/>
                            Ripple :
                            <b className="ml-2">54.12</b>
                        <img className="ml-2" src="https://www.bitbawa.com/img/assets/ltc_logo.png" width="25"/>
                            Litecoin :
                            <b className="ml-2">549574.12</b>
                        <img className="ml-2" src="https://www.bitbawa.com/img/assets/bch_logo.png" width="25"/>
                            Bitcoin Cash :
                            <b className="ml-2">549574.12</b>
                        <img className="ml-2" src="https://www.bitbawa.com/img/assets/neo_logo.png" width="25"/>
                            Neo :
                            <b className="ml-2">549574.12</b>
                        <img className="ml-2" src="https://www.bitbawa.com/img/assets/xlm_logo.png" width="25"/>
                            Steller :
                            <b className="ml-2">549574.12</b>


                    </p>
                </div>

            </div>
        );
    }
}

export default Marquee;