'use client'

import { ThemeSwitch } from './theme-switch'
import { siteConfig } from '@/config/site'
import React from 'react'
import Image from 'next/image'
import { Tabs, Tab } from '@nextui-org/react'

export const Header = () => {
  return (
    <header
      className="
      fixed z-50 flex w-screen flex-row items-center justify-center 
      bg-white bg-opacity-80 px-4 py-2 backdrop-blur-md 
      dark:bg-black dark:bg-opacity-80 md:py-1"
    >
      <div className="flex w-full max-w-5xl justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />
          <p className="font-bold text-inherit">Ronald Lopes</p>
        </a>

        <div className="flex">
          <ul className="hidden items-center justify-between sm:flex">
            <Tabs
              aria-label="Menu items"
              variant="underlined"
              size="md"
              classNames={{
                tabList: 'relative w-full gap-0 rounded-none p-1',
                cursor: 'w-[50%]',
                tab: 'p-0',
                tabContent: 'p-0 hover:text-gray-500 dark:hover:text-gray-100',
              }}
            >
              {siteConfig.navItems.map((item) => (
                <Tab
                  key={item.id}
                  title={
                    <a className="px-2 py-3 text-[1rem]" href={item.href}>
                      {item.label}
                    </a>
                  }
                />
              ))}
            </Tabs>
          </ul>
          <ThemeSwitch className="p-2" />
        </div>
      </div>
    </header>
  )
}
