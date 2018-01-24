import React, {Component} from 'react';
import CurrencyInput from './CurrencyInput';
import TransactionInput from './TransactionInput';
import TransactionList from './TransactionList';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      transactions: [],
      valueEur: '',
      valueUsd: '',
      valueGbp: '',
      currency:'EUR',
      max: {}
    }
  }


  changeValueEur = (val) => {
    this.setState({
      valueEur: val
    }, this.refreshPrice)
  }

  changeValueUsd = (val) => {
    this.setState({
      valueUsd: val
    }, this.refreshPrice)
  }

  changeValueGbp = (val) => {
    this.setState({
      valueGbp: val
    }, this.refreshPrice)
  }

  changeCurrency = (curr) => {
    this.setState({
      currency: curr
    }, () => console.log(this.state.currency))
  }

  calculateValue=(value,currency)=> {
    let valPln = '';

      if(currency === 'EUR') {
        valPln = value*this.state.valueEur;
      } else if(currency === 'USD') {
        valPln = value*this.state.valueUsd;
      } else if(currency === 'GBP') {
        valPln = value*this.state.valueGbp;
      }

    return valPln;
  }

  
  render() {
    return (
        <div className="container">
          <h1 className="text-center app-title py-5">My Currency App</h1>
          <CurrencyInput
            changeValueEur={this.changeValueEur}
            changeValueUsd={this.changeValueUsd}
            changeValueGbp={this.changeValueGbp}
            />
        </div>
    )
  }

}

export default App;
