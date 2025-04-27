'use client';

import { useState } from 'react';
import { MailIcon } from '@/components/MailIcon';
import { Button } from '@/components/Button';

export const ContactMe = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('marco.riformato@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contattami</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Hai un progetto in mente? Contattami via email.
      </p>
      <div className="mt-6 flex items-center gap-4">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          marco.riformato@gmail.com
        </span>
        <Button
          onClick={copyEmail}
          className="flex-none rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          aria-label="Copia email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 text-zinc-500 dark:text-zinc-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
            />
          </svg>
        </Button>
      </div>
      {copied && (
        <p className="mt-2 text-sm text-teal-500 dark:text-teal-400">
          Email copiata!
        </p>
      )}
    </div>
  );
}; 