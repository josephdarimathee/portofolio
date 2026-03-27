"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapPin, faPaperPlane, faCheckCircle, faArrowLeft, faGlobe, faClock } from '@fortawesome/free-solid-svg-icons';

/* ── Variants ─────────────────────────────────────────── */
const commonTransition = (delay = 0) => ({
  duration: 0.7,
  delay,
});

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: commonTransition(delay),
  },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: commonTransition(delay),
  },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: commonTransition(delay),
  },
});

/* ── Données de contact ───────────────────────────────── */
const contactInfos = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "joseph.darimathee@email.com",
    href: "mailto:joseph.darimathee@email.com",
    desc: "Réponse sous 24h",
  },
  {
    icon: faPhone,
    label: "Téléphone",
    value: "+242 06 XXX XX XX",
    href: "tel:+242060000000",
    desc: "Lun–Ven, 8h–18h",
  },
  {
    icon: faMapPin,
    label: "Localisation",
    value: "Brazzaville, Congo",
    href: "#",
    desc: "Disponible à distance",
  },
  {
    icon: faGlobe,
    label: "Portfolio",
    value: "joseph-dev.vercel.app",
    href: "https://joseph-dev.vercel.app",
    desc: "Mes réalisations",
  },
];

const services = [
  "Site vitrine / Portfolio",
  "Application web fullstack",
  "Application mobile",
  "API & Backend",
  "Consultation technique",
  "Autre",
];

const budgets = ["< 500 $", "500 – 1 000 $", "1 000 – 3 000 $", "3 000 $+", "À discuter"];

/* ── Champ de formulaire ──────────────────────────────── */
const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">
      {label}
    </label>
    {children}
    {error && <span className="text-[11px] text-red-400 font-mono">{error}</span>}
  </div>
);

const inputCls =
  "w-full bg-[#0a0f1e] border border-[#1e2a4a] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f620] transition-all duration-200 font-mono pointer-events-auto";

