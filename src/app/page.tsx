import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { MicrophoneIcon as HeroMicrophoneIcon } from '@heroicons/react/24/solid'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import venezia from '@/images/photos/venezia.webp'
import nave_pc from '@/images/photos/nave_pc.webp'
import rurale_pc from '@/images/photos/rurale_pc.webp'
import baker_hughes from '@/images/photos/baker_hughes.webp'
import bus_pc from '@/images/photos/bus_pc.webp'
import logoPhoops from '@/images/logos/phoops_srl_logo.webp'
import logoTecnoconference from '@/images/logos/tecnoconference_logo.webp'
import logoFlexicare from '@/images/logos/flexicare.webp'
import logoDeveloperway from '@/images/logos/developerway.webp'
import logoForum from '@/images/logos/forum_logo.webp'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { ContactMe } from '@/components/ContactMe'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Leggi articolo</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {role.logo === 'microphone' ? (
          <HeroMicrophoneIcon className="h-7 w-7 text-zinc-400 dark:text-zinc-500" />
        ) : (
          <Image src={role.logo} alt="" className="h-7 w-7 object-cover rounded-full" unoptimized />
        )}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Freelance',
      title: '',
      logo: logoPlanetaria,
      start: '2025-02',
      end: {
        label: 'Presente',
        dateTime: new Date().getFullYear().toString() + '-05',
      },
    },
    {
      company: 'Flexicare (Startup)',
      title: 'Sviluppatore web e consulente digitale esterno',
      logo: logoFlexicare,
      start: '2025-03',
      end: '2025-04',
    },
    {
      company: 'Tecnico eventi freelance',
      title: '',
      logo: 'microphone',
      start: '2024-10',
      end: {
        label: 'Presente',
        dateTime: new Date().getFullYear().toString() + '-05',
      },
    },
    {
      company: 'Developerway',
      title: 'Commerciale',
      logo: logoDeveloperway,
      start: '2024-10',
      end: '2025-02',
    },
    {
      company: 'Phoops s.r.l.',
      title: 'Analista programmatore',
      logo: logoPhoops,
      start: '2023-05',
      end: '2025-01',
    },
    {
      company: 'Forum Giovani Elba',
      title: 'Sviluppatore web, consulente digitale',
      logo: logoForum,
      start: '2023-08',
      end: {
        label: 'Presente',
        dateTime: new Date().getFullYear().toString() + '-05',
      },
    },
    {
      company: 'Tecnoconference – TC Group',
      title: 'Web Developer',
      logo: logoTecnoconference,
      start: '2022-09',
      end: '2023-04',
    },
    {
      company: 'Tecnoconference – TC Group',
      title: 'Tecnico informatico',
      logo: logoTecnoconference,
      start: '2020-10',
      end: '2022-09',
    },
  ]

  // Sort by current positions first, then by start date, with Forum Giovani Elba at the bottom
  resume.sort((a, b) => {
    // Forum Giovani Elba always goes to the bottom
    if (a.company === 'Forum Giovani Elba') return 1;
    if (b.company === 'Forum Giovani Elba') return -1;
    
    const isCurrentA = typeof a.end === 'object' && a.end.label === 'Presente';
    const isCurrentB = typeof b.end === 'object' && b.end.label === 'Presente';
    
    // If one is current and the other isn't, current comes first
    if (isCurrentA && !isCurrentB) return -1;
    if (!isCurrentA && isCurrentB) return 1;
    
    // If both are current or both are not current, sort by start date
    const getStart = (r: Role) => typeof r.start === 'string' ? r.start : r.start.dateTime;
    return getStart(b).localeCompare(getStart(a));
  });

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[venezia, nave_pc, rurale_pc, baker_hughes, bus_pc].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Sviluppatore web, project manager e consulente digitale
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Porto online idee di business con metodo e velocità. Faccio salire il traffico e trasformo i click in clienti, dati alla mano. Do visibilità alle attività locali su Google e sulle mappe. Background startup: marketing, disciplina e tenacia al servizio dei risultati.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/MarcoRiformato?tab=repositories"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/marco-riformato/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ContactMe />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
