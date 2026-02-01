"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, AlertTriangle } from "lucide-react";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useTranslations } from "../hooks/useTranslations";

type AlertState = { show: boolean; success: boolean };

export function Contact() {
  const t = useTranslations();
  const formRef = useRef<HTMLFormElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [alert, setAlert] = useState<AlertState>({ show: false, success: false });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const closeAlert = () => setAlert((prev) => ({ ...prev, show: false }));

  const showToast = (success: boolean) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setAlert({ show: true, success });
    timerRef.current = setTimeout(() => {
      setAlert({ show: false, success: false });
    }, 4500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    const form = formRef.current;
    if (!form) return;

    try {
      setIsSending(true);

      const formData = new FormData(form);
      formData.set("_captcha", "false");
      formData.set("_template", "box");

      const res = await fetch("https://formsubmit.co/dev.aleffec@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("submit_failed");

      form.reset();
      showToast(true);
    } catch {
      showToast(false);
    } finally {
      setIsSending(false);
    }
  };

  const iconClass =
    "grid place-items-center h-12 w-12 rounded-2xl text-[hsl(var(--foreground)/0.9)] transition hover:text-[hsl(var(--foreground))] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]";

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 md:py-16 lg:py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      <AnimatePresence>
        {alert.show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="status"
            aria-live={alert.success ? "polite" : "assertive"}
            className="fixed bottom-6 right-4 z-50 w-[calc(100%-2rem)] sm:w-[420px]"
          >
            <div className="flex items-start gap-3 rounded-2xl border border-[hsl(var(--border)/0.65)] bg-[hsl(var(--background-secondary)/0.92)] px-4 py-3 shadow-lg backdrop-blur-xl">
              <div className="mt-0.5 text-[hsl(var(--foreground)/0.85)]">
                {alert.success ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertTriangle className="h-5 w-5" />
                )}
              </div>

              <div className="min-w-0 flex-1 text-left">
                <p className="font-semibold leading-5">
                  {alert.success ? t.contact.alertSuccessTitle : t.contact.alertErrorTitle}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--foreground)/0.9)]">
                  {alert.success ? t.contact.alertSuccessMessage : t.contact.alertErrorMessage}
                </p>
              </div>

              <button
                type="button"
                onClick={closeAlert}
                aria-label="Cerrar notificación"
                className="grid place-items-center h-9 w-9 rounded-xl text-[hsl(var(--foreground)/0.7)] transition hover:text-[hsl(var(--foreground))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          {t.contact.sectionTitle}
        </h2>

        <p className="mt-4 text-lg font-medium text-[hsl(var(--foreground)/0.7)] max-w-[650px] mx-auto">
          {t.contact.intro1}
        </p>
        <p className="mt-2 text-lg font-medium text-[hsl(var(--foreground)/0.7)] max-w-[600px] mx-auto">
          {t.contact.intro2}
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/aleff-espinosa-cordova/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconClass}
          >
            <FaLinkedin size={26} />
          </a>

          <a
            href="https://github.com/aleff-eco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconClass}
          >
            <FaGithub size={26} />
          </a>

          <a
            href="https://www.instagram.com/alelegasov?igsh=eHY1bDNhM3F5NjVx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={iconClass}
          >
            <FaInstagram size={26} />
          </a>

          <a
            href="mailto:dev.aleffec@gmail.com"
            aria-label="Email"
            className={iconClass}
          >
            <FaEnvelope size={26} />
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-md text-left">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div>
              <label
                htmlFor="name"
                className="block font-medium mb-2 text-[hsl(var(--foreground)/0.9)]"
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

            <div>
              <label
                htmlFor="email"
                className="block font-medium mb-2 text-[hsl(var(--foreground))]"
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

            <div>
              <label
                htmlFor="message"
                className="block font-medium mb-2 text-[hsl(var(--foreground)/0.9)]"
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

            <Button
              type="submit"
              disabled={isSending}
              className="w-full rounded-2xl py-6 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-[hsl(var(--primary-foreground))] disabled:opacity-60 hover:scale-105 transition transition-duration-300"
            >
              {isSending ? t.contact.form.sendingButton : t.contact.form.submitButton}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
