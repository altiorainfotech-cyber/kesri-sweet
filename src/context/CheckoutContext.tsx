"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  MutableRefObject,
} from "react";

export interface ContactInfo {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface CheckoutContextType {
  contactInfo: ContactInfo;
  setContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>;
  cardRef: MutableRefObject<SquareCard | null>;
  isProcessing: boolean;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  squareReady: boolean;
  setSquareReady: React.Dispatch<React.SetStateAction<boolean>>;
  locationId: string;
  setLocationId: React.Dispatch<React.SetStateAction<string>>;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [squareReady, setSquareReady] = useState(false);
  const [locationId, setLocationId] = useState("");
  const cardRef = useRef<SquareCard | null>(null);

  return (
    <CheckoutContext.Provider
      value={{
        contactInfo,
        setContactInfo,
        cardRef,
        isProcessing,
        setIsProcessing,
        note,
        setNote,
        error,
        setError,
        squareReady,
        setSquareReady,
        locationId,
        setLocationId,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context)
    throw new Error("useCheckout must be used within CheckoutProvider");
  return context;
}
