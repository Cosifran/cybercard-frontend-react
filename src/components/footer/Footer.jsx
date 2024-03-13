"use client";
//Import own components
import Contact from "../contact/Contact";
import Formulary from "../formulary/formulary";
//Import react fuctions
import {useEffect, useRef, useState} from "react";

export default function Footer({
  formularyTitle,
  inputName,
  inputEmail,
  inputPhone,
  buttonFormulary,
  selectPlaceholder,
  selectValue1,
  selectValue2,
  contactTitle,
  contactSubtitle,
}) {
  const [numberPhone, setNumberphone] = useState();
  const [validated, setValidated] = useState(false);
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cuestionAdd, setCuestionAdd] = useState("");
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
    if (
      name == "" ||
      email == "" ||
      numberPhone == "" ||
      cuestionAdd == "" ||
      scortAfitrion == "Selecciona Huesped o Escort Anfitrión"
    ) {
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
          cuestion: cuestionAdd,
        }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setNumberphone("");
        setCuestionAdd("");
        setScortAfitrion("");
        getAlertFn("Registrado con exito", "alert-success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className="bg-orange w-100" id="footerSection">
      <div className="container py-lg-5">
        <div className="row py-4 py-lg-5">
          <div className="col-12 col-lg-6">
            <div className="card my-3 my-lg-0 p-3 p-lg-5">
              <Formulary
                alert={alert}
                formularyTitle={formularyTitle}
                showButton={true}
                name={name}
                email={email}
                cuestionAdd={cuestionAdd}
                scortAfitrion={scortAfitrion}
                inputName={inputName}
                numberPhone={numberPhone}
                inputEmail={inputEmail}
                inputPhone={inputPhone}
                selectPlaceholder={selectPlaceholder}
                selectValue1={selectValue1}
                selectValue2={selectValue2}
                buttonFormulary={buttonFormulary}
                setEmail={setEmail}
                formRef={formRef}
                setName={setName}
                setNumberphone={setNumberphone}
                setCuestionAdd={setCuestionAdd}
                setScortAfitrion={setScortAfitrion}
                onSubmit={onSubmit}
              />
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
