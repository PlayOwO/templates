import Image from "next/future/image";
import Link from "next/link";
import { SITE_META } from "../lib/constants";
import Logo from "../public/brand/uptapgame-logo.svg";
// import { useRouter } from "next/router";
export default function Footer(params) {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href={`/`}>About</Link>
          </li>
          <li>
            <Link href={`/`}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={`/`}>Terms of Use</Link>
          </li>
        </ul>
      </nav>
      {/* <Image className="footer-logo" src={Logo} alt={SITE_META.NAME} /> */}
      <Image
        className="footer-logo"
        src={Logo}
        // src={useRouter().basePath + `/brand/uptapgame-logo.svg`}
        alt={SITE_META.NAME}
      />
      <p>{`© ${new Date().getFullYear()} ${SITE_META.NAME}`}</p>
    </footer>
  );
}
