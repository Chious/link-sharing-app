import Image from "next/image";
import PhoneIcon from "@/assets/images/illustration-empty.svg";
import { Button, Divider } from "antd";

export default function UserForm() {
  return (
    <section className=" bg-white h-full pt-9 pb-8 p-6 grow flex flex-col items-end">
      <div className="form-main flex flex-col gap-2">
        <h1>Customize your links</h1>
        <h3>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </h3>
        <Button className="w-full h-10 bg-purple-light border border-solid border-purple-dark text-purple-dark">
          Add new link
        </Button>
        <div className=" bg-white-light p-6 box-border m-6 flex flex-col items-center justify-center gap-3">
          <Image src={PhoneIcon} alt="phone" height={150} />
          <h1>{`Let's get you started`}</h1>
          <h3 className=" leading-6 w-4/5 text-center text-gray">{`Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!`}</h3>
        </div>
      </div>
      <div className="divider border border-solid border-white-light w-full m-3" />
      <Button>Save</Button>
    </section>
  );
}
