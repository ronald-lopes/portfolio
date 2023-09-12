'use client'

import { ThemeSwitch } from './theme-switch'
import { siteConfig } from '@/config/site'
import React from 'react'
import Image from 'next/image'
import { Tabs, Tab } from '@nextui-org/react'

export const Header = () => {
  return (
    <header className="flex items-center justify-center flex-row fixed py-1 px-4 first-letter: w-screen bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-80 backdrop-blur-md">
      <div className="flex justify-center sm:justify-between w-full max-w-5xl">
        <a href="/" className="flex gap-2 items-center">
          <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />
          <p className="font-bold text-inherit">Ronald Lopes</p>
        </a>

        <ul className="hidden sm:flex justify-between items-center">
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
