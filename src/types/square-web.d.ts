interface SquarePaymentRequest {
  update(options: { total: { amount: string; label: string } }): void;
}

interface SquarePayments {
  card(): Promise<SquareCard>;
  googlePay(paymentRequest: SquarePaymentRequest): Promise<SquareGooglePay>;
  paymentRequest(options: {
    countryCode: string;
    currencyCode: string;
    total: { amount: string; label: string };
  }): SquarePaymentRequest;
}

interface SquareCard {
  attach(selector: string): Promise<void>;
  tokenize(): Promise<SquareTokenResult>;
  destroy(): Promise<void>;
}

interface SquareGooglePay {
  attach(selector: string): Promise<void>;
  tokenize(): Promise<SquareTokenResult>;
  destroy(): Promise<void>;
}

interface SquareTokenResult {
  status: string;
  token?: string;
  errors?: Array<{ message: string }>;
}

interface SquareWebSDK {
  payments(applicationId: string, locationId: string): SquarePayments;
}

interface Window {
  Square?: SquareWebSDK;
}
