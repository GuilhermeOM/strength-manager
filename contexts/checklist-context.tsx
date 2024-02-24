'use client';

import { createContext, useContext, useState } from 'react';

interface ChecklistProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface ChecklistContext {
  trainingDay: 'Today' | 'Yesterday';
  setTrainingDay: React.Dispatch<React.SetStateAction<'Today' | 'Yesterday'>>;
}

export const checklistContext = createContext<ChecklistContext>({
  trainingDay: 'Today',
  setTrainingDay: () => {},
});

export default function ChecklistProvider({
  children,
}: ChecklistProviderProps) {
  const [trainingDay, setTrainingDay] = useState<'Today' | 'Yesterday'>(
    'Today'
  );

  return (
    <checklistContext.Provider value={{ trainingDay, setTrainingDay }}>
      {children}
    </checklistContext.Provider>
  );
}

export function useChecklistContext() {
  const context = useContext(checklistContext);
  return context;
}
