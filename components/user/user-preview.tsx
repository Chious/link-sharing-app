import Image from "next/image";
import PhoneIcon from "@/assets/images/illustration-phone-mockup.svg";

export default function UserPreview() {
  return (
    <section className=" bg-white h-full p-10 grow-0 flex justify-center items-center">
      <Image src={PhoneIcon} alt="phone" height={500} />
    </section>
  );
}
