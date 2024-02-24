'use client';

import { useEffect, useState } from 'react';
import { TbCheck, TbZzz } from 'react-icons/tb';
import { useChecklistContext } from '@/contexts/checklist-context';
import staticTrainings from './static/trainings.json';

export default function Checklist() {
  const { trainingDay } = useChecklistContext();

  const [trainings, setTrainings] = useState(staticTrainings.data);

  useEffect(() => {
    // fetch based on the current day
    // use cache logic checking if both options have already been fetched
    async function getTrainingByDay(day: 'Today' | 'Yesterday') {
      return staticTrainings;
    }

    getTrainingByDay(trainingDay).then((result) => {
      setTrainings(result.data);
    });
  }, [trainingDay]);

  return (
    <ul>
      {trainings.map((training) => (
        <li key={training.id}>
          <div className='group my-2 p-2 min-h-9 flex items-center rounded-md border truncate cursor-pointer relative active:bg-black hover:bg-black active:border-black hover:border-black'>
            <div className='p-1 rounded-md border group-hover:border-black absolute right-2 bg-slate-100'>
              {training.documented ? <TbCheck /> : <TbZzz />}
            </div>
            <h4 className='text-sm group-hover:text-white group-active:text-white'>
              {training.name}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  );
}