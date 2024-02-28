import logo from "@/assets/images/logo-devlinks-large.svg";
import LinkIcon from "@/assets/images/icon-link.svg";
import ProfileIcon from "@/assets/images/icon-profile-details-header.svg";

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function PreviewNavigatorDesktop() {
  return (
    <nav className=" bg-white p-3 m-3 box-border flex justify-between items-cente absolute top-3 right-0 w-full">
      <Link href="/user">
        <Button className=" text-purple-dark border border-solid border-purple-dark">
          Back to Editor
        </Button>
      </Link>

      <Link href="/preview/1">
        <Button className=" text-purple-dark border border-solid border-purple-dark">
          Preview
        </Button>
      </Link>
    </nav>
  );
}
