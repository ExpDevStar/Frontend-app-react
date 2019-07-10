import React, { Component} from 'react';
import './Table.scss';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class ChartTable extends Component {
    render(){
    const data = [{
        name: 'Clam Miner',
        age: 32.565,
        dollar: 435,
}, {
      name: 'Just-Dice',
      age: 29.445,
      dollar: 218,
  }, {
      name: 'Lending Bot',
      age: 45.222,
      dollar: 413,
 }, {
     name: 'Stocks',
     age: 23.567,
     dollar: 350,
 },{
     name: 'Gold',
     age: 19.532,
     dollar: 250,
 }]

  const columns = [{
    accessor: 'name', // String-based value accessors!

  }, {
    accessor: 'age',

}, {
    id: 'dollar',
  accessor: (data) => {
      return '$' + data.dollar;
  },


}]

    return(
        <div className="Charttable-container">
        <ReactTable className="-striped"
        data={data}
        columns={columns}
        pageSize={data.length}
        showPagination={false}


  />
  </div>
        );
    }
}
export default ChartTable;
