"use client";
//Import own components
import Formulary from "../formulary/formulary";
//Import phone component
import PhoneInput from "react-phone-number-input";
//Import react fuctions
import {useEffect, useRef, useState} from "react";
export default function ModalRegister({
  formularyTitle,
  inputName,
  inputEmail,
  inputPhone,
  buttonFormulary,
  contactTitle,
  contactSubtitle,
  buttonText,
}) {
  const [numberPhone, setNumberphone] = useState();
  const [validated, setValidated] = useState(false);
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const form = formRef.current;

    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);

      form.classList.add("was-validated");
    });

    return () => {
      form.removeEventListener("submit", (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      });
    };
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    //validación del los campos del formulario
    if (name == "" || email == "" || numberPhone == "") {
      return;
    }
    try {
      //Petición post para registrar al usuario
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone: numberPhone,
        }),
      });

      if (response.ok) console.log("Registrado");
    } catch (error) {}
  };
  return (
    <>
      <button
        className="btn btn-primary btn-lg py-3 fw-bold mt-3 d-content "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        {buttonText}
      </button>
      <button
        type="button"
        className="btn btn-primary  btn-sm py-3 fw-bold mb-4 rounded d-lg-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        {buttonText}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Guardar información
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
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
                        aria-label="Default select example">
                        <option defaultValue>
                          Selecciona Huesped o Escort Anfitrión
                        </option>
                        <option value="Scort anfitrion">Scort anfitrion</option>
                        <option value="Huesped">Huesped</option>
                      </select>
                    </div>

                    <div className="row pt-4 g-0 px-3">
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn btn-secondary btn-lg w-100"
                          data-bs-dismiss="modal">
                          Cerrar
                        </button>
                      </div>
                      <div className="col-6 ps-2">
                        <button
                          className="btn btn-primary btn-lg w-100"
                          type="submit">
                          {buttonFormulary}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
