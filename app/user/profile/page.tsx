import UserProfileForm from '@/components/user/form/user-form-profile';
import UserPreview from '@/components/user/user-preview';

export default function UserPage() {
  return (
    <main
      className=' box-border flex w-full gap-3 p-3'
      style={{ height: '86vh' }}
    >
      <UserPreview />
      <UserProfileForm />
    </main>
  );
}
