interface SquarePayments {
  card(): Promise<SquareCard>;
}

interface SquareCard {
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
