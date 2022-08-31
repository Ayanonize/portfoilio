import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>

      <div style={{ backgroundImage: 'url(https://atom.redpixelthemes.com/assets/img/bg-hero.jpg)' }}>
        <header className="text-white body-font bg-[rgba(65,47,144,.80)]" >
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
              <img src="https://atom.redpixelthemes.com/assets/img/logo.svg" alt="" className="ml-3 w-24 lg:w-48" />
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" >
              <a className="mr-5 hover:text-gray-900" >First Link</a>
              <a className="mr-5 hover:text-gray-900" >Second Link</a>
              <a className="mr-5 hover:text-gray-900" >Third Link</a>
              <a className="mr-5 hover:text-gray-900" >Fourth Link</a>
            </nav>
          </div>
        </header>
        <div className="md:h-screen bg-[rgba(65,47,144,.80)] flex justify-center items-center md:p-0 p-24">
          <div className="md:flex items-center">
            <div className="flex item-center">
              <div className="rounded-full border-8 border-[rgba(65,47,144,.80)] shadow-xl mx-auto" >
                <img src="https://pbs.twimg.com/profile_images/1481905318942867457/J0ylsqPq_400x400.jpg" className="h-48 rounded-full sm:h-56 " alt="author" />
              </div>
            </div>
            <div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0" >
                <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl " >
                  Hello I&apos;m Ayan Khan!
                </h1>
                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start" >
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1" >
                    <p className="font-body text-lg uppercase text-white" >Let&apos;s connect</p>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-15">
        <div className="md:p-24 p-10 bg-gray-200" >
          <div className="md:flex">
            <div className="md:w-[60%]">
              <p className='text-7xl font-header font bold text-[rgba(65,47,144,.93)] uppercase'>who am i?</p>
              <p className='pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl'>I&apos;m Ayan Khan A Full Stack Developer</p>
              <p className="pt-6 font-body leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className='md:w-[40%]'>
              <div className="md:p-10">
                <div>

                  <div className="my-5">
                    <div className="flex justify-between align-center ">
                      <span className="text-md font-medium text-[rgba(65,47,144,.93)]">Python</span>
                      <span className="text-xl font-medium text-[rgba(65,47,144,.93)]">89%</span>
                    </div>
                    <div className="w-full rounded-full h-2.5 bg-gray-300">
                      <div className="bg-[rgba(65,47,144,.93)] h-2.5 rounded-full" style={{ width: "89%" }}></div>
                    </div>
                  </div>
                  <div className="my-5">
                    <div className="flex justify-between ">
                      <span className="text-md font-medium text-[rgba(65,47,144,.93)]">JavaScript</span>
                      <span className="text-xl font-medium text-[rgba(65,47,144,.93)]">80%</span>
                    </div>
                    <div className="w-full rounded-full h-2.5 bg-gray-300">
                      <div className="bg-[rgba(65,47,144,.93)] h-2.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div className="my-5">
                    <div className="flex justify-between ">
                      <span className="text-md font-medium text-[rgba(65,47,144,.93)]">Html / Css</span>
                      <span className="text-xl font-medium text-[rgba(65,47,144,.93)]">90%</span>
                    </div>
                    <div className="w-full rounded-full h-2.5 bg-gray-300">
                      <div className="bg-[rgba(65,47,144,.93)] h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>


                  <div className="my-5">
                    <div className="flex justify-between ">
                      <span className="text-md font-medium text-[rgba(65,47,144,.93)]">PHP</span>
                      <span className="text-xl font-medium text-[rgba(65,47,144,.93)]">70%</span>
                    </div>
                    <div className="w-full rounded-full h-2.5 bg-gray-300">
                      <div className="bg-[rgba(65,47,144,.93)] h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>


                  <div className="my-5">
                    <div className="flex justify-between ">
                      <span className="text-md font-medium text-[rgba(65,47,144,.93)]">C#</span>
                      <span className="text-xl font-medium text-[rgba(65,47,144,.93)]">60%</span>
                    </div>
                    <div className="w-full rounded-full h-2.5 bg-gray-300">
                      <div className="bg-[rgba(65,47,144,.93)] h-2.5 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:p-24 p-10 bg-white" >
          <h1 className="text-center font-header text-4xl font-semibold uppercase text-[rgba(65,47,144,.93)] sm:text-5xl lg:text-6xl">HERE&apos;S WHAT I&apos;M GOOD AT
          </h1>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            These are the services Ioffer
          </h3>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="data:image/png;base64,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" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://cdn.iconscout.com/icon/free/png-256/flask-51-285137.png" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://www.djangoproject.com/m/img/logos/django-logo-positive.png" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://imgs.search.brave.com/dxd0HDWNJNmgXwcKob0uUirY__0vYdp6AKW_kGH0jpg/rs:fit:1098:577:1/g:ce/aHR0cHM6Ly9tbWEu/cHJuZXdzd2lyZS5j/b20vbWVkaWEvNTk5/MDUzL01vbmdvREJf/TG9nby5qcGc_cD1m/YWNlYm9vaw" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="                https://imgs.search.brave.com/TLS6tVWPyhKYKzDTYqOHvHmdfFMom4q7OsK2rr36-gY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDUvTXlTUUxf/bG9nb19sb2dvdHlw/ZS5wbmc" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src=" https://imgs.search.brave.com/iQcS5gTe9ixUY1Ve5n4mozJiJuUKf83jQFw7Xt8IOMc/rs:fit:1024:175:1/g:ce/aHR0cDovL2xvZ29u/b2lkLmNvbS9pbWFn/ZXMvbW9uZ29vc2Ut/bG9nby5wbmc" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>


                
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://www.onu.ro/wp/wp-content/uploads/2020/03/react-native-logo-884x1024.png" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="data:image/png;base64,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" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://website-admin.geekyants.com/image-resize-cache/eyJpZCI6MjgwMywidCI6InJlc2l6ZSIsInciOjEyMDAsImgiOjgwMCwicSI6OTAsInYiOjF9.png" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://cdn-icons-png.flaticon.com/512/5969/5969294.png" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://iconape.com/wp-content/files/mm/116995/svg/yii.svg" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://i.stack.imgur.com/dMXbE.png" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://cdn-icons-png.flaticon.com/512/5969/5969184.png" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center p-5" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />

                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 duration-700">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                      <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


        <div className="p-24 bg-gray-200" >
          <div>
            <p className='text-center font-header text-4xl font-semibold uppercase text-[rgba(65,47,144,.93)] sm:text-5xl lg:text-6xl'>MY LATEST CLIENTS</p>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <img src="https://atom.redpixelthemes.com/assets/img/logo-coca-cola.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>
              <span className="m-8 block">
                <img src="https://atom.redpixelthemes.com/assets/img/logo-apple.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <img src="https://atom.redpixelthemes.com/assets/img/logo-netflix.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <img src="https://atom.redpixelthemes.com/assets/img/logo-amazon.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <img src="https://atom.redpixelthemes.com/assets/img/logo-stripe.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>
            </div>
          </div>
        </div>


        <div className="container py-16 md:py-20 mx-auto
        " id="contact">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-[rgba(65,47,144,.93)] sm:text-5xl lg:text-6xl">
            Here&apos;s a contact form
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Have Any Questions?
          </h4>
          <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <p className="font-body text-grey-10">
              Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
              condimentum turpis nisl sem, viverra habitasse urna ante lobortis
              fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
              accumsan.
            </p>
          </div>
          <form className="mx-auto w-full pt-10 sm:w-3/4">
            <div className="flex flex-col md:flex-row">
              <input className="mr-3 w-full rounded-md border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5 border-2" placeholder="Name" type="text" id="name" />
              <input className="mt-6 w-full rounded-md border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5 border-2" placeholder="Email" type="text" id="email" />
            </div>
            <textarea className="mt-6 w-full rounded-md border-grey-50 px-4 py-3 font-body text-black md:mt-8 border-2" placeholder="Message" id="message" cols="30" rows="10"></textarea>
            <button className="mt-6 flex items-center justify-center rounded-md bg-[rgba(65,47,144,.93)] px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-200">
              Send
            </button>
          </form>

        </div>


      </section>

      <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24" style={{ backgroundImage: "url(https://atom.redpixelthemes.com/assets/img/bg-cta.jpg)" }}>
        <div className="container mx-auto relative z-30">
          <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            Keep <span className="font-bold">up-to-date</span> <br />
            with what I&apos;m up to
          </h3>
          <form className="mt-6 flex flex-col justify-center sm:flex-row">
            <input className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3" type="text" id="email" placeholder="Give me your Email" />
            <button className="mt-2 rounded bg-yellow-500 px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-[rgba(65,47,144,.93)] hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
              Join the club
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[rgba(65,47,144,.93)]">
        <div className="container mx-auto flex flex-col justify-between p-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2022. All right reserved, AYANONIZE.
          </p>
        </div>
      </div>
    </>
  )
}
