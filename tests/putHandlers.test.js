// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200 for updating product price', async () => {
    let actualStatus;
    try {
        // Define request payload
        const requestBody = {
            price: 175
        };

        // Make PUT request
        const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        // Check response status
        actualStatus = response.status;
		console.log(actualStatus);
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});

test('check that the response body contains the expected data for updating product price', async () => {
    let responseData;
    try {
        // Define request payload
        const requestBody = {
            price: 175
        };

        // Make PUT request
        const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        // Log response status and text
        console.log("Response Status:", response.status);
        const text = await response.text();
        console.log("Response Text:", text);

        if (response.ok) {
            responseData = JSON.parse(text);
        } else {
            throw new Error(`Request failed with status ${response.status}: ${text}`);
        }
    } catch (error) {
        console.error(error);
    }

    // Define expected response body
    const expectedData = {
        "ok": true
    };

    // Log response data
    console.log("Parsed Response Data:", responseData);

    // Check response body data
    expect(responseData).toEqual(expectedData);
});