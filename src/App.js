import React from "react";
import Titles from "./components/Titles";
import Marquee from './components/Marquee';

class App extends React.Component{
    render() {
        return (
            <div>
                <Titles/>
                <Marquee/>
            </div>

        );
    }
}

export default App;