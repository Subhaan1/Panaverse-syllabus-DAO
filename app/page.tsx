'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/Header/header'
import { Box } from '@chakra-ui/react'
import LargeWithNewsletter from './components/Footer/footer'
import CaptionCarousel from './components/Hero/hero'
import About from './components/About/about'
import Testinomials from './components/Testinomials/testinomials'
import BasicStatistics from './components/Proud/proud'

export default function Home() {
  return (
    <>
    <Nav></Nav>
  <CaptionCarousel></CaptionCarousel>
  <BasicStatistics></BasicStatistics>
  <About></About>
  <Testinomials></Testinomials>
    <LargeWithNewsletter></LargeWithNewsletter>
    </>
    
  )
}
