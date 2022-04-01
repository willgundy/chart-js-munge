/* eslint-disable no-undef */
// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

export function makeCountObject(data, countField) {
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

export function makeAverageObject(data, groupField, averageField) {
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
            case (age > 70):
                acc['70+'] = ((acc['70+'] ? acc['70+'] : 0) + coolFactor) / 2;
                break;
            default:
                acc['weird age'] = ((acc['weird age'] ? acc['weird age'] : 0) + coolFactor) / 2;
                break;
        }
        
        return acc;

    }, { });
}

export function getMaxValue(array, maxField, groupingField, groupingMaxValue, groupingMinField) {
    const dataFiltered = array.filter(arr => arr[groupingField] <= groupingMaxValue && arr[groupingField] >= groupingMinField).map(data => data[maxField]);

    const maxValueArray = Object.values(dataFiltered);

    return Math.max(...maxValueArray);
}

export function getRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}