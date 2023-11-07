import './App.css';
import Main from './components/Main';
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import {Home} from './pages/Home';
import {Video} from './pages/Video';



function App() {
  return (
      <>
        <div class="bg-zinc-950 h-screen">
          <nav class="bg-zinc-950 px-6 relative shadow-md  shadow-red-950">
            <div class="flex flex-row justify-between items-center py-2">
              <h3 class="font-semibold text-3xl text-white">Campos Design</h3>
              <div class="text-white group flex flex-col items-center shadow-sm ">
                <button class="p-2 rounded-lg md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-10 fill-current" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
                </button>
                <div class="hidden group-hover:block md:block absolute md:static bg-zinc-950 inset-x-0 top-16 py-3 shadow-md md:shadow-none text-white">
                  <div class="flex flex-row justify-center items-center text-center font-semibold text-white  ">
                    <a class="px-6 py-1 flex flex-col md:flex-row md:items-center hover:text-red-700 duration-300" href="#"> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="fill-current h-10 md:h-5 px-2 " viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/><path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/></svg>
                     Home 
                    </a>
                    <a class="px-6 py-1 flex flex-col md:flex-row md:items-center hover:text-red-700 duration-300" href="#"> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="fill-current h-10 md:h-5 px-2" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/></svg>
                      About 
                    </a>
                    <a class="px-6 py-1 flex flex-col md:flex-row md:items-center hover:text-red-700 duration-300" href="#"> 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="fill-current h-10 md:h-5 px-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/><path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/></svg>
                      Design 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
	        <div class="bg-zinc-950 text-white py-5 sm:py-10 lg:py-20">
		        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			        <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				        <h1 class="text-3xl md:text-5xl p-2 text-red-600 tracking-loose  ">Campos Design</h1>
				        <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Race: Look faster
				        </h2>
				        <p class="text-sm md:text-base text-gray-50 mb-4">Look more faster than you rival.</p>
				        <a href="#"
				        	class="bg-transparent hover:bg-red-600 text-red-600 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-red-600 hover:border-transparent">
				        	Contact Now</a>
			        </div>

			        <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
			        	<div class="h-48 flex flex-wrap content-center">
                  <div className=''>
                    <img className='hover:animate-pulse inline-block mt-28 hidden xl:block' src='https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png'></img>
                  </div>
                  <div>
                    <img className='hover:animate-pulse inline-block mt-24 md:mt-0 p-8 md:p-0' src='https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png'></img>
                  </div>
                  <div>
                    <img className='hover:animate-pulse inline-block mt-28 hidden lg:block' src='https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png'></img>
                  </div>               
                </div>
              </div>
            </div>
            
          </div>
          <div className='text-white justify-center flex py-10 sm:py-0 lg:py-0'>
          <div>
            <div class="flex gap-8 sm:gap-12 md:gap-12 lg:gap-52 grayscale">
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg" class="h-8 sm:h-10 w-auto lg:h-16" alt="" />
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg" class="h-8 sm:h-10 w-auto lg:h-16" alt="" />
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg" class="h-8 sm:h-10 w-auto lg:h-16" alt="" />
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg" class="h-8 sm:h-10 w-auto lg:h-16" alt="" />


              </div>
              
          </div>
          
        </div>

          <div className=' items-center justify-center py-10'>
            <div className='text-white text-center lg:pt-16'>
              <h2 className='text-xl sm:text-sm md:text-lg lg:text-xl text-bold '> APTITUDES</h2>
              <h1 className='text-2xl sm:text-sm md:text-lg lg:text-4xl'>Nos destacamos por un alta perfomance</h1>
            </div>
            <div className='items-center justify-center flex gap-8 sm:gap-12 md:gap-12 lg:gap-52 grayscale py-10 pt-20'>
              <div>
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg" class="h-8 sm:h-10 w-auto lg:h-16" alt="" />
                <p className='text-white text-center text-xs lg:text-xl'>Feedback</p>
                </div>

                <div>
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg" class="h-8 sm:h-10 w-auto lg:h-16" alt="" />
                <p className='text-white text-center text-xs lg:text-xl'>Soporte</p>
                </div>

                <div>
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg" class="h-8 sm:h-10 w-auto lg:h-16 " alt="" />
                <p className='text-white text-center text-xs lg:text-xl'>Cronogramas</p>
                </div>

                <div>
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg" class="h-8 sm:h-10 w-auto lg:h-16" alt="" />
                <p className='text-white text-center text-xs lg:text-xl onclioc'>Cronogramas</p>
                </div>   
            </div>

          <div> 
            <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
              <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                  <div className="max-w-xl mb-6">
                    
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none">
                      Race Liveries
                      <br className="hidden md:block" />
                      For faster people{' '}
                      <span className="inline-block text-deep-purple-accent-400">
                        Let the slow look for you rival
                      </span>
                    </h2>
                    <p className="text-base text-white md:text-lg">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae. explicabo.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <a 
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    ></a>
                    
                  </div>
                </div>
              </div>

          <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
            <img
              src="https://kitwind.io/assets/kometa/full-browser.png"
              className="hover:scale-125 transition duration-500 cursor-pointer object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
              alt=""></img>
            </div>
          </div>

          <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
            <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
              <img
                src="https://kitwind.io/assets/kometa/laptop.png"
                className="hover:scale-125 transition duration-500 cursor-pointer object-cover object-right w-full h-auto lg:w-auto lg:h-full " 
                alt=""
              />
            </div>
            <div className="relative flex justify-end max-w-xl mx-auto xl:pr-0 lg:max-w-screen-xl">
              <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                <div className="max-w-xl mb-6">
                  
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none">
                  Neque porro quisquam est qui dolorem ipsum
                    <br className="hidden md:block" />
                    est qui dolorem ipsum{' '}
                    <span className="inline-block text-deep-purple-accent-400">
                    ipsum
                    </span>
                  </h2>
                  <p className="text-base text-white md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem asdasdasdasda
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae. explicabo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over{' '}
            <span className="inline-block text-deep-purple-accent-400">
              a lazy dog
            </span>
          </h2>
          <p className="text-base text-white md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-900 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
          <a
            href="/"
            aria-label=""
            className="text-white inline-flex items-center font-semibold transition-colors duration-200 hover:text-red-600"
          >
            Learn more
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
          className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
          alt=""
        />
      </div>


      
    </div>



    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-30">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              CamposDesign
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-white">Phone:</p>
            <a
              
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-white hover:text-red-600"
            >
              +54 000 000 0000
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-white hover:text-red-600"
            >
              info@lorem.mail
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-white hover:text-red-600"
            >
              Cordoba, Argentina
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-white">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
            spare ribs salami.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">
          © Copyright 2023 CamposDesign. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
    
       
      </>
        
          
  )
}

export default App