/* ── Page ─────────────────────────────────────────────── */
export default function ContactPage() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  /* Orbe qui suit le curseur */
  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;
    const move = (e: MouseEvent) => {
      gsap.to(orb, { x: e.clientX - 300, y: e.clientY - 300, duration: 1.4, ease: "power3.out" });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nom.trim()) e.nom = "Champ requis";
    if (!form.email.includes("@")) e.email = "Email invalide";
    if (!form.service) e.service = "Choisissez un service";
    if (!form.message.trim()) e.message = "Décrivez votre projet";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1800);
  };

  return (
    <main className="min-h-screen bg-[#090d1a] text-white overflow-x-hidden">

      {/* Orbe curseur */}
      <div
        ref={orbRef}
        className="fixed w-[600px] h-[600px] rounded-full bg-[#3b82f6] opacity-[0.04] blur-[120px] pointer-events-none z-0"
        style={{ top: 0, left: 0 }}
      />

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb] opacity-[0.05] blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#3b82f6] opacity-[0.04] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 pt-28 pb-24">

        {/* Retour */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 relative z-50 pointer-events-auto"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#3b82f6] transition-colors duration-200 font-mono group pointer-events-auto"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Retour à l&apos;accueil
          </Link>
        </motion.div>

        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">
              Contact
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight"
          >
            Démarrons votre
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">
              projet ensemble
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 text-gray-400 text-base max-w-xl leading-relaxed"
          >
            Une idée, un besoin, une question ? Je suis disponible pour en discuter
            et construire quelque chose d&apos;exceptionnel pour vous.
          </motion.p>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 xl:gap-16 items-start">

          {/* ── FORMULAIRE ── */}
          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border border-[#3b82f630] bg-[#0d1220]"
              >
                <div className="w-16 h-16 rounded-full bg-[#3b82f615] border border-[#3b82f640] flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 text-[#3b82f6]" />
                </div>
                <h2 className="text-2xl font-black text-white mb-3">Message envoyé !</h2>
                <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
                  Merci pour votre message. Je reviendrai vers vous dans les plus brefs délais, généralement sous 24h.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ nom: "", email: "", service: "", budget: "", message: "" }); }}
                  className="px-6 py-2.5 rounded-lg text-sm font-bold text-[#3b82f6] border border-[#3b82f640] hover:bg-[#3b82f610] transition-all duration-200 pointer-events-auto"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeLeft(0.2)}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
                className="bg-[#0d1220] rounded-2xl border border-[#1a2040] p-7 sm:p-10 flex flex-col gap-6 relative z-50 pointer-events-auto"
              >
                {/* Nom + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Nom complet *" error={errors.nom}>
                    <input
                      type="text"
                      placeholder="Joseph Darimathee"
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Email *" error={errors.email}>
                    <input
                      type="email"
                      placeholder="vous@exemple.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                    />
                  </Field>
                </div>

                {/* Type de projet */}
                <Field label="Type de projet *" error={errors.service}>
                  <div className="flex flex-wrap gap-2 pointer-events-auto">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, service: s })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all duration-200 border pointer-events-auto ${
                          form.service === s
                            ? "bg-[#3b82f6] border-[#3b82f6] text-white"
                            : "bg-[#0a0f1e] border-[#1e2a4a] text-gray-400 hover:border-[#3b82f660] hover:text-gray-200"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </Field>

                {/* Budget */}
                <Field label="Budget estimé">
                  <div className="flex flex-wrap gap-2 pointer-events-auto">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all duration-200 border pointer-events-auto ${
                          form.budget === b
                            ? "bg-[#3b82f620] border-[#3b82f6] text-[#3b82f6]"
                            : "bg-[#0a0f1e] border-[#1e2a4a] text-gray-400 hover:border-[#3b82f660] hover:text-gray-200"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </Field>

                {/* Message */}
                <Field label="Décrivez votre projet *" error={errors.message}>
                  <textarea
                    rows={5}
                    placeholder="Parlez-moi de votre projet, vos objectifs, vos délais..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none leading-relaxed pointer-events-auto`}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-3 w-full py-4 rounded-xl font-black text-sm text-white bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#3b82f630] disabled:opacity-60 disabled:cursor-not-allowed pointer-events-auto"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      Envoyer le message
                    </>
                  )}
                </button>

                <p className="text-[11px] text-gray-600 text-center font-mono">
                  Vos données ne seront jamais partagées avec des tiers.
                </p>
              </motion.form>
            )}
          </div>

          {/* ── SIDEBAR DROITE ── */}
          <div className="flex flex-col gap-5">

            {/* Disponibilité */}
            <motion.div
              variants={fadeRight(0.25)}
              initial="hidden"
              animate="visible"
              className="relative rounded-2xl border border-[#3b82f630] bg-[#0d1220] p-6"
            >
              <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#3b82f650] to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3b82f610] border border-[#3b82f625] flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Disponibilité</p>
                  <p className="text-[11px] text-gray-500 font-mono">Actuellement disponible</p>
                </div>
                <span className="ml-auto w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              </div>
              <div className="space-y-2">
                {[
                  ["Temps de réponse", "< 24h"],
                  ["Mode de travail", "Remote / Hybride"],
                  ["Disponibilité", "Temps plein"],
                  ["Fuseau horaire", "WAT (UTC+1)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-1.5 border-b border-[#ffffff08] last:border-0">
                    <span className="text-xs text-gray-500 font-mono">{k}</span>
                    <span className="text-xs font-bold text-gray-200 font-mono">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Infos contact */}
            <div className="flex flex-col gap-3 relative z-50 pointer-events-auto">
              {contactInfos.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  variants={fadeRight(0.3 + i * 0.08)}
                  initial="hidden"
                  animate="visible"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-[#1a2040] bg-[#0d1220] hover:border-[#3b82f640] transition-all duration-300 pointer-events-auto"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-[#3b82f610] border border-[#3b82f625] flex items-center justify-center group-hover:bg-[#3b82f620] transition-colors duration-300">
                    <FontAwesomeIcon icon={info.icon} className="w-5 h-5 text-[#3b82f6]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">{info.label}</p>
                    <p className="text-sm font-bold text-white truncate group-hover:text-[#3b82f6] transition-colors duration-300">{info.value}</p>
                    <p className="text-[11px] text-gray-600 font-mono">{info.desc}</p>
                  </div>
                  <span className="ml-auto text-gray-600 group-hover:text-[#3b82f6] text-lg transition-colors duration-300 shrink-0">→</span>
                </motion.a>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <motion.div
              variants={fadeRight(0.55)}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-[#1a2040] bg-[#0d1220] p-5"
            >
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono mb-4">
                Réseaux sociaux
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: "GitHub", handle: "@joseph-darimathee", href: "https://github.com", color: "#f0f6fc" },
                  { name: "LinkedIn", handle: "Joseph Darimathee", href: "https://linkedin.com", color: "#0a66c2" },
                  { name: "Twitter / X", handle: "@josephdev", href: "https://twitter.com", color: "#1d9bf0" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-4 py-2.5 rounded-xl border border-[#1e2a4a] hover:border-[#3b82f640] transition-all duration-200 pointer-events-auto"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: social.color }} />
                      <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{social.name}</span>
                    </div>
                    <span className="text-xs text-gray-600 font-mono group-hover:text-[#3b82f6] transition-colors">{social.handle}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Citation */}
            <motion.div
              variants={fadeRight(0.65)}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-[#3b82f620] bg-gradient-to-br from-[#3b82f608] to-[#0d1220] p-6 text-center"
            >
              <p className="text-2xl mb-3">💬</p>
              <p className="text-sm text-gray-400 leading-relaxed italic">
                &quot;Chaque grand projet commence par une simple conversation.&quot;
              </p>
              <p className="text-[11px] text-[#3b82f6] font-mono font-bold mt-3 uppercase tracking-widest">
                — Joseph Darimathee
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <motion.section
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#3b82f640] bg-[#3b82f610] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
              <span className="text-[11px] font-bold text-[#3b82f6] tracking-widest uppercase font-mono">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">
              Questions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">
                fréquentes
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              { q: "Quel est votre délai de réponse ?", a: "Je réponds à tous les messages dans les 24 heures ouvrées. Pour les urgences, privilégiez le contact téléphonique." },
              { q: "Travaillez-vous avec des clients à l'étranger ?", a: "Absolument ! Je travaille avec des clients du monde entier en remote, avec une communication claire via Slack, Zoom ou Discord." },
              { q: "Quels sont vos tarifs ?", a: "Les tarifs varient selon la complexité du projet. Chaque projet est unique, je propose un devis personnalisé après discussion." },
              { q: "Proposez-vous de la maintenance après livraison ?", a: "Oui, je propose des forfaits de maintenance mensuelle pour assurer la pérennité et l'évolution de vos applications." },
              { q: "Quel est le processus de travail ?", a: "Brief → Devis → Design → Développement → Tests → Livraison. Vous êtes impliqué à chaque étape avec des points réguliers." },
              { q: "Acceptez-vous les petits projets ?", a: "Oui, qu'il s'agisse d'une landing page simple ou d'une application complexe, j'étudie toutes les demandes avec attention." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.07)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group p-6 rounded-2xl border border-[#1a2040] bg-[#0d1220] hover:border-[#3b82f640] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[#3b82f6] font-black text-lg leading-none font-mono shrink-0 mt-0.5">?</span>
                  <p className="font-bold text-white text-sm leading-snug group-hover:text-[#3b82f6] transition-colors duration-300">{faq.q}</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed pl-6">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}
