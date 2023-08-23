import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { Heading } from "@ignite-ui/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Heading as="h1">Hello World</Heading>
  )
}
