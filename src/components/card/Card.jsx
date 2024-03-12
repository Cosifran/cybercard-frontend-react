//Import next fuctions
import Link from "next/link";
//Import traslate
import {useTranslations} from "next-intl";
//Import svg
import {CircleSvg} from "@/utils/svgIcons";
export default function Card() {
  const sectionSecond = useTranslations("Section2");
  return (
    <div className="row mt-lg-5 g-0">
      <div className="col-12 col-lg-6">
        <div className="card p-4 bg-black border-end border-white">
          <div className="card-body  mt-2">
            <div className="row">
              <div className="col-12 col-lg-2 my-auto">
                <CircleSvg color="#fff" />
              </div>
              <div className="col-12 col-lg-10 py-4 py-lg-0">
                <h3 className="text-white fw-bold">
                  {sectionSecond("thirdCardTitle")}
                </h3>
              </div>
            </div>

            <p className="fw-medium pt-lg-4 text-white">
              {sectionSecond("thirdCardDescriptions")}
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 d-flex">
        <div className="card  p-4 border-2 aling-items-center border-start">
          <div className="card-body  mt-2">
            <div className="row">
              <div className="col-12 col-lg-2 my-auto">
                <CircleSvg color="#dc4d4a" />
              </div>
              <div className="col-12 py-4 py-lg-0 col-lg-10">
                <h3 className="text-black fw-bold pt-lg-4">
                  {sectionSecond("fourCardTitle")}
                </h3>
              </div>
            </div>
            <p className="fw-medium text-black">
              {sectionSecond("fourCardDescriptions")}
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 my-4 mt-lg-5 mb-lg-5 text-center">
        <Link
          href={"#"}
          className="btn btn-primary btn-lg py-2 fw-bold"
          role="button">
         {sectionSecond("secondButton")}
        </Link>
      </div>
    </div>
  );
}
