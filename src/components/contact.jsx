"use client";

import React, { useState, useRef } from "react";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useTranslations } from "../hooks/useTranslations";
import "../styles/Contact.css";

export function Contact() {
  const t = useTranslations();
  const formRef = useRef();
  const [alert, setAlert] = useState({ show: false, success: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    try {
      const formData = new FormData(form);
      const res = await fetch(
        "https://formsubmit.co/dev.aleffec@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        setAlert({ show: true, success: true });
        form.reset();
      } else {
        throw new Error("Error de envío");
      }
    } catch (error) {
      setAlert({ show: true, success: false });
    }

    setTimeout(() => setAlert({ show: false, success: false }), 6000);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 lg:py-20 text-center relative overflow-hidden"
    >
      {alert.show && (
        <div
          className={`
          fixed bottom-[5.5rem] right-2 z-50
          max-w-md w-full sm:w-auto
          px-6 py-4 rounded-xl shadow-lg
          flex items-center justify-between gap-4
          ${
            alert.success
              ? "bg-[#22c55e]/90 text-white"
              : "bg-[#ef4444]/90 text-white"
          }
          animate-slide-in
        `}
          role="alert"
        >
          <div className="flex flex-col text-left">
            <strong className="font-semibold text-base">
              {alert.success
                ? t.contact.alertSuccessTitle
                : t.contact.alertErrorTitle}
            </strong>
            <span className="text-sm mt-1">
              {alert.success
                ? t.contact.alertSuccessMessage
                : t.contact.alertErrorMessage}
            </span>
          </div>
          <button
            className="text-xl leading-none focus:outline-none"
            onClick={() => setAlert({ ...alert, show: false })}
            aria-label="Cerrar notificación"
          >
            ×
          </button>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-foreground">
          {t.contact.sectionTitle}
        </h2>
        <p className="text-lg font-medium text-muted-foreground mb-4 max-w-[650px] mx-auto">
          {t.contact.intro1}
        </p>
        <p className="text-lg font-medium text-muted-foreground mb-8 max-w-[600px] mx-auto">
          {t.contact.intro2}
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/aleff-espinosa-cordova/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-wrapper text-muted-foreground hover:opacity-70"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="https://github.com/aleff-eco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-wrapper text-muted-foreground hover:opacity-70"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://www.instagram.com/alelegasov?igsh=eHY1bDNhM3F5NjVx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="icon-wrapper text-muted-foreground hover:opacity-70"
          >
            <FaInstagram size={36} />
          </a>
          <a
            href="mailto:dev.aleffec.com"
            aria-label="Email"
            className="icon-wrapper text-muted-foreground hover:opacity-70"
          >
            <FaEnvelope size={36} />
          </a>
        </div>

        <div className="max-w-md mx-auto">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div className="mb-4 text-left">
              <label
                htmlFor="name"
                className="block text-muted-foreground font-medium mb-2"
              >
                {t.contact.form.nameLabel}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={t.contact.form.namePlaceholder}
                required
                className="w-full"
              />
            </div>
            <div className="mb-4 text-left">
              <label
                htmlFor="email"
                className="block text-muted-foreground font-medium mb-2"
              >
                {t.contact.form.emailLabel}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.contact.form.emailPlaceholder}
                required
                className="w-full"
              />
            </div>
            <div className="mb-4 text-left">
              <label
                htmlFor="message"
                className="block text-muted-foreground font-medium mb-2"
              >
                {t.contact.form.messageLabel}
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t.contact.form.messagePlaceholder}
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="px-20 py-5 mt-4">
              {t.contact.form.submitButton}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
