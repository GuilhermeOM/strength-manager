'use client';

import { useChecklistContext } from '@/contexts/checklist-context';

export default function ChecklistDayButton() {
  const { trainingDay, setTrainingDay } = useChecklistContext();

  function handleClick() {
    setTrainingDay((d) => (d === 'Today' ? 'Yesterday' : 'Today'));
  }

  return (
    <button
      className='py-1 px-3 rounded-md absolute right-0 top-0 bg-slate-200 hover:bg-slate-300 button-animation'
      onClick={handleClick}
    >
      <h4 className='text-xs'>{trainingDay}</h4>
    </button>
  );
}
