//Import next fuctions
import Link from "next/link";
import Image from "next/image";
import modeloPrincipal from "../../../public/img/modelo-principal.png";
import modeloSecundaria from "../../../public/img/modelo-secundaria.png";
import modeloResponsive from "../../../public/img/modelo-responsive.png";
//img carrucel
import modeloModal from "../../lib/img/modeloModal.jpg";
import modeloModal2 from "../../lib/img/modeloModal2.jpg";
import modeloModal3 from "../../lib/img/modelo-secundaria.jpg";
import modeloCarrucel4 from "../../lib/img/modeloCarrucel4.jpg"
import modeloCarrucel5 from "../../lib/img/modeloCarrucel5.jpg"
import modeloCarrucel6 from "../../lib/img/modeloCarrucel6.jpg"

//Import traslate
import {useTranslations} from "next-intl";
//Import svg
import {CircleSvg} from "@/utils/svgIcons";
//Import own components
import Card from "@/components/card/Card";
import Carrucel from "@/components/swiper/carrucel";
import Accordion from "@/components/accordion/Accordion";
import CardSecundary from "@/components/card/CardSecundary";
import ModalRegister from "@/components/modal/ModalRegister";
export default function Index() {
  const sectionOne = useTranslations("Section1");
  const sectionSecond = useTranslations("Section2");
  const sectionThree = useTranslations("Section3");
  const sectionFour = useTranslations("Section4");
  const sectionFive = useTranslations("Section5");
  const FooterTraslate = useTranslations("FooterSection");
  return (
    <>
      <section className="container mt-2 pt-2 mt-lg-5 pt-lg-5">
        <section className="row">
          <article className="d-block d-lg-none col-12 text-center mb-4">
            <Image
              className="slide-in-fwd-center"
              width={296}
              height={295}
              src={modeloResponsive}
              alt="modelo scort"></Image>
          </article>
          <article className="col-12 col-lg-6">
            <h1 className="fw-bold">{sectionOne("title")}</h1>
            <p className="my-4 fw-medium text-big">
              {sectionOne("subtitle")} ❤️‍🔥
            </p>

            <ModalRegister
              inputName={FooterTraslate("inputName")}
              inputEmail={FooterTraslate("inputEmail")}
              inputPhone={FooterTraslate("inputPhone")}
              buttonFormulary={FooterTraslate("buttonFormulary")}
              buttonText={sectionOne("button")}
            />
          </article>
          <article className="col-12 col-lg-6 d-none d-lg-block text-end ">
            <Image
              loading="lazy"
              className="img-fluid animate-image"
              src={modeloPrincipal}
              alt="modelo scort"></Image>
          </article>
        </section>
      </section>

      <section className="bg-orange w-100">
        <div className="container">
          <div className="row mt-2 pt-2 mt-lg-5 pt-lg-5 g-md-5">
            <div className="col-12 col-lg-4 my-auto">
              <h3 className="my-4 fw-bold text-white">
                {sectionSecond("firstTitle")}
              </h3>
            </div>
            <div className="col-12 col-lg-8 mt-0">
              <div className="row g-0">
                <div className="col-12 col-lg-6">
                  <div className="card p-4 border-end">
                    <div className="card-body  mt-2">
                      <CircleSvg color="#dc4d4a" />
                      <p className="fw-bold pt-4">
                        {sectionSecond("firstCard")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-lg-flex my-4 my-lg-0">
                  <div className="card  p-4 border-white bg-black aling-items-center border-start">
                    <div className="card-body  d-lg-flex">
                      <p className="fw-bold pt-4 px-3 px-lg-5 text-white my-auto text-center">
                        {sectionSecond("secondCard")} 😈
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-lg-5 g-lg-5">
            <div className="col-12 col-lg-6  my-2">
              <Carrucel
                modeloModal={modeloModal}
                modeloModal2={modeloModal2}
                modeloModal3={modeloModal3}
              />
            </div>
            <div className="col-lg-6 my-lg-auto mt-4 ">
              <h3 className="text-white fw-bold">
                {sectionSecond("secondTitle")}💰
              </h3>
              <p className="text-white pe-lg-4 my-4">
                {sectionSecond("description")} 🍑🤑
              </p>

              <div className="d-flex justify-content-center d-lg-block">
                <ModalRegister
                  inputName={FooterTraslate("inputName")}
                  inputEmail={FooterTraslate("inputEmail")}
                  inputPhone={FooterTraslate("inputPhone")}
                  buttonFormulary={FooterTraslate("buttonFormulary")}
                  buttonText={sectionSecond("firstButton")}
                />
              </div>
            </div>
          </div>

          <Card />
        </div>
      </section>

      {/* Beneficio */}
      <section className="bg-white w-100">
        <div className="container">
          <div className="row mt-2 pt-2 mt-lg-5 pt-lg-5">
            <div className="col-12 text-center">
              <p className="text-uppercase fw-bold textBenefficeSize">
                {sectionThree("subtitle")}
              </p>
              <h2 className="fw-bold">{sectionThree("title")}</h2>
              <h2 className="fw-bold d-none d-lg-block">
                {sectionThree("titleSecundary")}
              </h2>
            </div>
          </div>
          <div className="row g-0 my-lg-5 pb-lg-5">
            <div className="col-12 col-lg-6">
              <CardSecundary
                bgCard={"bg-black"}
                borderColor={"border-white"}
                textColor={"text-white"}
                title={sectionThree("firstCardTitle")}
                descriptions={sectionThree("firstCardDescription")}
              />
              <CardSecundary
                bgCard={"bg-black"}
                borderColor={"border-white"}
                textColor={"text-white"}
                title={sectionThree("secundaryCardTitle")}
                descriptions={sectionThree("secundaryCardDescription")}
              />
            </div>
            <div className="col-12 col-lg-6 mb-2 mb-lg-0">
              <CardSecundary
                bgCard={"bg-black"}
                borderColor={"border-white"}
                textColor={"text-white"}
                title={sectionThree("threeCardTitle")}
                descriptions={sectionThree("threeCardDescription")}
              />
              <CardSecundary
                bgCard={"bg-black"}
                borderColor={"border-white"}
                textColor={"text-white"}
                title={sectionThree("fourCardTitle")}
                descriptions={sectionThree("fourCardDescription")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange w-100">
        <div className="container pb-lg-5">
          <div className="row  mt-lg-2 pt-2 pt-lg-5">
            <div className="col-12 text-center mt-lg-5 mt-2 mb-lg-0">
              <p className="text-uppercase text-white textBenefficeSize fw-bold">
                {sectionFour("subtitle")}
              </p>
              <h2 className="fw-bold text-white">{sectionFour("title")}</h2>
              <h2 className="fw-bold text-white d-none d-lg-block">
                {sectionFour("titleSecundary")}
              </h2>
            </div>
          </div>
          <div className="row g-0 mt-lg-5 pb-lg-5">
            <div className="col-12 col-lg-6">
              <CardSecundary
                bgCard={"bg-white"}
                borderColor={"border-black"}
                textColor={"text-black"}
                title={sectionFour("firstCardTitle")}
                descriptions={sectionFour("firstCardDescription")}
              />
              <CardSecundary
                bgCard={"bg-white"}
                borderColor={"border-black"}
                textColor={"text-black"}
                title={sectionFour("secundaryCardTitle")}
                descriptions={sectionFour("secundaryCardDescription")}
              />
            </div>
            <div className="col-12 col-lg-6">
              <CardSecundary
                bgCard={"bg-white"}
                borderColor={"border-black"}
                textColor={"text-black"}
                title={sectionFour("threeCardTitle")}
                descriptions={sectionFour("fourCardDescription")}
              />
              <CardSecundary
                bgCard={"bg-white"}
                borderColor={"border-black"}
                textColor={"text-black"}
                title={sectionFour("threeCardTitle")}
                descriptions={sectionFour("fourCardTitle")}
              />
            </div>
          </div>
          <div className="col-12 mb-lg-5 text-center">
            <ModalRegister
              inputName={FooterTraslate("inputName")}
              inputEmail={FooterTraslate("inputEmail")}
              inputPhone={FooterTraslate("inputPhone")}
              buttonFormulary={FooterTraslate("buttonFormulary")}
              buttonText={sectionFour("Button")}
            />
          </div>
        </div>
      </section>

      <section className="bg-white w-100">
        <div className="container">
          <div className="row mt-2 pt-2 py-lg-5 my-lg-5">
            <div className="col-12 col-lg-6 mt-2 mt-lg-0">
              <p className="text-uppercase ">Faq</p>
              <h3 className="fw-bold">{sectionFive("title")}</h3>
              <p>{sectionFive("description")}</p>
              <div className="row d-none d-lg-block">
                <div className="col-12">
                  <Carrucel
                    modeloModal={modeloCarrucel4}
                    modeloModal2={modeloCarrucel5}
                    modeloModal3={modeloCarrucel6}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4 my-lg-auto">
              <Accordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
