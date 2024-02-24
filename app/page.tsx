import Container from '@/components/container';
import SectionHeading from '@/components/section-heading';
import ChecklistProvider from '@/contexts/checklist-context';
import { Checklist, ChecklistDayButton } from '@/components/checklist';

export default function Home() {
  return (
    <div className='pt-20'>
      <main className='[&_section]:my-3 [&_section]:w-full'>
        <Container>
          <section>
            <ChecklistProvider>
              <SectionHeading title='Checklist' sub='Status of your training'>
                <ChecklistDayButton />
              </SectionHeading>

              <Checklist />
            </ChecklistProvider>
          </section>

          <section>
            <SectionHeading
              title='Chest & Shoulder'
              sub='Current periodization'
            />
          </section>
        </Container>
      </main>
    </div>
  );
}
