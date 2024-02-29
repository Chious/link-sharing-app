import UserForm from '@/components/user/form/user-form';
import UserPreview from '@/components/user/user-preview';

export default function UserPageLink() {
  return (
    <main
      className=' box-border flex w-full gap-3 p-3'
      style={{ height: '86vh' }}
    >
      <UserPreview />
      <UserForm />
    </main>
  );
}
