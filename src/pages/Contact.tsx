import { useRef, useState } from "react";
import "./Contact.css";
import { BtnOutlined, BtnSolid, TextField } from "../components/Inputs";
import { Snackbar } from "../components/Snackbar";
import { ContactCard } from "../components/Cards";
import Map from "../components/Map";
import { useLanguage } from "../contexts/LanguageContext";
import { useTab } from "../contexts/TabContext";
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";

import emailjs from "emailjs-com";

function Contact() {
  const { language } = useLanguage();
  const { setTab } = useTab();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidMessage, setIsValidMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error";
    duration?: number;
  } | null>(null);

  const form = useRef<HTMLFormElement>(null);

  const texts = {
    es: {
      title: "Contacto",
      portfolio: "Portafolio",
      sendMeEmailIntro: "Escríbeme un",
      emailFieldLabel: "Correo electrónico",
      emailFieldError: "Ingrese un email válido",
      nameFieldLabel: "Nombre completo",
      nameFieldError: "Ingrese un nombre",
      messageFieldLabel: "Mensaje",
      messageFieldError: "Ingrese algún mensaje",
      sendButton: "Enviar mensaje",
      sending: "Enviando",
      successMessage: "¡Mensaje enviado correctamente!",
      errorMessage: "Por favor, completa todos los campos correctamente.",
      sendError:
        "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
      copied: "Copiado al portapapeles",
      gmailTitle: "Direccion Gmail",
      phoneTitle: "Teléfono",
      locationTitle: "Localidad",
    },
    en: {
      title: "Contact",
      portfolio: "Portfolio",
      sendMeEmailIntro: "Write me an",
      emailFieldLabel: "Email address",
      emailFieldError: "Enter a valid email",
      nameFieldLabel: "Full name",
      nameFieldError: "Enter a name",
      messageFieldLabel: "Message",
      messageFieldError: "Enter a message",
      sendButton: "Send message",
      sending: "Sending",
      successMessage: "Message sent successfully!",
      errorMessage: "Please complete all fields correctly.",
      sendError: "Error sending the message. Please try again later.",
      copied: "Copied to clipboard",
      gmailTitle: "Gmail Address",
      phoneTitle: "Phone",
      locationTitle: "Location",
    },
    pt: {
      title: "Contato",
      portfolio: "Portfólio",
      sendMeEmailIntro: "Escreva-me um",
      emailFieldLabel: "Endereço de e-mail",
      emailFieldError: "Insira um e-mail válido",
      nameFieldLabel: "Nome completo",
      nameFieldError: "Insira um nome",
      messageFieldLabel: "Mensagem",
      messageFieldError: "Insira uma mensagem",
      sendButton: "Enviar mensagem",
      sending: "Enviando",
      successMessage: "Mensagem enviada com sucesso!",
      errorMessage: "Por favor, preencha todos os campos corretamente.",
      sendError:
        "Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.",
      copied: "Copiado para a área de transferência",
      gmailTitle: "Endereço Gmail",
      phoneTitle: "Telefone",
      locationTitle: "Localidade",
    },
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!isValidEmail || !isValidName || !isValidMessage) {
      setSnackbar({
        message: texts[language].errorMessage,
        type: "error",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    const formData = {
      time: new Intl.DateTimeFormat("es-AR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()),
      user_name: name,
      email: email,
      message: message,
    };

    try {
      const result = await emailjs.send(
        "service_7us04te",
        "template_ssqskz4",
        formData,
        "vpN5u16jjxNL3dRm1"
      );

      if (result.status === 200) {
        setSnackbar({
          message: texts[language].successMessage,
          type: "success",
          duration: 4000,
        });
        setEmail("");
        setName("");
        setMessage("");
        setIsValidEmail(false);
        setIsValidName(false);
        setIsValidMessage(false);
        if (form.current) form.current.reset();
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setSnackbar({
        message: texts[language].sendError,
        type: "error",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleCopy(valor: string) {
    navigator.clipboard.writeText(valor);
    setSnackbar({
      message: texts[language].copied,
      type: "success",
      duration: 1000,
    });
  }

  return (
    <section id="contact">
      <div className="main">
        <h2>{texts[language].title}</h2>
        <div className="body">
          <div className="map">
            <Map
              center={[-27.45113166461427, -58.98651292532432]}
            />
          </div>
          <form
            className="form"
            ref={form}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <p className="p-big">
              {texts[language].sendMeEmailIntro} <span>EMAIL</span>
            </p>
            <div className="textFields">
              <div className="top">
                <TextField
                  type="email"
                  label={texts[language].emailFieldLabel}
                  error={texts[language].emailFieldError}
                  value={email}
                  setValue={setEmail}
                  setIsValid={setIsValidEmail}
                />
                <TextField
                  type="text"
                  label={texts[language].nameFieldLabel}
                  error={texts[language].nameFieldError}
                  value={name}
                  setValue={setName}
                  setIsValid={setIsValidName}
                />
              </div>
              <TextField
                type="textarea"
                label={texts[language].messageFieldLabel}
                error={texts[language].messageFieldError}
                value={message}
                setValue={setMessage}
                setIsValid={setIsValidMessage}
              />
            </div>
            <div className="button">
              <BtnSolid
                type="submit"
                icon1={<FiSend size={16} />}
                text={
                  isSubmitting
                    ? texts[language].sending
                    : texts[language].sendButton
                }
                disabled={
                  !isValidEmail ||
                  !isValidName ||
                  !isValidMessage ||
                  isSubmitting ||
                  name.trim() === "" ||
                  email.trim() === "" ||
                  message.trim() === ""
                }
              />
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <ContactCard
          img={<FiMail size={22} />}
          title={texts[language].gmailTitle}
          sub="depedrojulianismael"
          onClick={() => handleCopy("depedrojulianismael@gmail.com")}
        />
        <ContactCard
          img={<FiPhone size={22} />}
          title={texts[language].phoneTitle}
          sub="+54 3624 249451"
          onClick={() => handleCopy("+54 3624 249451")}
        />
        <ContactCard
          img={<FiMapPin size={22} />}
          title={texts[language].locationTitle}
          sub="Resistencia, Chaco"
          onClick={() =>
            window.open("https://maps.app.goo.gl/n7DKDjbCHE68Hcvs7", "_blank")
          }
        />
        <ContactCard
          img={<FaLinkedin size={22} />}
          title={"Linkedin"}
          sub="in/julian-codina"
          onClick={() =>
            window.open("https://www.linkedin.com/in/julian-codina/", "_blank")
          }
        />
        <ContactCard
          img={<FaInstagram size={22} />}
          title={"Instagram"}
          sub="@juliancodina"
          onClick={() =>
            window.open("https://www.instagram.com/juliancodina/", "_blank")
          }
        />
        <ContactCard
          img={<FaFacebook size={22} />}
          title={"Facebook"}
          sub="@juliancodina"
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
          icon1={<FiArrowLeft size={16} />}
          text={texts[language].portfolio}
          onClick={() => setTab("portfolio")}
        />
      </div>

      {snackbar && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar(null)}
          duration={snackbar.duration || 5000}
        />
      )}
    </section>
  );
}

export default Contact;
