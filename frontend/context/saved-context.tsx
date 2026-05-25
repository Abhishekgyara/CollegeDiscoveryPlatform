"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { College } from "@/types/college";

type SavedContextType = {
  savedItems: College[];

  addToSaved: (college: College) => void;

  removeFromSaved: (
    collegeId: number
  ) => void;
};

const SavedContext =
  createContext<SavedContextType | null>(
    null
  );

export function SavedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [savedItems, setSavedItems] =
    useState<College[]>([]);

  // Load localStorage
  useEffect(() => {
    const stored = localStorage.getItem(
      "saved-colleges"
    );

    if (stored) {
      setSavedItems(JSON.parse(stored));
    }
  }, []);

  // Save localStorage
  useEffect(() => {
    localStorage.setItem(
      "saved-colleges",
      JSON.stringify(savedItems)
    );
  }, [savedItems]);

  const addToSaved = (college: College) => {
    const exists = savedItems.find(
      (item) => item.id === college.id
    );

    if (exists) return;

    setSavedItems([
      ...savedItems,
      college,
    ]);
  };

  const removeFromSaved = (
    collegeId: number
  ) => {
    setSavedItems(
      savedItems.filter(
        (item) => item.id !== collegeId
      )
    );
  };

  return (
    <SavedContext.Provider
      value={{
        savedItems,
        addToSaved,
        removeFromSaved,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const context =
    useContext(SavedContext);

  if (!context) {
    throw new Error(
      "useSaved must be used inside SavedProvider"
    );
  }

  return context;
}