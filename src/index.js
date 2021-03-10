import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";
import Spinner from './Spinner';

//functional component approach
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition((position) => console.log(position), (err) => console.log(err))
//     return <div>Latitude: </div>;
// }

//class component approach
// class App extends React.Component{
//     render() {
//         window.navigator.geolocation.getCurrentPosition((position) => console.log(position), (err) => console.log(err))
//         return <div>Latitude: </div>;
//     }
// }

//class component approach using state
class App extends React.Component {

    // constructor(props) {
    //     super(props); //super means parent
    //     //initialising state inside constructor, direct assignement only at the time of initialisation
    //     this.state = { lat: null, errorMessage: '' };  
        
    // }

    //initialising state without constructor, constructor not using because babel will create it automatically
    state = { lat: null, time: new Date().toLocaleTimeString(), errorMessage: '' };

    componentDidMount() {
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }), //always update state using setState,
            (err) => this.setState({ errorMessage: err.message })
        );
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString()})
        }, 1000)
    }
    // componentDidUpdate() {
    //     console.log('My component was just updated! - it rerendered ');
    // }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} time={this.state.time}/>;
        }
        return <Spinner message="Please accept location request" />;

    }
    //React says we have to define render
    render() {
        console.log(this.state.lat);
        console.log(this.state.time);
        return (
            <div className="fontSize">
                {this.renderContent()}
            </div>
        )

    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)