// next image
import Image from "next/image";

export default function Avatar() {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/profile-picture.png"}
        width={737}
        height={750}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
}
