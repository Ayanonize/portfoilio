import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <header class="text-white body-font bg-[rgba(65,47,144,.93)]" >
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
            <img src="https://atom.redpixelthemes.com/assets/img/logo.svg" alt="" className="ml-3 w-24 lg:w-48" />
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center" >
            <a class="mr-5 hover:text-gray-900" >First Link</a>
            <a class="mr-5 hover:text-gray-900" >Second Link</a>
            <a class="mr-5 hover:text-gray-900" >Third Link</a>
            <a class="mr-5 hover:text-gray-900" >Fourth Link</a>
          </nav>
        </div>
      </header>
      <div className="h-screen bg-[rgba(65,47,144,.93)] flex justify-center items-center">
        <div className="flex items-center">
          <div class="rounded-full border-8 border-[rgba(65,47,144,.93)] shadow-xl" >
            <img src="https://pbs.twimg.com/profile_images/1481905318942867457/J0ylsqPq_400x400.jpg" class="h-48 rounded-full sm:h-56" alt="author" />
          </div>
          <div>
            <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0" >
              <h1 class="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl" >
                Hello I'm Ayan Khan!
              </h1>
              <div class="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start" >
                <div class="flex items-center justify-center pl-0 sm:justify-start md:pl-1" >
                  <p class="font-body text-lg uppercase text-white" >Let's connect</p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-15">
        <div className="p-24" >
          <p>who am i</p>
        </div>
      </section>
    </>
  )
}
