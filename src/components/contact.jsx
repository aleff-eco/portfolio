"use client";

import React, { useState } from "react";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useTranslations } from "../hooks/useTranslations";
import "../styles/Contact.css";

export function Contact() {
  const t = useTranslations();
  const [alert, setAlert] = useState({ show: false, success: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm(
        "service_csqiijl",
        "template_pn6h37g",
        form,
        "eS3eJmL0p51KdFT17"
      )
      .then(
        () => {
          setAlert({ show: true, success: true });
          setTimeout(() => setAlert({ show: false, success: false }), 6000);
        },
        () => {
          setAlert({ show: true, success: false });
          setTimeout(() => setAlert({ show: false, success: false }), 6000);
        }
      );
    form.reset();
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 lg:py-20 bg-background text-center"
    >
      {alert.show && (
        <div
          className={`alert ${alert.success ? "alert-success" : "alert-error"}`}
          role="alert"
        >
          <strong className="font-bold">
            {alert.success
              ? t.contact.alertSuccessTitle
              : t.contact.alertErrorTitle}
          </strong>
          <span className="block sm:inline">
            {alert.success
              ? t.contact.alertSuccessMessage
              : t.contact.alertErrorMessage}
          </span>
          <button
            className="alert-close"
            onClick={() => setAlert({ ...alert, show: false })}
          >
            ✕
          </button>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          {t.contact.sectionTitle}
        </h2>
        <p className="text-lg font-medium text-muted-foreground mb-4 max-w-[550px] mx-auto">
          {t.contact.intro1}
        </p>
        <p className="text-lg font-medium text-muted-foreground mb-8 max-w-[550px] mx-auto">
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
          <form onSubmit={handleSubmit}>
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
            <Button type="submit" className="px-20 py-4">
              {t.contact.form.submitButton}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
