import axios, { AxiosError } from "axios";
import { paymentEndPoints } from "../constants/Enums";

interface IWaveConsumptionResponse {
  success: boolean;
  statusCode: number;
  error?: string;
  data: {
    waveId: string;
    availableTickets: number;
  };
}
interface IWaveValidationReturn {
  success: boolean;
  waveId: string;
  availableTickets?: number;
  error?: string;
}

const validateWaveConsumption = async ({
  waveId,
}: {
  waveId: string;
}): Promise<IWaveValidationReturn> => {
  console.log(waveId);

  try {
    const requestBody = {
      waveId: waveId,
      operationId: 1,
    };
    const response = await axios.post<IWaveConsumptionResponse>(
      paymentEndPoints.OPERATIONS,
      requestBody
    );
    if (response.data.success) {
      return {
        success: true,
        waveId: response.data.data.waveId,
        availableTickets: response.data.data.availableTickets,
      };
    }
    return {
      success: false,
      waveId: response.data.data.waveId,
      error: response.data.error,
    };
  } catch (error: AxiosError | any) {
    console.error("Error validating wave consumption :", error);
    return {
      success: false,
      waveId: waveId,
      error: error?.message || "Error validating wave consumption",
    };
  }
};

export default validateWaveConsumption;
