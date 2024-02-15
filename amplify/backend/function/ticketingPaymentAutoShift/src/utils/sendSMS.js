const { smsEndpoint } = require("../constants/enums");

async function sendSms(phone, message) {
  try {
    const requestBody = {
      phone: phone,
      message: message,
      conceptName: "anyware",
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    const response = await fetch(smsEndpoint, {
      ...options,
      body: JSON.stringify(requestBody),
    });
    console.log(requestBody);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
}

module.exports = sendSms;
