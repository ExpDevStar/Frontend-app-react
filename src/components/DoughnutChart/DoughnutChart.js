import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

import './DoughnutChart.scss';

class DoughnutChart extends Component {
    render(){
        let data = this.getData();
        return (
            <div className="doughnut-container">
                <div className="doughnut-wrapper">
                    <Doughnut
                        data={data}
                        width={300}
                        height={300}
                        options={this.getOptions()}
                        legend={this.getLegend()}
                    />
                </div>
            </div>
        );
    }


    getData(){
        return {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: Object.values(this.getLabelsAndColors())
            }],
            labels: Object.keys(this.getLabelsAndColors())
        };
    }

    getOptions(){
        return {
            responsive: true,
            maintainAspectRatio: true
        }
    }

    getLegend(){
        return {
            position: 'bottom'
        };
    }

    getLabelsAndColors() {
        return {
            'Red': '#FF6384',
            'Blue': '#36A2EB',
            'Yellow': '#FFCE56'
        }
    }
}

export default DoughnutChart;
