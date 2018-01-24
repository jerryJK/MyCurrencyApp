import React, {Component} from 'react';

class CurrencyInput extends Component {
  constructor(props){
    super(props);
    this.state={
      eur: "",
      usd: "",
      gbp: ""
    }
  }


  handleInputEur = (event) => {
    this.setState(
      {eur: event.target.value},
      this.props.changeValueEur(event.target.value)
    )
  }

  handleInputUsd = (event) => {
    this.setState(
      {usd: event.target.value},
      this.props.changeValueUsd(event.target.value)
    )
  }

  handleInputGbp = (event) => {
    this.setState(
      {gbp: event.target.value},
      this.props.changeValueGbp(event.target.value)
    )
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-4 text-center">
          1 EUR =
            <input
              className="form-control d-inline mx-2 text-center"
              value={this.state.eur}
              onChange={event => this.handleInputEur(event)}
              style={{width:"100px"}}
            />
          PLN
        </div>
        <div className="col-md-4 text-center">
          1 USD =
            <input
              className="form-control d-inline mx-2 text-center"
              value={this.state.usd}
              onChange={event => this.handleInputUsd(event)}
              style={{width:"100px"}}
            />
          PLN
        </div>
        <div className="col-md-4 text-center">
          1 GBP =
            <input
              className="form-control d-inline mx-2 text-center"
              value={this.state.bpg}
              onChange={event => this.handleInputGbp(event)}
              style={{width:"100px"}}
            />
          PLN
        </div>
      </div>
    )
  }
}

export default CurrencyInput;
