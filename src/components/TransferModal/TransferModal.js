import React, { Component } from 'react';
import './TransferModal.scss';


class TransferModal extends Component {
  render(){
    return (
        <div className="transfer-container">
            <div className="transfer-form-wrapper">
                <div className="form">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="userName" placeholder="To:Username"></input>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option value="investment" selected>Investment</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" id="amount" placeholder="Amount"></input>
                        </div>
                        <div>
                            <button type="submit" name="transfer" className="btn btn-info transfer-btn">Transfer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}


export default TransferModal;
