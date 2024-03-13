"use client";
//Import own components
import Formulary from "../formulary/formulary";
//Import phone component
import PhoneInput from "react-phone-number-input";
//Import react fuctions
import {useEffect, useRef, useState} from "react";
export default function ModalRegister({
  inputName,
  inputEmail,
  inputPhone,
  buttonFormulary,
  buttonText,
}) {
  const [numberPhone, setNumberphone] = useState();
  const [validated, setValidated] = useState(false);
  const formRef = useRef();
  const modalRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scortAfitrion, setScortAfitrion] = useState("");
  const [alert, setAlert] = useState(null);

  //funcion para mostrar alerta
  const getAlertFn = (msg, category) => {
    setAlert({
      msg,
      category,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //validación del los campos del formulario
    if (name == "" || email == "" || numberPhone == "" || scortAfitrion == "") {
      getAlertFn("Todos los campos son obligatorios", "alert-danger");
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
          scort: scortAfitrion,
          cuestion: "",
        }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setNumberphone("");
        setScortAfitrion("");
        getAlertFn("Registrado con exito", "alert-success");
      }

      setTimeout(() => {
        const closeModalButton =
          modalRef.current.querySelector("#closeModalButton");
        if (closeModalButton) {
          closeModalButton.click();
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
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
        ref={modalRef}
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
                    {alert && (
                      <div className="col-12">
                        <div
                          className={`alert ${alert.category} alert-dismissible mb-0`}
                          role="alert">
                          <div>{alert.msg}</div>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"></button>
                        </div>
                      </div>
                    )}
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

                    <div className="row pt-4 g-0 px-3">
                      <div className="col-6">
                        <button
                          id="closeModalButton"
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
