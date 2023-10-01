'use client'

import { ThemeSwitch } from './theme-switch'
import { siteConfig } from '@/config/site'
import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

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
            <div className="flex items-center">
              {siteConfig.navItems.map((item, index) => (
                <Button
                  key={index}
                  as={Link}
                  href={item.href}
                  size="sm"
                  className="text-sm"
                  radius="full"
                  variant="light"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </ul>
          <ThemeSwitch className="p-2" />
        </div>
      </div>
    </header>
  )
}
