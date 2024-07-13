const config = require('../config'); 

test('status should be 200', async () => {
    let actualStatus;
    try {
        // Make request
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        // Extract response code status
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});

test('check that the response body contains the expected data', async () => {
    let responseData;
    try {
        // Make request
        const response = await fetch(`${config.API_URL}/api/v1/couriers`);
        responseData = await response.json();
    } catch (error) {
        console.error(error);
    }
	console.log(responseData);
    // Define expected response body
   const expectedData = [
	{
		"name": "Order and Go",
		"workingHours": {
			"start": 8,
			"end": 22
		}
	},
	{
		"name": "Speedy",
		"workingHours": {
			"start": 8,
			"end": 22
		}
	},
	{
		"name": "Fast Delivery",
		"workingHours": {
			"start": 7,
			"end": 21
		}
	},
	{
		"name": "Food Service",
		"workingHours": {
			"start": 6,
			"end": 20
		}
	}
    ];
    // Check response body data
    expect(responseData).toEqual(expectedData);
});
