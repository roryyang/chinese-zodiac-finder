import React from 'react';
import ReactDOM from 'react-dom';
import ZodiacInput from './components/ZodiacInput';
import Introduction from './components/Introduction';

class App extends React.Component{
	constructor(props){
        super(props);

        this.state={birthYear: "", birthPet: ""};
    }

    zodiacFinder(term){
        this.setState({birthYear: term, birthPet: term});
    }

    render(){
        return(
            <div className="container">
                <Introduction />
                <ZodiacInput InputChangeYear={ event => this.zodiacFinder(event) } />
                             {/* OutputZodiacResult={ event => this.zodiacFinder(event)}/> */}
            </div>
        )
    };
};

ReactDOM.render(<App/>,window.document.getElementById("app"));