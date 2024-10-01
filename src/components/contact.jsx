import { useState } from "react";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

export function Contact() {
  const [alert, setAlert] = useState({ show: false, success: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;

    console.log("Email:", email);

    emailjs
      .sendForm(
        "service_csqiijl", // Reemplaza con tu Service ID de EmailJS
        "template_pn6h37g", // Reemplaza con tu Template ID de EmailJS
        form,
        "eS3eJmL0p51KdFT17" // Reemplaza con tu Public Key de EmailJS
      )
      .then(
        (result) => {
          setAlert({ show: true, success: true });
        },
        (error) => {
          setAlert({ show: true, success: false });
        }
      );

    form.reset();
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 lg:py-20 bg-background text-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Contáctame</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
          Siempre estoy emocionado de conectarme con nuevas personas. No dudes
          en contactarme a través de cualquiera de los canales a continuación.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/aleff-espinosa-cordova/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/aleff-eco"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.instagram.com/ale.legasov?igsh=eHY1bDNhM3F5NjVx"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper text-muted-foreground hover:text-primary transition-colors"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="mailto:dev.aleffec.com"
            className="icon-wrapper text-muted-foreground hover:text-primary transition-colors"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        <div className="max-w-md mx-auto">
          {alert.show && (
            <div
              className={`${
                alert.success
                  ? "bg-green-100 border border-green-400 text-green-700"
                  : "bg-red-100 border border-red-400 text-red-700"
              } px-4 py-3 rounded relative mb-4`}
              role="alert"
            >
              <strong className="font-bold">
                {alert.success ? "¡Éxito! " : "¡Error! "}
              </strong>
              <span className="block sm:inline">
                {alert.success
                  ? "Tu mensaje ha sido enviado correctamente."
                  : "Ocurrió un error al enviar tu mensaje. Inténtelo de nuevo."}
              </span>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
                onClick={() => setAlert({ ...alert, show: false })}
              >
                <svg
                  className={`fill-current h-6 w-6 ${
                    alert.success ? "text-green-500" : "text-red-500"
                  }`}
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-muted-foreground font-medium mb-2"
              >
                Nombre
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Ingrese su nombre"
                required
                className="w-full p-3 border border-border dark:border-border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-600 dark:placeholder-light-gray focus:outline-none focus:border-primary dark:focus:border-primary-light rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-muted-foreground font-medium mb-2"
              >
                Correo Electrónico
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Ingrese su correo"
                required
                className="w-full p-3 border border-border dark:border-border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-600 dark:placeholder-light-gray focus:outline-none focus:border-primary dark:focus:border-primary-light rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-muted-foreground font-medium mb-2"
              >
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Escriba su mensaje"
                required
                className="w-full p-3 border border-border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-600 dark:placeholder-light-gray focus:outline-none focus:border-primary dark:focus:border-primary-light rounded-lg"
              />
            </div>
            <Button
              type="submit"
              className="inline-flex items-center justify-center rounded-md px-20 py-4 m-4 text-sm md:text-md font-medium shadow-2xl border-2 border-transparent bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:underline-offset-4 transition-all duration-200 hover:scale-105 transform"
            >
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
