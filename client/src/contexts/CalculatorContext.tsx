/**
 * CalculatorContext - shares calculator data with ContactForm
 */
import { createContext, useContext, ReactNode, useState } from "react";

export type CarSize = "small" | "medium" | "large";
export type Service = "exterior" | "interior" | "full" | "correction" | "ceramic";
export type DirtLevel = "low" | "medium" | "high";
export type InteriorType = "fabric" | "leather" | "alcantara";
export type Extra = "petHair" | "ozone" | "impregnation" | "engine";

export interface CalculatorData {
  carSize: CarSize;
  service: Service;
  dirtLevel: DirtLevel;
  interiorType: InteriorType;
  extras: Extra[];
  totalPrice: number;
}

interface CalculatorContextType {
  calculatorData: CalculatorData | null;
  setCalculatorData: (data: CalculatorData) => void;
  clearCalculatorData: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [calculatorData, setCalculatorDataState] = useState<CalculatorData | null>(null);

  const setCalculatorData = (data: CalculatorData) => {
    setCalculatorDataState(data);
  };

  const clearCalculatorData = () => {
    setCalculatorDataState(null);
  };

  return (
    <CalculatorContext.Provider
      value={{
        calculatorData,
        setCalculatorData,
        clearCalculatorData,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
}
