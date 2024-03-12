//Import phone component
import PhoneInput from "react-phone-number-input";
export default function Formulary({
  formularyTitle,
  showButton,
  formRef,
  name,
  email,
  cuestionAdd,
  scortAfitrion,
  numberPhone,
  inputName,
  inputEmail,
  inputPhone,
  buttonFormulary,
  setName,
  setEmail,
  setNumberphone,
  setCuestionAdd,
  setScortAfitrion,
  onSubmit,
}) {
  return (
    <div className="row">
      <div className="col-12">
        <p className="title-formulary fw-bold">{formularyTitle}</p>
        <form
          onSubmit={onSubmit}
          ref={formRef}
          className="row g-4 needs-validation is-invalid"
          noValidate>
          <div className="col-12">
            <input
              name="name"
              type="text"
              value={name}
              placeholder={inputName}
              className={`form-control`}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="validationCustom01"
              required
            />
          </div>
          <div className="col-md-12">
            <input
              name="email"
              type="email"
              value={email}
              placeholder={inputEmail}
              className={`form-control`}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="validationCustom02"
              required
            />
          </div>
          <div className="col-md-12">
            <PhoneInput
              name="phone"
              id="validationCustom03"
              placeholder={inputPhone}
              value={numberPhone}
              onChange={setNumberphone}
            />
          </div>
          <div className="col-12">
            <select
              id="validationCustom04"
              className="form-select"
              aria-label="Default select example"
              value={scortAfitrion}
              onChange={(e) => {
                setScortAfitrion(e.target.value);
              }}>
              <option defaultValue>
                Selecciona Huesped o Escort Anfitrión
              </option>
              <option value="Scort anfitrion">Scort anfitrion</option>
              <option value="Huesped">Huesped</option>
            </select>
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder={"Añade si tienes una pregunta o duda (opcional)"}
              value={cuestionAdd}
              onChange={(e) => {
                setCuestionAdd(e.target.value);
              }}></textarea>
          </div>

          <div className="col-12">
            <button className="btn btn-primary btn-lg" type="submit">
              {buttonFormulary}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
