//Import  fuctions next
import Link from "next/link";
//Import svg
import {LogoSvg} from "@/utils/svgIcons";
import {LogoSvgResponsive} from "@/utils/svgIcons";
//Import trasladate
import {useTranslations} from "next-intl";
//Import owl components
import SwitchLenguaje from "../swicthLenguaje/SwitchLenguaje";
export default function Nav() {
  const t = useTranslations("Header");
  return (
    <header className="container z-3 position-sticky top-0 bg-white animate-nav">
      <nav className="navbar navbar-expand-lg justify-content-between">
        <Link className="navbar-brand d-content " href="#">
          <LogoSvg />
        </Link>
        <Link className="d-lg-none" href="#">
          <LogoSvgResponsive />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item d-content">
              <Link href={"#"} className="btn btn-primary" role="button">
                {t("button")}
              </Link>
            </li>
            <li className="nav-item d-lg-none my-3">
              <Link href={"#"} className="text-black" role="button">
                {t("button")}
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <SwitchLenguaje />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
