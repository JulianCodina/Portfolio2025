import "./Contact.css";
import { BtnOutlined, BtnSolid } from "../components/Inputs";
import { useThemedAsset } from "../theme";
import { ContactCard } from "../components/Cards";
import { useLanguage } from "../contexts/LanguageContext";
import { useTab } from "../contexts/TabContext";
import Map from "../components/Map";

function Contact() {
  const { language } = useLanguage();
  const { setTab } = useTab();
  //Iconos
  const left = useThemedAsset("left");
  const email = useThemedAsset("email");
  const phone = useThemedAsset("phone");
  const gps = useThemedAsset("gps");
  const linkedin = useThemedAsset("linkedin2");
  const instagram = useThemedAsset("instagram");
  const facebook = useThemedAsset("facebook");
  const send = useThemedAsset("send");

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
            <div className="top">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Nombre" />
            </div>
            <textarea placeholder="Mensaje"></textarea>
            <div className="button">
              <BtnSolid
                icon1={send}
                text="Enviar Mensaje"
                icon2=""
                onClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <ContactCard
          img={email}
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
