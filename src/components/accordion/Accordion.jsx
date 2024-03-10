//Import traslate
import {useTranslations} from "next-intl";
export default function Accordion() {
  const tabTraslations = useTranslations("AccordionTab");
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            1. {tabTraslations("tItem1")}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">{tabTraslations("dItem1")}</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo">
            2. {tabTraslations("tItem2")}
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">{tabTraslations("dItem2")}</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree">
            3. {tabTraslations("tItem3")}
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem3")}
            <ul className="mt-2">
              <li>{tabTraslations("listPoint1")}</li>
              <li>{tabTraslations("listPoint2")}</li>
              <li>{tabTraslations("listPoint3")}</li>
              <li>{tabTraslations("listPoint4")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour">
            4. {tabTraslations("tItem4")}
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem4")}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive">
            5. {tabTraslations("tItem5")}
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem5")}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix">
            6. {tabTraslations("tItem6")}
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem6")}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven">
            7. {tabTraslations("tItem7")}
          </button>
        </h2>
        <div
          id="collapseSeven"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem7")}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEight"
            aria-expanded="false"
            aria-controls="collapseEight">
            8. {tabTraslations("tItem8")}
          </button>
        </h2>
        <div
          id="collapseEight"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem8")}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseNine"
            aria-expanded="false"
            aria-controls="collapseNine">
            9. {tabTraslations("tItem9")}
          </button>
        </h2>
        <div
          id="collapseNine"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem9")}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEleven"
            aria-expanded="false"
            aria-controls="collapseEleven">
            10. {tabTraslations("tItem10")}
          </button>
        </h2>
        <div
          id="collapseEleven"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem10")}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwelve"
            aria-expanded="false"
            aria-controls="collapseTwelve">
            11. {tabTraslations("tItem11")}
          </button>
        </h2>
        <div
          id="collapseTwelve"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem11")}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThirteen"
            aria-expanded="false"
            aria-controls="collapseThirteen">
            12. {tabTraslations("tItem12")}
          </button>
        </h2>
        <div
          id="collapseThirteen"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem12")}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFourteen"
            aria-expanded="false"
            aria-controls="collapseFourteen">
            13. {tabTraslations("tItem13")}
          </button>
        </h2>
        <div
          id="collapseFourteen"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample">
          <div className="accordion-body">
          {tabTraslations("dItem13")}
          </div>
        </div>
      </div>
    </div>
  );
}
