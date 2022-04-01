// import functions and grab DOM elements
import { customerData } from './data.js';

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function makeCountObject(data, countField) {
    return data.reduce((acc, curr) => {
        const value = curr[countField];
        if (acc[value]) {
            acc[value]++;
        } else {
            acc[value] = 1;
        }
        return acc;
    }, { });
}

// Bar chart showing number of customers by each purchase frequency.
const purchaseFrequencyCount = makeCountObject(customerData, 'purchase_frequency');

const barChartData = {
    labels: Object.keys(purchaseFrequencyCount),
    datasets: [{
        label: 'Purchase Frequencies',
        data: Object.values(purchaseFrequencyCount),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(10, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(10, 203, 207)'
        ],
        borderWidth: 1
    }]
};

const barChartConfig = {
    type: 'bar',
    data: barChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

const purchaseFrequencyBarChart = new Chart(
    document.getElementById('myBarChart'),
    barChartConfig
);


// Line chart showing number of customers by each cool factor.

const coolFactorCount = makeCountObject(customerData, 'cool_factor');

console.log(coolFactorCount);


// Pie chart showing number of customers by each gender. Make sure you have enough colors in your chart data to make the pie chart readable.





// Stretch goals
// Bar chart showing average cool factor of each age demographic (0 - 10, 11 - 20, 21 - 30, etc)
// Line chart showing most frequent "purchase frequency" for each decade (1920 - 1929, 1930 - 1939, 1940 - 1949, etc)
// Line chart with two datasets: age of the oldest customer from each decade (1920 - 1929, 1930 - 1939, 1940 - 1949, etc), and cool factor of the "coolest" customer from each decade (1920 - 1929, 1930 - 1939, 1940 - 1949, etc)