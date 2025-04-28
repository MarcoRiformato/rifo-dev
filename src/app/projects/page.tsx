import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoForum from '@/images/logos/forum_logo.webp'
import logoFlexicare from '@/images/logos/flexicare.webp'
import { FaDatabase, FaGavel, FaStore, FaGithub, FaGlobe, FaMap } from 'react-icons/fa'

const projects = [
  {
    name: 'Elba 24',
    description:
      'Una mappa dell\'isola d\'Elba che mostra gli eventi delle prossime 24 ore, attualmente in sviluppo...',
    links: [
      { href: '#', label: 'GitHub (Coming Soon)', icon: FaGithub },
    ],
    icon: FaMap,
  },
  {
    name: 'Fattoria Bonaparte',
    description:
      'Sito incentrato alla local-seo in attuale sviluppo per il punto vendita/locale di aperitivi, apericene e degustazioni di un azienda agricola elbana',
    links: [
      { href: 'https://github.com/MarcoRiformato/FattoriaBonaparte', label: 'GitHub', icon: FaGithub },
      { href: 'https://www.elba-fattoriabonaparte.it/', label: 'Visita', icon: FaGlobe },
    ],
    icon: FaStore,
  },
  {
    name: 'Flexicare',
    description:
      'Una piattaforma per la creazione e gestione appuntamenti per gli studi medici, ma anche assistente virtuale per aiutare i pazienti a trovare lo specialista giusto al momento giusto',
    links: [
      { href: 'https://github.com/MarcoRiformato/SaluteFlessibile', label: 'GitHub', icon: FaGithub },
      { href: 'https://www.flexicareitalia.it/', label: 'Visita', icon: FaGlobe },
    ],
    logo: logoFlexicare,
  },
  {
    name: 'Forum Giovani Elba (Nuova Versione)',
    description:
      'Funzionalità blog, gestione utenti, elezioni/sondaggi, tabellone Elbajobz e molto altro',
    links: [
      { href: 'https://github.com/MarcoRiformato/ForumGiovanile', label: 'GitHub', icon: FaGithub },
      { href: 'https://forumgiovanielba.it/', label: 'Visita', icon: FaGlobe },
    ],
    logo: logoForum,
  },
  {
    name: 'Law Firm Website',
    description:
      'Modello per il sito internet nel settore legale',
    links: [
      { href: 'https://github.com/MarcoRiformato/law-firm-website', label: 'GitHub', icon: FaGithub },
      { href: 'https://avvocatogiuseppeinglese.it/', label: 'Visita', icon: FaGlobe },
    ],
    icon: FaGavel,
  },
  {
    name: 'Forum Giovani Elba (Vecchia Versione)',
    description:
      'La prima versione del sito del forum, partita a novembre del 2022, contava 112 commit, poi ricreata ad agosto del 2023',
    links: [
      { href: 'https://github.com/MarcoRiformato/Old-Forum-Giovanile', label: 'GitHub', icon: FaGithub },
    ],
    logo: logoForum,
  },
  {
    name: 'MagTab',
    description:
      'Una tabella di visualizzazione che incrocia i dati di 3 sedi diverse per una gestione di magazzino unificata',
    links: [
      { href: 'https://github.com/MarcoRiformato/MagTab', label: 'GitHub', icon: FaGithub },
    ],
    icon: FaDatabase,
  },
]

export const metadata: Metadata = {
  title: 'Progetti',
  description: `Things I've made trying to put my dent in the universe.`,
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Progetti su cui ho lavorato."
      intro="Ho lavorato su molti progetti negli anni, ma questi sono i principali che posso mostrare pubblicamente. Puoi dare una visita al sito o consultare il codice."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              ) : (
                <project.icon className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
              )}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <div className="relative z-10 mt-6 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200"
                >
                  <link.icon className="h-5 w-5 flex-none" />
                  <span className="ml-2">{link.label}</span>
                </a>
              ))}
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
