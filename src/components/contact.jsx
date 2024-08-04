import { Input } from "@/components/input"
import { Textarea } from "@/components/textarea"
import { Button } from "@/components/button"

export function Contact(){
    return (
        <section id="contact" className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 tex  t-center">Contactame</h2>
          <div className="max-w-md mx-auto">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-muted-foreground font-medium mb-2">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-muted-foreground font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-muted-foreground font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" rows={5} placeholder="Enter your message" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    )
}