import logo from "@/assets/images/logo-devlinks-large.svg";
import LinkIcon from "@/assets/images/icon-link.svg";
import ProfileIcon from "@/assets/images/icon-profile-details-header.svg";

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function UserNavigatorDesktop() {
  return (
    <nav className=" bg-white p-3 m-3 box-border flex justify-between items-center">
      <Image src={logo} alt="logo" />

      <div className="btn-group flex gap-3">
        <Button className=" text-gray p-2 flex justify-center items-center gap-3">
          <Image src={LinkIcon} alt="link icon" />
          Links
        </Button>
        <Button className=" text-gray p-2 flex justify-center items-center gap-3">
          <Image src={ProfileIcon} alt="profile icon" />
          Profile Details
        </Button>
      </div>

      <Link href="/preview/1">
        <Button className=" text-purple-dark border border-solid border-purple-dark">
          Preview
        </Button>
      </Link>
    </nav>
  );
}
