import AboutHero from '@/components/shared/AboutHero'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
	title: "About Proxy",
	description: "Hi Im Proxy I develop User Interface for web applications",
};


const AboutPage = () => {
  return (
    <section className='w-full'>
      <h1 className='h4-medium pb-8'>About</h1>
      <AboutHero/>
    </section>
  )
}

export default AboutPage