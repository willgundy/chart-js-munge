/* eslint-disable no-undef */
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

function makeAverageObject(data, groupField, averageField) {
    return data.reduce((acc, curr) => {
        const age = curr[groupField];
        const coolFactor = curr[averageField];
        
        switch (true) {
            case (age <= 10):
                acc['0-10'] = ((acc['0-10'] ? acc['0-10'] : 0) + coolFactor) / 2;
                break;
            case (age <= 20):
                acc['11-20'] = ((acc['11-20'] ? acc['11-20'] : 0) + coolFactor) / 2;
                break;
            case (age <= 30):
                acc['21-30'] = ((acc['21-30'] ? acc['21-30'] : 0) + coolFactor) / 2;
                break;
            case (age <= 40):
                acc['31-40'] = ((acc['31-40'] ? acc['31-40'] : 0) + coolFactor) / 2;
                break;
            case (age <= 50):
                acc['41-50'] = ((acc['41-50'] ? acc['41-50'] : 0) + coolFactor) / 2;
                break;
            case (age <= 60):
                acc['51-60'] = ((acc['51-60'] ? acc['51-60'] : 0) + coolFactor) / 2;
                break;
            case (age <= 70):
                acc['61-70'] = ((acc['61-70'] ? acc['61-70'] : 0) + coolFactor) / 2;
                break;
            case (age <= 80):
                acc['70+'] = ((acc['70+'] ? acc['70+'] : 0) + coolFactor) / 2;
                break;
            default:
                acc['misc'] = ((acc['misc'] ? acc['misc'] : 0) + coolFactor) / 2;
                break;
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

new Chart(
    document.getElementById('myBarChart'),
    barChartConfig
);


// Line chart showing number of customers by each cool factor.

const coolFactorCount = makeCountObject(customerData, 'cool_factor');

const data = {
    labels: Object.keys(coolFactorCount),
    datasets: [{
        label: 'Cool Factor',
        data: Object.values(coolFactorCount),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const lineChartConfig = {
    type: 'line',
    data: data,
};

new Chart(
    document.getElementById('myLineChart'),
    lineChartConfig
);


// Pie chart showing number of customers by each gender. Make sure you have enough colors in your chart data to make the pie chart readable.

const genderCount = makeCountObject(customerData, 'gender');

const pieData = {
    labels: Object.keys(genderCount),
    datasets: [{
        label: 'Genders',
        data: Object.values(genderCount),
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(10, 203, 207)'
        ],
        hoverOffset: 4
    }]
};

const pieConfig = {
    type: 'doughnut',
    data: pieData,
};

new Chart(
    document.getElementById('myPieChart'),
    pieConfig
);




// Stretch goals
// Bar chart showing average cool factor of each age demographic (0 - 10, 11 - 20, 21 - 30, etc)
const coolFactorByAge = makeAverageObject(customerData, 'age', 'cool_factor');

const coolFactorBarChartData = {
    labels: Object.keys(coolFactorByAge),
    datasets: [{
        label: 'Average Cool Factor By Age Range',
        data: Object.values(coolFactorByAge),
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

const secondBarChartConfig = {
    type: 'bar',
    data: coolFactorBarChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

new Chart(
    document.getElementById('mySecondBarChart'),
    secondBarChartConfig
);

// Line chart showing most frequent "purchase frequency" for each decade (1920 - 1929, 1930 - 1939, 1940 - 1949, etc)

const datasets = [];
const keyValueArray = Object.keys(makeCountObject(customerData, 'purchase_frequency'));
let startYear = 1960;

while (startYear <= 2020) {
    const countData = [];
    for (let values of keyValueArray) {
        const dataFiltered = customerData.filter(customer => customer.customer_since <= startYear && customer.purchase_frequency === values);
        countData.push(dataFiltered.length);
    }

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const dataset = {
        label: `Dataset for ${startYear}-${startYear + 10}`,
        data: countData,
        fill: false,
        borderColor: `#${randomColor}`,
        tension: 0.1
    };

    startYear = startYear + 10;

    datasets.push(dataset);
}

console.log(datasets);

const mySecondLineChartData = {
    labels: keyValueArray,
    datasets: datasets
};

const secondlineChartConfig = {
    type: 'line',
    data: mySecondLineChartData,
};

new Chart(
    document.getElementById('mySecondLineChart'),
    secondlineChartConfig
);

// Line chart with two datasets: age of the oldest customer from each decade (1920 - 1929, 1930 - 1939, 1940 - 1949, etc), and cool factor of the "coolest" customer from each decade (1920 - 1929, 1930 - 1939, 1940 - 1949, etc)

const lineChartDataset = [];
const ageData = [];
let startYearTwo = 1960;

while (startYearTwo <= 2020) {
    const dataFiltered = customerData.filter(customer => customer.customer_since <= startYearTwo).map(data => data.age);

    const maxAge = Object.values(dataFiltered);

    console.log(maxAge);

    startYearTwo = startYearTwo + 10;

    ageData.push(maxAge);
}

console.log(customerData.filter(customer => customer.customer_since <= 1960));

const myThirdLineChartData = {
    labels: keyValueArray,
    datasets: lineChartDataset
};

const thirdlineChartConfig = {
    type: 'line',
    data: myThirdLineChartData,
};

// new Chart(
//     document.getElementById('myThirdLineChart'),
//     thirdlineChartConfig
// );