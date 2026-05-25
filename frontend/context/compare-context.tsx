"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { College } from "@/types/college";

type CompareContextType = {
  compareItems: College[];

  addToCompare: (college: College) => void;

  removeFromCompare: (
    collegeId: number
  ) => void;
};

const CompareContext =
  createContext<CompareContextType | null>(
    null
  );

export function CompareProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [compareItems, setCompareItems] =
    useState<College[]>([]);

  // Load localStorage
  useEffect(() => {
    const stored = localStorage.getItem(
      "compare-colleges"
    );

    if (stored) {
      setCompareItems(JSON.parse(stored));
    }
  }, []);

  // Save localStorage
  useEffect(() => {
    localStorage.setItem(
      "compare-colleges",
      JSON.stringify(compareItems)
    );
  }, [compareItems]);

  const addToCompare = (college: College) => {
    const exists = compareItems.find(
      (item) => item.id === college.id
    );

    if (exists) return;

    if (compareItems.length >= 3) {
      alert(
        "You can compare maximum 3 colleges"
      );
      return;
    }

    setCompareItems([
      ...compareItems,
      college,
    ]);
  };

  const removeFromCompare = (
    collegeId: number
  ) => {
    setCompareItems(
      compareItems.filter(
        (item) => item.id !== collegeId
      )
    );
  };

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context =
    useContext(CompareContext);

  if (!context) {
    throw new Error(
      "useCompare must be used inside CompareProvider"
    );
  }

  return context;
}