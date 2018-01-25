import React, {Component} from 'react';

class TransactionInput extends Component {
  constructor(props){
    super(props);
    this.state={
      value: '',
      currency:'EUR'
    }
  }


  handleInputText = (event) => {
    this.setState({value:event.target.value})
  }

  handleAddTransaction = () => {
    this.props.addTransaction(Number(this.state.value),this.state.currency);
  }


  handleCurrencyChange = (event) => {
    this.setState(
      {currency: event.target.value},
      ()=>this.props.changeCurrency(this.state.currency)
    )
  }


  render() {
    return (
      <div className="row">
        <div className="task-form col-10 col-md-6 mx-auto text-center">
          <div className="input-group">
             <input type="text"
                    className="form-control"
                    placeholder="Enter value..."
                    value={this.state.value}
                    onChange={event => this.handleInputText(event)}
              />
              <select
                  className="form-control select"
                  value={this.state.currency}
                  onChange={this.handleCurrencyChange}>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
              </select>
              <span className="input-group-btn">
                   <button className="btn btn-success"
                           type="button"
                           onClick={this.handleAddTransaction}
                           >
                        Calculate
                   </button>
               </span>
         </div>

        </div>
      </div>
    )
  }
}

export default TransactionInput;
