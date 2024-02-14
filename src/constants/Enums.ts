export const EndPoints = {
  getData:
    "https://p7gqmpt7xeqhcwj4bpbeql4veq0genqx.lambda-url.us-east-2.on.aws",
};

export const EventEndPoints =
  "https://l77jmcjaqqwf7gzd44mjquxpoy0josbx.lambda-url.us-east-2.on.aws/";

export const paymentWebhook =
  "https://e7uygpkmygbskwvpcybczds75q0elbhj.lambda-url.us-east-2.on.aws/";

export const dbStorage =
  "https://ticketingsystemadmina29b1f146cd8476b9f9aefcf325132756-dev.s3.us-east-2.amazonaws.com/public/";

export enum paymentEndPoints {
  OPERATIONS = "https://crbtmornzj4nrckuxxad6i3fja0jdmsa.lambda-url.us-east-2.on.aws/",
}
export enum BookingStatus {
  APPROVED = "approved",
  REGJECTED = "rejected",
  PENDING = "pending",
  PARTIALLY_APPROVED = "partially approved",
  NOT_REGISTERED = "not registered",
}
