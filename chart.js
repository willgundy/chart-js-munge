import { makeCountObject, makeAverageObject, getMaxValue, getRandomColor } from './app.js';
import { customerData } from './data.js';

// 1. Bar chart showing number of customers by each purchase frequency.
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
        },
        plugins: {
            title: {
                display: true,
                text: 'Customer Count by Purchase Frequency',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 48
                }
            }
        }
    },
};

new Chart(
    document.getElementById('myBarChart'),
    barChartConfig
);


// 2. Line chart showing number of customers by each cool factor.

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
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Customer Count by Cool Factor',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 48
                }
            }
        }
    }
};

new Chart(
    document.getElementById('myLineChart'),
    lineChartConfig
);


// 3. Pie chart showing number of customers by each gender. Make sure you have enough colors in your chart data to make the pie chart readable.

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
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Customer Count by Gender',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 48
                }
            }
        }
    }
};

new Chart(
    document.getElementById('myPieChart'),
    pieConfig
);




// Stretch goals
// 4. Bar chart showing average cool factor of each age demographic (0 - 10, 11 - 20, 21 - 30, etc)
const coolFactorByAge = makeAverageObject(customerData, 'age', 'cool_factor');

console.log(coolFactorByAge);

const coolFactorBarChartData = {
    labels: Object.keys(coolFactorByAge),
    datasets: [{
        label: 'Cool Factor',
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
        plugins: {
            title: {
                display: true,
                text: 'Average Cool Factor per Age Demo',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 48
                }
            }
        }
    }
};

new Chart(
    document.getElementById('mySecondBarChart'),
    secondBarChartConfig
);

// 5. Line chart showing most frequent "purchase frequency" for each decade (1920 - 1929, 1930 - 1939, 1940 - 1949, etc)

const datasets = [];
const keyValueArray = Object.keys(makeCountObject(customerData, 'purchase_frequency'));
let startYear = 1950;

while (startYear < 2020) {
    const countData = [];
    for (let values of keyValueArray) {
        const dataFiltered = customerData.filter(customer => customer.customer_since >= startYear && customer.customer_since < startYear + 10 && customer.purchase_frequency === values);
        countData.push(dataFiltered.length);
    }

    const dataset = {
        label: `${startYear}-${startYear + 9}`,
        data: countData,
        fill: false,
        borderColor: `#${getRandomColor()}`,
        tension: 0.1
    };

    startYear = startYear + 10;

    datasets.push(dataset);
}

const mySecondLineChartData = {
    labels: keyValueArray,
    datasets: datasets
};

const secondlineChartConfig = {
    type: 'line',
    data: mySecondLineChartData,
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Purchase Frequency Count per Decade',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 48
                }
            }
        },
    }
};

new Chart(
    document.getElementById('mySecondLineChart'),
    secondlineChartConfig
);

// 6. Line chart with two datasets: age of the oldest customer from each decade (1920 - 1929, 1930 - 1939, 1940 - 1949, etc), and cool factor of the "coolest" customer from each decade (1920 - 1929, 1930 - 1939, 1940 - 1949, etc)

const lineChartDataset = [];
const ageData = [];
const coolFactorData = [];
const decadesKeyValueArray = [];
let startYearTwo = 1950;

while (startYearTwo < 2020) {
    const maxAge = getMaxValue(customerData, 'age', 'customer_since', startYearTwo + 9, startYearTwo);

    const maxCoolFactor = getMaxValue(customerData, 'cool_factor', 'customer_since', startYearTwo + 9, startYearTwo);

    ageData.push(maxAge);

    coolFactorData.push(maxCoolFactor);

    decadesKeyValueArray.push(`${startYearTwo} - ${startYearTwo + 9}`);

    startYearTwo = startYearTwo + 10;
}

const ageDataset = {
    label: 'Max Age',
    data: ageData,
    fill: false,
    borderColor: `#${getRandomColor()}`,
    tension: 0.1
};

const coolFactorDataset = {
    label: 'Max Cool Factor',
    data: coolFactorData,
    fill: false,
    borderColor: `#${getRandomColor()}`,
    tension: 0.1
};

lineChartDataset.push(ageDataset, coolFactorDataset);

const myThirdLineChartData = {
    labels: decadesKeyValueArray,
    datasets: lineChartDataset
};

const thirdlineChartConfig = {
    type: 'line',
    data: myThirdLineChartData,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Max Age and Cool Factor per Decade (w/ Animations!)',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 48
                }
            }
        },
        transitions: {
            show: {
                animations: {
                    x: {
                        from: 0
                    },
                    y: {
                        from: 0
                    }
                }
            },
            hide: {
                animations: {
                    x: {
                        to: 0
                    },
                    y: {
                        to: 0
                    }
                }
            }
        }
    }
};

new Chart(
    document.getElementById('myThirdLineChart'),
    thirdlineChartConfig
);