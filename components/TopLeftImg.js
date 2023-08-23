// next image
import Image from "next/image";

export default function TopLeftImg() {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-20 xxxs:opacity-50">
      <Image src="/top-left-img.png" width={350} height={350} alt="" />
    </div>
  );
}
