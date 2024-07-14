const config = require('../config');

test('check delivery status code', async () => {
    let actualStatus;

    try {
        // Define request payload
        const requestBody = {
            products: [
                { id: 1, quantity: 3 },
                { id: 4, quantity: 1 },
                { id: 9, quantity: 3 }
            ],
            deliveryTime: 7
        };

        // Make POST request
        const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        // Log response status
        actualStatus = response.status;
        console.log("Response Status:", actualStatus);

        // Check response status
        expect(actualStatus).toBe(200);
    } catch (error) {
        console.error(error);
    }
});

test('check delivery cost', async () => {
    let responseData;

    try {
        // Define request payload
        const requestBody = {
            products: [
                { id: 1, quantity: 3 },
                { id: 4, quantity: 1 },
                { id: 9, quantity: 3 }
            ],
            deliveryTime: 7
        };

        // Make POST request
        const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
            method: 'POST',
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
        "Fast Delivery": { "deliveryPrice": 0 },
        "Speedy": { "deliveryPrice": 99 },
        "Food Service": { "deliveryPrice": 0 },
        "Order and Go": { "deliveryPrice": 99 }
    };

    // Check response body data
    expect(responseData).toEqual(expectedData);
});
