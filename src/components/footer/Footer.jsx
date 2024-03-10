"use client";
//Import own components
import Contact from "../contact/Contact";
//Import phone component
import PhoneInput from "react-phone-number-input";
//Import react fuctions
import {useEffect, useRef, useState} from "react";

export default function Footer({
  formularyTitle,
  inputName,
  inputEmail,
  inputPhone,
  checkTerm,
  validCheck,
  buttonFormulary,
  contactTitle,
  contactSubtitle,
}) {
  const [numberPhone, setNumberphone] = useState();
  const [validated, setValidated] = useState(false);
  const formRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone: numberPhone,
        }),
      });

      if(response.ok) console.log('Registrado')
    } catch (error) {}
  };

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
  return (
    <footer className="bg-orange w-100">
      <div className="container py-lg-5">
        <div className="row py-4 py-lg-5">
          <div className="col-12 col-lg-6">
            <div className="card my-3 my-lg-0 p-5">
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
                        aria-label="Default select example">
                        <option defaultValue>
                          Selecciona Huesped o Escort Anfitrión
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="invalidCheck">
                          {checkTerm}
                        </label>
                        <div className="invalid-feedback">{validCheck}</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary btn-lg" type="submit">
                        {buttonFormulary}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 my-auto">
            <Contact
              contactTitle={contactTitle}
              contactSubtitle={contactSubtitle}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
