import "./Contact.css";
import { BtnOutlined, BtnSolid } from "../components/Inputs";
import { useThemedAsset } from "../theme";
import { ContactCard } from "../components/Cards";
import { useLanguage } from "../contexts/LanguageContext";
import { useTab } from "../contexts/TabContext";

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

  return (
    <section id="contact">
      <h2>{texts[language].title}</h2>
      <div className="body">
        <div className="main">
          <div className="map"></div>
          <div className="form">
            <form action="">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Nombre" />
              <textarea placeholder="Mensaje"></textarea>
              <BtnSolid
                icon1={send}
                text="Enviar Mensaje"
                icon2=""
                onClick={() => {}}
              />
            </form>
          </div>
        </div>
        <div className="container">
          <ContactCard
            img={email}
            title={"Direccion Email"}
            sub={"depedrojulianismael@gmail.com"}
          />
          <ContactCard img={phone} title={"Teléfono"} sub={"+54 3624 249451"} />
          <ContactCard
            img={gps}
            title={"Localidad"}
            sub={"Resistnecia, Chaco ARG"}
          />
          <ContactCard img={linkedin} title={"Localidad"} />
          <ContactCard img={instagram} title={"Localidad"} />
          <ContactCard img={facebook} title={"Facebook"} />
        </div>
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
