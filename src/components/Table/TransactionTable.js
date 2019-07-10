import React, { Component} from 'react';
import './Table.scss';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import ReactSearchBox from 'react-search-box'

class TransactionTable extends Component {
    render(){

    const data = [{
            date: '9/12/18',
            investment: 'Investment name',
            description: 'Description input',
            amount: 32.223,
            amountcad: 450,
        }, {
            date: '9/12/18',
            investment: 'Investment name',
            description: 'Description input',
            amount: 32.223,
            amountcad: 450,
        }, {
            date: '9/12/18',
            investment: 'Investment name',
            description: 'Description input',
            amount: 32.223,
            amountcad: 450,
        }, {
            date: '9/12/18',
            investment: 'Investment name',
            description: 'Description input',
            amount: 32.223,
            amountcad: 450,
        },{
            date: '9/12/18',
            investment: 'Investment name',
            description: 'Description input',
            amount: 32.223,
            amountcad: 450,
     },{
         date: '9/12/18',
         investment: 'Investment name',
         description: 'Description input',
         amount: 32.223,
         amountcad: 450,
     },{
         date: '9/12/18',
         investment: 'Investment name',
         description: 'Description input',
         amount: 32.223,
         amountcad: 450,
     },{
         date: '9/12/18',
         investment: 'Investment name',
         description: 'Description input',
         amount: 32.223,
         amountcad: 450,
     },{
         date: '9/12/18',
         investment: 'Investment name',
         description: 'Description input',
         amount: 32.223,
         amountcad: 450,
     },{
         date: '9/12/18',
         investment: 'Investment name',
         description: 'Description input',
         amount: 32.223,
         amountcad: 450,
     }]
     const columns = [{
         Header: 'Date',
       accessor: 'date', // String-based value accessors!

    },{
        Header: 'Investment',
       accessor: 'investment',

    },{
        Header: 'Description',
       accessor: 'description',
   },{
       Header: 'Amount',
      accessor: 'amount',
  },{
       id: 'amountcad',
       Header: 'Amount in CAD',
     accessor: (data) => {
         return '$' + data.amountcad;
     },


       }]
       return(
            <div className="transactiontable-container">
                <div className="reacttable-container">
                    <div className="transaction-container">
                        <div className="table-title">Transaction History</div>
                        <div className="table-filters">
                            <div>
                                <select>
                                    <option value='last_30'>Show 10 entries </option>
                                </select>
                            </div>
                            <div className="search-container">
                                <ReactSearchBox
                                    placeholder="search"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <ReactTable className="-striped"
                        data={data}
                        columns={columns}
                        pageSize={data.length}
                        showPagination={false}
                        />
                    </div>
                </div>
            </div>
            );
        }
}
export default TransactionTable;
