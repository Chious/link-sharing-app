import PreviewCard from '@/components/preview/preview-card';
import PreviewNavigatorDesktop from '@/components/preview/preview-navigator';

export default function PreviewPage() {
  return (
    <>
      <div className='background h-48 w-full rounded-b-3xl bg-purple-dark' />
      <PreviewNavigatorDesktop />
      <PreviewCard />
    </>
  );
}
