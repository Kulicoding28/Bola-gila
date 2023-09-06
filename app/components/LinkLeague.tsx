import Link from "next/link";
import Image from "next/image";
import React from "react";

type linkProps = {
  href: string;
  name: string;
  src: string;
};

const LinkLeague = ({ href, name, src }: linkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center py-2 px-2 rounded-md hover:bg-[rgb(54,63,78)]"
    >
      <Image src={src} alt={name} width={30} height={30} />
      <h3 className="ml-4 text-xs md:text-xl">{name}</h3>
    </Link>
  );
};

export default LinkLeague;
