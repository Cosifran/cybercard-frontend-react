//export utils
import {StarSvg} from "@/utils/svgIcons";
export default function CardSecundary({title, descriptions, textColor, borderColor, bgCard}) {
  return (
    <div className={`card p-4 rounded-0 ${borderColor} ${bgCard} mb-2 mb-lg-0`}>
      <div className="card-body  mt-2 my-lg-auto p-4">
        <div className="row">
          <div className="col-12 col-lg-12 my-auto">
            <p className="d-flex gap-1">
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
            </p>
          </div>
          <div className="col-12 col-lg-12 py-4 py-lg-0 px-lg-2">
            <ul className="mb-0">
              <li className={`fw-medium pt-lg-4 text-medium ${textColor}`}><span className="fw-bold">{title}</span> {descriptions}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
