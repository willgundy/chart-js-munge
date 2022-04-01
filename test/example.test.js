// IMPORT MODULES under test here:
import { makeCountObject, makeAverageObject, getMaxValue } from '../app.js';
import { customerData } from '../data.js';

const test = QUnit.test;

test('create count object for purchase frequency values', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 	
    {
        'Daily': 142,
        'Monthly': 123,
        'Never': 123,
        'Often': 126,
        'Once': 107,
        'Seldom': 129,
        'Weekly': 122,
        'Yearly': 128
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCountObject(customerData, 'purchase_frequency');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('create count object for cool factor values', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 	
    {
        '1': 109,
        '10': 95,
        '2': 119,
        '3': 99,
        '4': 101,
        '5': 93,
        '6': 102,
        '7': 101,
        '8': 99,
        '9': 82
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCountObject(customerData, 'cool_factor');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('create count object for gender', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 	
    {
        'Agender': 17,
        'Bigender': 14,
        'Female': 457,
        'Genderfluid': 18,
        'Genderqueer': 11,
        'Male': 448,
        'Non-binary': 24,
        'Polygender': 11
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeCountObject(customerData, 'gender');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('create average object for coolFactor grouping by age cohort', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 	
    {
        '0-10': 6.773251052874826,
        '11-20': 5.047112382511841,
        '21-30': 5.125799223827057,
        '31-40': 5.341956307988969,
        '41-50': 6.726571391673454,
        '51-60': 6.152915669254151,
        '61-70': 4.71033722089512,
        '70+': 2.5488813957104677
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeAverageObject(customerData, 'age', 'cool_factor');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('create max age value array for each decade', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 24;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMaxValue(customerData, 'age', 'customer_since', 1959, 1950);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
