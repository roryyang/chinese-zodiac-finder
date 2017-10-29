import React from 'react';

class ZodiacInput extends React.Component {
    constructor(props){
		super(props);
        this.state = {birthYear: "", birthPet: ""};
    } 

    InputChangeYear1(term) {
        this.setState({birthYear: term});
        this.props.InputChangeYear(term);
    }
    
    ZodiacResult() {
        var start = "1911";
        var birthPet = "";
        var birthYear = this.state.birthYear;
        var x = (birthYear - start) % 12;

        x = x < 0 ? x + 12 : x;

        // if(x < 0) {
        //     x = x + 12;
        // } else {
        //     x = x;
        // }

        // 輸入空值或不是數字型態就擋下
        if(!birthYear){
            alert("Oops! what's your birthyear?");
            return;
        }
        console.log(x);

        switch(x) {
            case 0:
                this.setState({birthPet: "Oxes are known for diligence, dependability, strength and determination."});
                break;
            case 1:
                this.setState({birthPet: "Rats are quick-witted, smart and lovely"});
                break;
            case 2:
                this.setState({birthPet: "Pigs are diligent, compassionate, and generous."});
                break;
            case 3:
                this.setState({birthPet: "Dogs are loyal and honest, amiable and kind, cautious and prudent."});
                break;
            case 4:
                this.setState({birthPet: "Roosters are always active, amusing, and popular within a crowd."});
                break;
            case 5:
                this.setState({birthPet: "Monkeys are fast learners and crafty opportunists."});
                break;
            case 6:
                this.setState({birthPet: "Goat are gentle, and brimming with a strong sense of kindheartedness and justice."});
                break;
            case 7:
                this.setState({birthPet: "Horses are extremely animated, active and energetic. "});
                break;
            case 8:
                this.setState({birthPet: "Snakes represent the symbol of wisdom. They are intelligent and wise. "});
                break;
            case 9:
                this.setState({birthPet: "Dragons are enthusiastic and confident. They are not afraid of challenges, and willing to take risks."});
                break;            
            case 10:
                this.setState({birthPet: "Rabbits tend to be gentle, quiet and elegant."});
                break;
            case 11:
                this.setState({birthPet: " Tiger are brave, competitive, unpredictable, and self-confident."});
                break;
            default:
                this.setState({birthPet: "Oops! what's your birthyear?"});
                break;
        }
    }                

    render() {
        return(
            <div>
                <div className ="row">
                    <input className="col-md-3 " id="year" placeholder="yyyy"
                           value={this.state.birthYear}
                           onChange={ event => {this.InputChangeYear1(event.target.value)} }/>
                </div>    
                <div className ="row">
                    <button className="col-md-2 " id="submit" onClick={this.ZodiacResult.bind(this)}>Click!</button>
                </div>
                <div className ="row">
                    <div className="col-xs-12" id="output">
                        <h4 className="col-xs-12 col-lg-8 col-lg-push-2 rwd-break" id="display">{this.state.birthPet}</h4>
                    </div>
                </div>
            </div>
        )
    }

};
export default ZodiacInput;