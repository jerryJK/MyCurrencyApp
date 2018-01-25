import React, {Component} from 'react';

class TransactionList extends Component {

  handleDeleteTransaction = (e,id) => {
    this.props.deleteTransaction(id);
  }

  render() {
    return (
        <div className="row">
            <ul className="list-group col-md-8 mx-auto py-3">
                {this.props.transactions.map((elem,i) => {
                   return (
                     <li className="list-group-item d-flex justify-content-between align-items-center" key={elem.id}>
                         <div className="list-item d-inline-block">
                              {elem.value} {elem.currency} = {elem.valPln} PLN
                         </div>
                         <button
                           className="btn btn-danger btn-sm d-inline-block float-right"
                           onClick={(e) =>this.handleDeleteTransaction(e,elem.id)}>
                           delete
                         </button>
                     </li>
                   )
                })
                }
            </ul>
        </div>
    )
  }
}

export default TransactionList;
