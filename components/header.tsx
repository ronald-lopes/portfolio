'use client'

import { ThemeSwitch } from './theme-switch'
import { siteConfig } from '@/config/site'
import React from 'react'
import Image from 'next/image'
import { Tabs, Tab } from '@nextui-org/react'

export const Header = () => {
  return (
    <header className="first-letter: fixed flex w-screen flex-row items-center justify-center bg-white bg-opacity-80 px-4 py-1 backdrop-blur-md dark:bg-black dark:bg-opacity-80">
      <div className="flex w-full max-w-5xl justify-center sm:justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />
          <p className="font-bold text-inherit">Ronald Lopes</p>
        </a>

        <ul className="hidden items-center justify-between sm:flex">
          <Tabs variant="underlined" size="lg" aria-label="Menu items">
            {siteConfig.navItems.map((item) => (
              <Tab
                key={item.id}
                className="p-0"
                title={
                  <a className="px-2 py-2 dark:text-gray-200" href={item.href}>
                    {item.label}
                  </a>
                }
              />
            ))}
          </Tabs>

          <ThemeSwitch />
        </ul>
      </div>
    </header>
  )
}
