import { Input } from "@/components/input"
import { Textarea } from "@/components/textarea"
import { Button } from "@/components/button"
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa"

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-muted text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Contáctame</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
          Siempre estoy emocionado de conectarme con nuevas personas. No dudes en contactarme a través de cualquiera de los canales a continuación.
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-wrapper text-muted-foreground hover:text-primary transition-colors">
            <FaTwitter size={28} />
          </a> */}
          <a href="https://www.linkedin.com/in/aleff-espinosa-cordova/" target="_blank" rel="noopener noreferrer" className="icon-wrapper text-muted-foreground hover:text-primary transition-colors">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/aleff-eco" target="_blank" rel="noopener noreferrer" className="icon-wrapper text-muted-foreground hover:text-primary transition-colors">
            <FaGithub size={28} />
          </a>
          <a href="https://www.instagram.com/ale.legasov?igsh=eHY1bDNhM3F5NjVx" target="_blank" rel="noopener noreferrer" className="icon-wrapper text-muted-foreground hover:text-primary transition-colors">
            <FaInstagram size={28} />
          </a>
          <a href="mailto:dev.aleffec.com" className="icon-wrapper text-muted-foreground hover:text-primary transition-colors">
            <FaEnvelope size={28} />
          </a>
        </div>
        
        <div className="max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-muted-foreground font-medium mb-2">
                Nombre
              </label>
              <Input id="name" type="text" placeholder="Ingrese su nombre" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-muted-foreground font-medium mb-2">
                Correo Electrónico
              </label>
              <Input id="email" type="email" placeholder="Ingrese su correo" />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-muted-foreground font-medium mb-2">
                Mensaje
              </label>
              <Textarea id="message" rows={5} placeholder="Escriba su mensaje" />
            </div>
            <Button type="submit" className="w-full hover:bg-primary-dark transition-colors">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
