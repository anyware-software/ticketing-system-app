const aws = require("aws-sdk");

aws.config.update({ region: "us-east-2" });
const ses = new aws.SES();

async function sendEmail({
  customerEmail,
  adminName,
  eventName,
  link,
  textContent,
  templateNamee,
  guestName,
}) {
  try {
    const templateData = {};
    templateData.customerEmail = customerEmail;
    templateData.adminName = adminName;
    templateData.eventName = eventName;
    templateData.link = link;
    templateData.textContent = textContent;
    templateData.guestName = guestName;
    const sourceMail = "info@anyware.software";
    const templateName = templateNamee;
    await ses
      .sendTemplatedEmail({
        Destination: {
          ToAddresses: [templateData.customerEmail],
        },
        Source: sourceMail,
        Template: templateName,
        TemplateData: JSON.stringify(templateData),
      })
      .promise();
    return { status: "done" };
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
}

module.exports = { sendEmail };
