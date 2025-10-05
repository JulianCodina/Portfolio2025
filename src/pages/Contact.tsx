import "./Contact.css";
import { BtnOutlined, BtnSolid, TextField } from "../components/Inputs";
import { useThemedAsset } from "../theme";
import { ContactCard } from "../components/Cards";
import { useLanguage } from "../contexts/LanguageContext";
import { useTab } from "../contexts/TabContext";
import Map from "../components/Map";
import { useState } from "react";

function Contact() {
  const { language } = useLanguage();
  const { setTab } = useTab();
  //Iconos
  const left = useThemedAsset("left");
  const emailIcon = useThemedAsset("email");
  const phone = useThemedAsset("phone");
  const gps = useThemedAsset("gps");
  const linkedin = useThemedAsset("linkedin2");
  const instagram = useThemedAsset("instagram");
  const facebook = useThemedAsset("facebook");
  const send = useThemedAsset("send");

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidName, setIsValidName] = useState<boolean>(false);
  const [isValidMessage, setIsValidMessage] = useState<boolean>(false);

  const texts = {
    es: {
      title: "Contacto",
      portfolio: "Portafolio",
    },
    en: {
      title: "Contact",
      portfolio: "Portfolio",
    },
    pt: {
      title: "Contato",
      portfolio: "Portfólio",
    },
  };

  function handleSubmit() {
    if (!isValidEmail || !isValidName || !isValidMessage) {
      alert("Por favor, complete todos los campos correctamente.");
      return;
    }
    alert(`Enviado correctamente: ${email} \n ${name} \n ${message}`);
  }

  function handleCopy(valor: string) {
    navigator.clipboard.writeText(valor);
  }

  return (
    <section id="contact">
      <div className="main">
        <h2>{texts[language].title}</h2>
        <div className="body">
          <div className="map">
            <Map
              center={[-27.45113166461427, -58.98651292532432]}
              focus="Mi localidad"
            />
          </div>
          <form className="form">
            <p className="p-big">
              Enviame un <span>E-MAIL</span>
            </p>
            <div className="textFields">
              <div className="top">
                <TextField
                  type="email"
                  label="Dirección email"
                  error="Ingrese un email valido"
                  value={email}
                  setValue={setEmail}
                  setIsValid={setIsValidEmail}
                />
                <TextField
                  type="text"
                  label="Nombre completo"
                  error="Ingrese un nombre"
                  value={name}
                  setValue={setName}
                  setIsValid={setIsValidName}
                />
              </div>
              <TextField
                type="textarea"
                label="Mensaje"
                error="Ingrese algún mensaje"
                value={message}
                setValue={setMessage}
                setIsValid={setIsValidMessage}
              />
            </div>
            <div className="button">
              <BtnSolid
                icon1={send}
                text="Enviar Mensaje"
                icon2=""
                onClick={handleSubmit}
                disabled={!isValidEmail || !isValidName || !isValidMessage}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <ContactCard
          img={emailIcon}
          title={"Direccion Gmail"}
          sub={"depedrojulianismael"}
          onClick={() => handleCopy("depedrojulianismael@gmail.com")}
        />
        <ContactCard
          img={phone}
          title={"Teléfono"}
          sub={"+54 3624 249451"}
          onClick={() => handleCopy("+54 3624 249451")}
        />
        <ContactCard
          img={gps}
          title={"Localidad"}
          sub={"Resistencia, Chaco"}
          onClick={() =>
            window.open("https://maps.app.goo.gl/n7DKDjbCHE68Hcvs7", "_blank")
          }
        />
        <ContactCard
          img={linkedin}
          title={"Linkedin"}
          onClick={() =>
            window.open("https://www.linkedin.com/in/julián-codina/", "_blank")
          }
        />
        <ContactCard
          img={instagram}
          title={"Instagram"}
          onClick={() =>
            window.open("https://www.instagram.com/juliancodina/", "_blank")
          }
        />
        <ContactCard
          img={facebook}
          title={"Facebook"}
          onClick={() =>
            window.open(
              "https://www.facebook.com/julianismael.codinadepedro",
              "_blank"
            )
          }
        />
      </div>

      <div className="footer">
        <BtnOutlined
          icon1={left}
          text={texts[language].portfolio}
          icon2=""
          onClick={() => setTab("portfolio")}
        />
      </div>
    </section>
  );
}

export default Contact;
