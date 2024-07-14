// eslint-disable-next-line no-undef
const config = require('../config');

test('check response status code for deleting a kit', async () => {
    let actualStatus;
    try {
        // Make DELETE request
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Log response status
        console.log("Response Status:", response.status);

        // Check response status
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});

test('check that the response body contains the expected data for deleting a kit', async () => {
    let responseData;
    try {
        // Make DELETE request
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
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