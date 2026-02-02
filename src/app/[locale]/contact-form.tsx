"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";

import {
  EnvelopeIcon,
  HashtagIcon,
  LinkIcon,
  PhoneIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import { useScopedI18n } from "@/locales/client";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const scopedT = useScopedI18n("contact");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto mb-16 text-center">
        <TypographySafe
          {...({} as any)}
          as="h2"
          color="blue-gray"
          className="mb-4 text-3xl font-bold"
        >
          {scopedT('title')}
        </TypographySafe>
        <TypographySafe
          {...({} as any)}
          variant="lead"
          className="mx-auto w-full lg:w-6/12 text-gray-600"
        >
         {scopedT('subtitle')}
        </TypographySafe>
      </div>

      <Card
        {...({} as any)}
        shadow={true}
        className="container mx-auto border border-gray/50"
      >
        <CardBody
          {...({} as any)}
          className="grid grid-cols-1 lg:grid-cols-7 md:gap-10"
        >
          <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
            <TypographySafe
              {...({} as any)}
              variant="h4"
              color="white"
              className="mb-2"
            >
              {scopedT('infoTitle')}
            </TypographySafe>
            <TypographySafe
              {...({} as any)}
              variant="lead"
              className="mx-auto mb-8 text-base !text-gray-500"
            >
              {scopedT('infoDescription')}
            </TypographySafe>

            <div className="flex gap-5">
              <PhoneIcon className="h-6 w-6 text-white" />
              <TypographySafe
                {...({} as any)}
                variant="h6"
                color="white"
                className="mb-2"
              >
                +(229) 01 62 50 88 30
              </TypographySafe>
            </div>
            <div className="flex my-2 gap-5">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <TypographySafe
                {...({} as any)}
                variant="h6"
                color="white"
                className="mb-2"
              >
                georginodgbouko@gmail.com
              </TypographySafe>
            </div>
            <div className="flex mb-10 gap-5">
              <HashtagIcon className="h-6 w-6 text-white" />
              <TypographySafe
                {...({} as any)}
                variant="h6"
                color="white"
                className="mb-2"
              >
                in/georgino-bouko-0666aa195
              </TypographySafe>
            </div>
          </div>

          {/* Formulaire */}
          <div className="col-span-4 p-5 lg:px-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                {/* @ts-ignore */}
                <Input
                  name="from_name"
                  label={scopedT('form.fullName')}
                  color="gray"
                  size="lg"
                  required
                />
                {/* @ts-ignore */}
                <Input
                  name="from_email"
                  label={scopedT('form.email')}
                  type="email"
                  color="gray"
                  size="lg"
                  required
                />
              </div>

              {/* @ts-ignore */}
              <div className="mb-6">
                <Input
                  {...({} as any)}
                  name="subject"
                  label={scopedT('form.subject')}
                  color="gray"
                  size="lg"
                  className="mb-6"
                />
              </div>

              {/* @ts-ignore */}
              <Textarea
                name="message"
                label={scopedT('form.message')}
                color="gray"
                size="lg"
                rows={6}
                className="mb-6"
                required
              />

              {success && (
                <TypographySafe
                  {...({} as any)}
                  className="mb-4 text-green-600"
                >
                  {scopedT('feedback.success')}
                </TypographySafe>
              )}

              {error && (
                <TypographySafe {...({} as any)} className="mb-4 text-red-600">
                  {scopedT('feedback.error')}
                </TypographySafe>
              )}

              <div className="flex justify-end">
                <Button
                  {...({} as any)}
                  color="gray"
                  size="md"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? scopedT('form.sending') : scopedT('form.submit')}
                </Button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default ContactForm;
