import RegisterForm from "@/components/register/register-form";
import logo from "@/assets/images/logo-devlinks-large.svg";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <Image src={logo} alt="logo" />
      <RegisterForm />
    </main>
  );
}
