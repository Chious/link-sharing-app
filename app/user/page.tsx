import UserForm from "@/components/user/user-form";
import UserPreview from "@/components/user/user-preview";

export default function UserPage() {
  return (
    <main
      className=" w-full flex gap-3 box-border p-3"
      style={{ height: "86vh" }}
    >
      <UserPreview />
      <UserForm />
    </main>
  );
}
