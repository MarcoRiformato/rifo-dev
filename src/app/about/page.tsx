'use client'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/X.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  onClick,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        onClick={onClick}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('marco.riformato@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Sono Marco Riformato, sviluppatore elbano, dove sviluppo il futuro digitale.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>Mi sono avvicinato al mondo digitale per curiosità e l&apos;ho trasformato in mestiere con studio, pratica e costanza. Ho imparato a sviluppare da autodidatta, puntando da subito su un approccio pratico e orientato ai risultati.</p>

          <p>Ho iniziato la mia carriera alla Tecnoconference (sede di Firenze) nel 2020, dove ho avuto modo di lavorare come tecnico eventi a Roma, Verona, Venezia, Atene per diversi anni</p>

          <p>In seguito, nel 2022, ho seguito un master di diversi mesi in sviluppo web. Ho poi proseguito la mia carriera nel 2023 presso la Phoops (sempre in zona Firenze) che seguiva progetti concernenti il sistema sanitario regionale toscano, oltre a diverse app di cittadinanza attiva: Firenze, Arezzo, Potenza, Messina, Wolfsburg (DE)</p>

          <p>Dal 2024 lavoro come freelance, portando online idee di business con metodo, velocità e attenzione ai dati. Oggi sviluppo siti web, piattaforme digitali ed esperienze online, aiutando aziende e professionisti a trasformare idee reali in progetti concreti.</p>

          <p>Da gennaio 2025 sono tornato alla mia terra natia, l&apos;Elba. Ho collaborato con startup, aziende di formazione e sono sempre a lavoro per il prossimo progetto digitale che possa aiutare a renderci la vita un po&apos; più facile.</p>

          <p>Non cerco il &quot;progetto perfetto&quot;, cerco risultati concreti: codice che funziona, design che comunica, strategie che fanno crescere. Ogni tecnologia è per me uno strumento da usare in modo semplice, efficace e senza dispersioni inutili.</p>

          <p>Credo nei processi snelli, nel miglioramento continuo e nella semplicità. Il mio obiettivo è chiaro: mettere la mia esperienza al servizio di chi vuole costruire qualcosa che lasci il segno, combinando disciplina, visione e capacità di esecuzione.</p>

          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/MarcoRiformato?tab=repositories" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/marco-riformato/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              <SocialLink
                href="mailto:marco.riformato@gmail.com"
                icon={MailIcon}
                onClick={copyEmail}
              >
                marco.riformato@gmail.com
              </SocialLink>
              {copied && (
                <p className="mt-2 text-sm text-teal-500 dark:text-teal-400">
                  Email copiata!
                </p>
              )}
            </div>
          </ul>
        </div>
      </div>
    </Container>
  )
}
