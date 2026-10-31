'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Mail, MapPin } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Page() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground sm:px-8 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_80px_-32px_hsl(var(--foreground)/0.28)] lg:grid-cols-[0.85fr_1.15fr]">
          <section className="relative flex flex-col justify-between overflow-hidden bg-primary p-8 text-primary-foreground sm:p-12 lg:p-14">
            <div className="absolute -right-28 -top-28 size-72 rounded-full border border-primary-foreground/15" />
            <div className="absolute -bottom-36 -left-24 size-80 rounded-full border border-primary-foreground/10" />
            <div className="relative">
              <div className="mb-16 flex size-11 items-center justify-center rounded-2xl bg-primary-foreground/10 ring-1 ring-primary-foreground/20">
                <Mail aria-hidden="true" className="size-5" />
              </div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">Get in touch</p>
              <h1 className="max-w-md text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s make something great together.</h1>
              <p className="mt-6 max-w-sm text-base leading-7 text-primary-foreground/70">Have a question, an idea, or just want to say hello? Send us a note and we&apos;ll get back to you shortly.</p>
            </div>
            <div className="relative mt-16 flex flex-col gap-4 text-sm text-primary-foreground/70">
              <a className="flex items-center gap-3 transition-colors hover:text-primary-foreground" href="mailto:hello@example.com"><Mail aria-hidden="true" className="size-4" />hello@example.com</a>
              <div className="flex items-center gap-3"><MapPin aria-hidden="true" className="size-4" />Brooklyn, New York</div>
            </div>
          </section>

          <Card className="rounded-none border-0 shadow-none">
            <CardHeader className="p-8 pb-6 sm:p-12 sm:pb-8">
              <CardTitle className="text-2xl tracking-tight">Send us a message</CardTitle>
              <CardDescription>Fill out the form below and our team will be in touch.</CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8 sm:px-12 sm:pb-12">
              {submitted ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check aria-hidden="true" className="size-5" /></div>
                  <h2 className="text-xl font-semibold">Message sent</h2>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">Thanks for reaching out. We&apos;ll get back to you as soon as possible.</p>
                  <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
                </div>
              ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <FieldGroup>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="name">Name</FieldLabel>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="subject">Subject</FieldLabel>
                      <Input id="subject" name="subject" placeholder="How can we help?" required />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea id="message" name="message" placeholder="Tell us a little more..." className="min-h-36 resize-y" required />
                    </Field>
                  </FieldGroup>
                  <div className="flex items-center justify-between gap-4 border-t border-border pt-6">
                    <p className="text-xs leading-5 text-muted-foreground">We&apos;ll only use your information to respond to your message.</p>
                    <Button type="submit" size="lg" className="shrink-0">Send message <ArrowUpRight aria-hidden="true" data-icon="inline-end" /></Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
