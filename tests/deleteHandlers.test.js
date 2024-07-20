// eslint-disable-next-line no-undef
const config = require('../config');

let newKitId; // Variable to store the newly created kit ID

// Function to create a new kit before running the delete test
beforeAll(async () => {
    const requestBody = {
        name: "My new kit", // Name of the kit to be created
        cardId: 1  // Assuming you have a cardId to associate with the kit
    };

    const headers = {
        'Content-Type': 'application/json'
    };

/*// Optionally include the authorization token if necessary
    const authToken = 'yourAuthToken'; // Replace 'yourAuthToken' with your actual token
    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
    }*/

    const response = await fetch(`${config.API_URL}/api/v1/kits`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create kit: ${response.statusText}, Response: ${errorText}`);
    }

    const data = await response.json();
    newKitId = data.id; // Save the ID of the newly created kit for deletion test
    console.log("Created Kit ID:", newKitId);
});

// Test to check response status code for deleting a kit
test('check response status code for deleting a kit', async () => {
    let actualStatus;
    try {
        // Make DELETE request using the newKitId
        const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`, {
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
    expect(actualStatus).toBe(200); // Expect the status to be 200 OK after deletion
});




// Test to check that the response body contains the expected data for deleting a kit
test('check that the response body contains the expected data for deleting a kit', async () => {
    let responseData;

    try {
        // First, create a new kit
        const createResponse = await fetch(`${config.API_URL}/api/v1/kits`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Test Kit', // Required parameter
                cardId: 1 // Optional parameter, adjust as needed
            })
        });

        const createText = await createResponse.text();
        console.log("Create Response Status:", createResponse.status);
        console.log("Create Response Text:", createText);

        if (!createResponse.ok) {
            throw new Error(`Request failed with status ${createResponse.status}: ${createText}`);
        }

        const createData = JSON.parse(createText);
        createdKitId = createData.id; // Assuming the response contains the ID of the created kit

        // Now, make DELETE request
        const response = await fetch(`${config.API_URL}/api/v1/kits/${createdKitId}`, {
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
