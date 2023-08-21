// links
import Link from "next/link";

// icons
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiSkypeLine,
  RiFacebookLine,
  RiInstagramLine,
} from "react-icons/ri";

export default function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href={"https://github.com/joemar-ceneza"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/joemarceneza/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
      <Link
        href={"https://join.skype.com/invite/bdlMGI9oFKvb"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiSkypeLine />
      </Link>
      <Link
        href={"https://www.facebook.com/joe.ceneza/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.instagram.com/joemar.ceneza/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  );
}
