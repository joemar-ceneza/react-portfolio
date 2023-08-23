// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

export default function Header() {
  return (
    <header className="absolute w-full flex items-center px-0 xl:px-0 xl:h-[100px] z-30">
      <div className="container mx-auto p-0">
        <div className="flex flex-row justify-between items-center gap-x-6">
          {/* py-8 */}
          {/* logo */}
          <Link href={"/"}>
            <div className="relative w-16 xl:w-[100px]">
              <Image
                src={"/logo.png"}
                width={100}
                height={100}
                alt=""
                priority={true}
              />
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
}
