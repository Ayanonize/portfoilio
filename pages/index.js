import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <header class="text-white body-font bg-[rgba(65,47,144,.93)]" >
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
            <span class="ml-3 text-xl text-white" >Tailblocks</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center" >
            <a class="mr-5 hover:text-gray-900" >First Link</a>
            <a class="mr-5 hover:text-gray-900" >Second Link</a>
            <a class="mr-5 hover:text-gray-900" >Third Link</a>
            <a class="mr-5 hover:text-gray-900" >Fourth Link</a>
          </nav>
        </div>
      </header>

    </>
  )
}
