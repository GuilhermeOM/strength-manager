import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { ChecklistDayButton } from '@/components/checklist';
import { checklistContext } from '@/contexts/checklist-context';

describe('ChecklistDayButton', () => {
  it('Validates if it renders "Today" when trainingDay is equal Today', () => {
    const { getByText } = render(
      <checklistContext.Provider
        value={{ trainingDay: 'Today', setTrainingDay: () => {} }}
      >
        <ChecklistDayButton />
      </checklistContext.Provider>
    );

    expect(getByText('Today')).toBeVisible();
    expect(getByText('Today')).toBeInTheDocument();
  });

  it('Validates if it renders "Yesterday" when trainingDay is equal Yesterday', () => {
    const { getByText } = render(
      <checklistContext.Provider
        value={{ trainingDay: 'Yesterday', setTrainingDay: () => {} }}
      >
        <ChecklistDayButton />
      </checklistContext.Provider>
    );

    expect(getByText('Yesterday')).toBeVisible();
    expect(getByText('Yesterday')).toBeInTheDocument();
  });
});
