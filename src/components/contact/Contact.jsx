//Import svg icons
import {
  XIcon,
  ContactIcon,
  InstagramIcon,
  MenssageIcon,
  FacebookIcon,
} from "@/utils/svgIcons";
//Import traslate
import {useTranslations} from "next-intl";
import Link from "next/link";
export default function Contact({contactTitle, contactSubtitle}) {
  return (
    <>
      <div className="ps-lg-4 mt-4 pb-lg-5 mb-lg-5">
        <p className="text-white">{contactSubtitle}</p>
        <h2 className="fw-bold text-white">{contactTitle}</h2>

        <p>
          <ContactIcon />{" "}
          <span className="fw-medium ms-3 text-white">+1 (849) 9255688</span>
        </p>

        <div className="row">
          <div className="col-2 col-lg-1">
            <MenssageIcon />
          </div>
          <div className="col-10 col-lg-11">
            <ul>
              <li className="fw-medium text-white">
                andres.corporan@coibox.com
              </li>
              <li className="fw-medium text-white">andresc.m17@hotmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row g-0 justify-content-center justify-content-lg-end mt-4 mt-lg-5 pt-lg-5">
        <div className="col-3 col-lg-2 text-center animate-scale">
          <Link href={"https://www.facebook.com/coibox?mibextid=ZbWKwL"}>
            <FacebookIcon />
          </Link>
        </div>
        <div className="col-2 col-lg-1 text-center animate-scale">
          <Link href={"https://twitter.com/coibox?t=CfCUt8N8Xjq96GpaerkdhA"}>
            <XIcon />
          </Link>
        </div>
        <div className="col-3 col-lg-2 text-center animate-scale">
          <Link href={"https://www.instagram.com/coibox.oficial"}>
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
