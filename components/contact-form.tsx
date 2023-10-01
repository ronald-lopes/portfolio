'use client'

import { Input, Button, Textarea } from '@nextui-org/react'
import { RocketLaunch } from '@phosphor-icons/react'
import axios from 'axios'
import React from 'react'

export const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false)
  const [formValue, setformValue] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('name', formValue.name)
    formData.append('email', formValue.email)
    formData.append('message', formValue.message)

    try {
      const response = await axios({
        method: 'post',
        url: process.env.NEXT_PUBLIC_FORM_URL,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      if (response.status === 200) {
        setSubmitted(true)
      }
    } catch (error) {
      alert('Something went wrong, please try again later')
      console.log(error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <div
        className="flex w-full flex-col items-center justify-center 
      rounded-3xl border p-6
      dark:border-content1 dark:bg-content1 sm:p-8 md:w-1/2 lg:w-2/5"
      >
        <p className="mb-6 text-center text-lg font-semibold">
          Feel free to contact me and
          <br className="hidden sm:block" /> I will get back to you as soon as I
          can.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center"
        >
          <fieldset className="flex w-full flex-col gap-4 lg:max-w-full">
            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <Input
                variant="flat"
                label="Name"
                name="name"
                placeholder="Your name"
                isRequired
                className="w-full"
                onChange={handleChange}
                isClearable
              />
              <Input
                variant="flat"
                label="Email"
                name="email"
                placeholder="Your email"
                type="email"
                isRequired
                className="w-full"
                onChange={handleChange}
                isClearable
              />
            </div>
            <div>
              <Textarea
                variant="flat"
                label="Your message"
                name="message"
                placeholder="Write your message here..."
                isRequired
                className="w-full"
                onChange={handleChange}
              />
            </div>
          </fieldset>
          {!submitted && (
            <Button
              className="mt-6 w-full lg:max-w-full"
              color="secondary"
              type="submit"
              size="md"
              endContent={<RocketLaunch size={24} />}
            >
              Get in touch
            </Button>
          )}
          {submitted && (
            <Button
              className="mt-6 w-full bg-emerald-600 text-white duration-1000 ease-in-out hover:bg-emerald-500 lg:max-w-full"
              type="button"
              size="md"
              onPress={() => setSubmitted(false)}
              endContent={<RocketLaunch size={24} className="animate-rocket" />}
            >
              Enviado!
            </Button>
          )}
        </form>
      </div>
    </>
  )
}
