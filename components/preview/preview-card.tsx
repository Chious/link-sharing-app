import icon from "@/assets/images/favicon-32x32.png";
import { Button } from "antd";
import Image from "next/image";

export default function PreviewCard() {
  return (
    <section
      className="bg-white p-4 w-2/5 h-fit flex flex-col gap-5 items-center justify-center shadow-lg rounded-lg absolute top-36 pt-10 pb-10"
      style={{ right: "calc(50vw - 20%)" }}
    >
      <Image
        src={icon}
        alt="icon"
        height={80}
        className="border-2 border-solid border-purple-dark rounded-full"
      />
      <h1>Ben Wright</h1>
      <h3 className=" text-gray">ben@example.com</h3>
      <div className="link-group flex flex-col gap-3 w-full">
        <Button className="h-12 bg-black text-white">Github</Button>
        <Button className="h-12 bg-red text-white">Youtube</Button>
        <Button className="h-12 bg-blue-700 text-white">LinkedIn</Button>
      </div>
    </section>
  );
}
