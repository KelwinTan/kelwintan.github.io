import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import groot from '@/images/groot.gif'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Kelwin Tantono.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={groot}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I am Kelwin Tantono.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I am a passionate software engineer with a proven track record of contributing to innovative projects in the tech industry. With a background in developing and contributing to e-commerce giants like Tokopedia and Gojek.
            </p>
            <p>
              During my tenure at Tokopedia, I played a pivotal role in enhancing seller home analytics and optimizing the Tokopedia Affiliate platform, contributing to the growth and efficiency of Tokopedia’s platform.
            </p>
            <p>
              At Gojek, I had the opportunity to work on the GoFood Open API, where I delved into the intricacies of creating seamless and dev-friendly experiences for integrating with GoFood.
            </p>
            <p>
              Currently, I am channeling my expertise and entrepreneurial spirit as the Founding Software Engineer at Gravhl, a cutting-edge platform that is set to revolutionize the industry. While I cannot disclose all the details just yet, I am excited to be at the forefront of this groundbreaking initiative.
            </p>
            <p>
            If you have a passion for technology and innovation, or if you are interested in my current endeavors at Gravhl, I would love to connect and explore potential opportunities together. Feel free to reach out and let’s create something extraordinary!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink href="https://github.com/KelwinTan" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/kelwintantono" icon={LinkedInIcon} className="mt-4">
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:lw.kelwin@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              lw.kelwin@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
