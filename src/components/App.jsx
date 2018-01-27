import React, {Component} from 'react';
import CurrencyInput from './CurrencyInput';
import TransactionInput from './TransactionInput';
import TransactionList from './TransactionList';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        transactions: [],
        valueEur: '',
        valueUsd: '',
        valueGbp: '',
        currency: 'EUR',
        max: {}
    }
  }


  changeValueEur = (valueEur) => {
    this.setState({
      valueEur
    }, this.refreshPrice)
  }

  changeValueUsd = (valueUsd) => {
    this.setState({
      valueUsd
    }, this.refreshPrice)
  }

  changeValueGbp = (valueGbp) => {
    this.setState({
      valueGbp
    }, this.refreshPrice)
  }

  changeCurrency = (curr) => {
    this.setState({
      currency: curr
    })
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

  addTransaction =(value, currency)=> {
    const id = Math.random()*1000;
    const newTransaction = {
      id,
      currency,
      value,
      valPln: this.calculateValue(value,currency)
    }

    this.setState({
      transactions:[...this.state.transactions, newTransaction]
    }, () => this.getMaxTransaction(this.state.transactions))

  }

  deleteTransaction = (id) => {

    const newArr = this.state.transactions.filter(elem => {
      let element;
        if(elem.id !== id) {
          element = elem;
        }
      return element
    })

    this.setState({
        transactions: newArr
    },() => {
      if(this.state.transactions.length > 0){
        this.getMaxTransaction(this.state.transactions)
      } else {
        this.getMaxTransaction([{value:'', valPln:''}])
        }
      }
    )

  }

  refreshPrice = (el) => {
    let newArr = [...this.state.transactions];
    newArr.forEach(elem=>{
        if(elem.currency === 'EUR') {
          elem.valPln=elem.value*this.state.valueEur;
        } else if(elem.currency === 'USD') {
            elem.valPln=elem.value*this.state.valueUsd;
        } else if(elem.currency === 'GBP') {
            elem.valPln=elem.value*this.state.valueGbp;
        }
    })

        this.setState({
            transactions: newArr
        }, ()=>this.getMaxTransaction(newArr))
  }

  getMaxTransaction = (arr) => {
      const max = arr.reduce(function(prev, current) {
          return (prev.valPln > current.valPln)
              ? prev
              : current
      }, 0)

      this.setState({max})

  }

  render() {

    let highestTransaction = this.state.transactions.length > 0
                              ? `The highest transaction: ${this.state.max.value} ${this.state.max.currency} = ${this.state.max.valPln} PLN`
                              : 'The highest transaction: 0'

    return (
        <div className="container">
          <h1 className="text-center app-title py-5">My Currency App</h1>
          <CurrencyInput
            changeValueEur={this.changeValueEur}
            changeValueUsd={this.changeValueUsd}
            changeValueGbp={this.changeValueGbp}
            />
          <h5 className="text-center pt-5">Add transaction</h5>
          <TransactionInput
            addTransaction={this.addTransaction}
            changeCurrency={this.changeCurrency}
            />
          <h5 className="text-center pt-5">Transactions list</h5>
          <TransactionList
            transactions={this.state.transactions}
            deleteTransaction={this.deleteTransaction}
            />
          <p className="col-6 mx-auto text-center bg bg-info p-2">
            {highestTransaction}
          </p>
          <p className="col-6 mx-auto text-center">
            number of transactions: {this.state.transactions.length}
          </p>
        </div>
    )
  }

}

export default App;
