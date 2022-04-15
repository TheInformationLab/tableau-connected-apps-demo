import './App.css';
import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TableauEmbed from './components/TableauEmbed/TableauEmbed';
import ConnectedAppImg from './img/connectedapp.svg';
import CreateConnectedAppImg from './img/createConnectedApp.png';
import CreateSecretGif from './img/createSecret.gif';
import EmbedPlaygroundImg from './img/embedPlayground.png';
import BubblesImg from './img/bubbles.svg';
import ToDoList from './components/ToDoList/ToDoList';
import Sticky from 'react-sticky-el';
import Prism from 'prismjs';
import "./prism.css";

const navigation = [
  { name: 'Straight to Code', href: '#code' },
  { name: 'Getting Started', href: '#start' },
  { name: 'Server Side', href: '#server' },
  { name: 'Tableau in React', href: '#react' },
]

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export default function App() {
  const [ mobile, setMobile ] = useState();

  const handleWindowSizeChange = () => {
    const width = getWidth();
    setMobile(width <= 1050);
  }

  useEffect(() => {
    const width = getWidth();
    setMobile(width <= 1050);
    window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, [])

  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <Popover>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="https://www.theinformationlab.co.uk">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src={BubblesImg}
                        alt="The Information Lab"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigation.map((item) => (
                    <AnchorLink key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </AnchorLink>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={BubblesImg}
                        alt="The Information Lab"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <AnchorLink
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </AnchorLink>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Tableau Embedding API v3</span>
                <span className="block text-blue-600">& Connected Apps</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                A tutorial on how to get started embedding Tableau dashboards in a React web page using authentication
                via Connected Apps released with Tableau Server 2022.1 and Tableau Online.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-800" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              className="relative rounded-lg shadow-lg bg-white pt-20"
            >
              <TableauEmbed 
                viewUrl={"https://clientreporting.theinformationlab.co.uk/t/PublicDemo/views/IncomeStatement/IncomeStatement"}
                tokenUrl={"/api/jwt"}
              />
              <img src={ConnectedAppImg} width={200} className="bottom-16 absolute right-16 z-50"/>
            </div>
          </div>
        </div>
      </div>
      <section id='code'>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
            Want to get straight to the source code? Check it out on Github:
          </h2>
          <div className="text-center mt-8 mx-auto text-gray-400 hover:text-gray-300">
            <a href="https://github.com/TheInformationLab/tableau-connected-apps-demo" target={"_blank"} rel="noreferrer">
            <svg fill="currentColor" className="mx-auto" version="1.1" id="Layer_1" x="0px" y="0px" height={80} width={265} viewBox="0 0 375 113">
              <g>
                <path d="M75.3,49H45c-0.8,0-1.4,0.6-1.4,1.4v14.8c0,0.8,0.6,1.4,1.4,1.4h11.8V85c0,0-2.7,0.9-10,0.9
                  c-8.6,0-20.7-3.2-20.7-29.7c0-26.6,12.6-30.1,24.4-30.1c10.2,0,14.6,1.8,17.4,2.7c0.9,0.3,1.7-0.6,1.7-1.4L73,13.1
                  c0-0.4-0.1-0.8-0.5-1.1c-1.1-0.8-8.1-4.7-25.6-4.7c-20.2,0-40.9,8.6-40.9,49.9c0,41.3,23.7,47.5,43.7,47.5
                  c16.6,0,26.6-7.1,26.6-7.1c0.4-0.2,0.5-0.8,0.5-1.1V50.4C76.7,49.6,76.1,49,75.3,49z"/>
                <path d="M231.3,12.2c0-0.8-0.6-1.4-1.4-1.4h-17c-0.8,0-1.4,0.6-1.4,1.4c0,0,0,32.9,0,32.9h-26.6V12.2
                  c0-0.8-0.6-1.4-1.4-1.4h-17c-0.8,0-1.4,0.6-1.4,1.4v89.2c0,0.8,0.6,1.4,1.4,1.4h17c0.8,0,1.4-0.6,1.4-1.4V63.3h26.6
                  c0,0,0,38.1,0,38.1c0,0.8,0.6,1.4,1.4,1.4h17.1c0.8,0,1.4-0.6,1.4-1.4V12.2z"/>
                <g>
                  <g>
                    <path d="M107.4,24c0-6.1-4.9-11.1-11-11.1c-6.1,0-11,5-11,11.1c0,6.1,4.9,11.1,11,11.1
                      C102.5,35.1,107.4,30.1,107.4,24z"/>
                    <path d="M106.2,82.6c0-2.3,0-41.2,0-41.2c0-0.8-0.6-1.4-1.4-1.4h-17c-0.8,0-1.5,0.8-1.5,1.6c0,0,0,49.5,0,59
                      c0,1.7,1.1,2.2,2.5,2.2c0,0,7.3,0,15.3,0c1.7,0,2.1-0.8,2.1-2.3C106.2,97.4,106.2,85,106.2,82.6z"/>
                  </g>
                </g>
                <path d="M296,40.2h-16.9c-0.8,0-1.4,0.6-1.4,1.4v43.7c0,0-4.3,3.1-10.4,3.1c-6.1,0-7.7-2.8-7.7-8.7c0-6,0-38.1,0-38.1
                  c0-0.8-0.6-1.4-1.4-1.4H241c-0.8,0-1.4,0.6-1.4,1.4c0,0,0,23.3,0,41c0,17.7,9.9,22.1,23.5,22.1c11.2,0,20.1-6.2,20.1-6.2
                  s0.4,3.2,0.6,3.6c0.2,0.4,0.7,0.8,1.2,0.8l10.9,0c0.8,0,1.4-0.6,1.4-1.4l0-59.9C297.4,40.8,296.8,40.2,296,40.2z"/>
                <path d="M342.3,38.2c-9.6,0-16.1,4.3-16.1,4.3V12.2c0-0.8-0.6-1.4-1.4-1.4h-17.1c-0.8,0-1.4,0.6-1.4,1.4v89.2
                  c0,0.8,0.6,1.4,1.4,1.4c0,0,11.9,0,11.9,0c0.5,0,0.9-0.3,1.2-0.8c0.3-0.5,0.7-4.1,0.7-4.1s7,6.6,20.2,6.6
                  c15.5,0,24.4-7.9,24.4-35.4C366.1,41.8,351.9,38.2,342.3,38.2z M335.6,88.4c-5.9-0.2-9.8-2.8-9.8-2.8V57.3c0,0,3.9-2.4,8.7-2.8
                  c6.1-0.5,12,1.3,12,15.8C346.4,85.6,343.8,88.7,335.6,88.4z"/>
                <path d="M155.2,40h-12.8c0,0,0-16.9,0-16.9c0-0.6-0.3-1-1.1-1h-17.4c-0.7,0-1,0.3-1,0.9v17.5c0,0-8.7,2.1-9.3,2.3
                  c-0.6,0.2-1,0.7-1,1.4v11c0,0.8,0.6,1.4,1.4,1.4h8.9c0,0,0,11.5,0,26.4c0,19.6,13.7,21.5,23,21.5c4.2,0,9.3-1.4,10.1-1.7
                  c0.5-0.2,0.8-0.7,0.8-1.3l0-12.1c0-0.8-0.7-1.4-1.4-1.4c-0.7,0-2.7,0.3-4.6,0.3c-6.3,0-8.4-2.9-8.4-6.7c0-3.8,0-25.1,0-25.1h12.8
                  c0.8,0,1.4-0.6,1.4-1.4V41.4C156.6,40.7,156,40,155.2,40z"/>
              </g>
            </svg>
            </a>
          </div>
        </div>
      </div>
      </section>
      <div className="relative pt-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <section id='start'>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                Getting Started
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Working with React & Connected Apps
              </span>
            </h1>
            <p className="mt-8 text-md text-gray-500 leading-8">
              In order to make use of the new <a href="https://help.tableau.com/current/api/embedding_api/en-us/index.html" target={"_blank"} rel="noreferrer">Tableau Embedding API v3 </a> 
              with React there are two problems we need to tackle. On the client side we need to reference the API library in our 
              React application and on the server side we need to implement JSON Web Tokens to allow us to authenticated against a Tableau Server.
            </p>
            <div className="mt-6 prose prose-blue prose-lg text-md text-gray-500 mx-auto mb-20">
              <h2>Reference Material</h2>
              <ul>
                <li>Tableau Embedding API v3</li>
                <li><a href="https://help.tableau.com/current/online/en-us/connected_apps.htm" target={"_blank"} rel="noreferrer">How Connected Apps Work</a></li>
                <li><a href="https://help.tableau.com/current/online/en-us/connected_apps_troubleshoot.htm" target={"_blank"} rel="noreferrer">Troubleshoot Connected Apps</a></li>
              </ul>
              <h2>What we're trying to achieve</h2>
              <p>
                Tableau dashboards are really easy to embed into a web page, indeed at its most simple you click on a dashboard's 'Share' button
                and then on 'Copy Embed Code'. That embed code will embed a simple JS package in your web page as well as the DIV tags required
                to place the viz. The embedded dashboard will be fully functional however the code does nothing to tackle user authorisation and requires 
                the user's browser to either authenticate against or have an active session with the Tableau Server.
              </p>
              <p>
                While embedding public dashboards, for instance from Tableau Public, doesn't require authorisation to be considered it does 
                apply to almost all Tableau Server implementations as well as all Tableau Online sites. The assumption here is a dashboard should be 
                secured behind an existing application login such as a customer-facing application, company portal, intranet or extranet. Once the
                user has authenticated against that existing login their username is then passed to the Tableau Server to both verify they are 
                licensed to use the server as well as authorised to view the dashboard they are requesting. The end user should also not need to be 
                aware of what's going on in the background and shouldn't need to login again directly with the Tableau Server.
              </p>
              <p>
                To achieve this seamless embedding experience we'll make use of the new Tableau Embedding API v3 along with Connected Apps made available
                in Tableau Server 2022.1 and Tableau Online.
              </p>
              <h2>
                The Technology Stack
              </h2>
              <p>
                As the title of this tutorial suggests the client side application will make use of <b>React</b>. The React app should have already implemented 
                some form of user authentication so that when it comes to embedding the dashboard all you have to do is tell Tableau which user has logged
                in. If you'd like an authentication solution which is super easy to implement we'd recommend <a href="https://auth0.com/" target={"_blank"} rel="noreferrer">auth0</a>.
                It is the React web app that will communicate with the Tableau Server to load the dashboard.
              </p>
              <p>
                On the server side we need to generate a JSON Web Token (JWT) which contains a secret code we'll create in Tableau Server as well as the username
                of the end-user of our web app. Neither of these items should be accessible by the end user which is why the token needs to generated server-side.
                It of course also means that the server needs to be aware of who is currently using the web app, again <a href="https://auth0.com/" target={"_blank"} rel="noreferrer">auth0</a>
                &nbsp;has some great packages and tutorials for implementing this. In this example we'll be using a serverless function hosted by <b>Vercel</b> however
                this can easily be ported across into AWS Lambda or a standard NodeJS Server.
              </p>
            </div>
          </div>
        </div>
        </section>
        <section id='server'>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                Server Side
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Generating a JSON Web Token
              </span>
            </h1>
            <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto mb-20">
              <p>
                Put simply a JSON Web Token (or JWT from now on) is an encoded and signed string of characters that when decoded contains some information:
              </p>
              <ul>
                <li>The Tableau Server username or email address (in the case of Tableau Online) of the end-user requesting the dashboard</li>
                <li>A client ID generated on Tableau Server's Connected Apps page</li>
                <li>A secret ID linked to that client ID</li>
                <li>The secret value which will be used to sign the token</li>
              </ul>
            </div>
          </div>
          <div className='absolute z-10 -mt-20'>
          <Sticky>
            <ToDoList mobile={mobile}/>
          </Sticky>
        </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={CreateConnectedAppImg}
                    alt="Create Connected App in Tableau Server"
                    width={706}
                    height={576}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span className="ml-2">Create Connected App in Tableau Server</span>
                </figcaption>
              </figure>
            </div>
            <div className="mt-8 lg:mt-0 xl:grid xl:grid-cols-2">
              <div className="prose prose-blue prose-lg text-gray-500  lg:row-start-1 lg:col-start-2">
                <h2>Register your App</h2>
                <p>
                  In order to embed a dashboard you first need to tell Tableau Server/Online about your web app. While logged in as a <b>site 
                  admin</b> go to your site settings and switch to the <b>Connected Apps</b> tab. Click the <b>New Connected App</b> button to 
                  bring up the Create Connected App dialog.
                </p>
                <ol>
                  <li>(Required) Give the app a name which relates to the web app in which you're embedding the dashboard</li>
                  <li>(Recommended) If you want to limit the scope of access for the app choose a project in which the dashboard is saved.</li>
                  <li>(Recommended) Specify the domain of the web app in which you'll be embedding the dashboard. While in development it's fine 
                    to leave this as 'All domains' however once the web app goes into production you should set the specific domain.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="text-lg max-w-prose mx-auto">
            <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto mb-20">
              <h2>Generate a Secret</h2>
              <p>
                Having registered your web app with Tableau Server you'll be given the first piece of information for the JWT and that's the <b>Client ID</b>.
                It's probably a good idea to start a text editor or .env file in which to store the Client ID for use later.
              </p>
              <p>
                We can now click the <b>Generate New Secret</b> button to create our first Secret ID and value. Each app can have two secrets registered
                to allow for one to be used in development/test and another in production. Along with the client ID from earlier you can now store the
                <b> Secret ID</b> and <b>Secret Value</b> for use later.
              </p>
              <p>
                The final step is to enable the connected app. By default all new apps are disabled. To enable it simply click the three dot menu button
                by your app's name and select <b>Enable</b>.
              </p>
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={CreateSecretGif}
                    alt="Create Connected Secret"
                    width={628}
                    height={668}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span className="ml-2">Create Connected Secret in Tableau Server</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={EmbedPlaygroundImg}
                    alt="Tableau Embedded Analytics Playground by Andre de Vries"
                    width={706}
                    height={599}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span className="ml-2">Tableau Embedded Analytics Playground by Andre de Vries</span>
                </figcaption>
              </figure>
            </div>
            <div className="mt-8 lg:mt-0 xl:grid xl:grid-cols-2">
              <div className="prose prose-blue prose-lg text-gray-500  lg:row-start-1 lg:col-start-2">
                <h2>Test Your Connected App</h2>
                <p>
                  Before you go any further test out the connected app configuration.
                  <ol>
                    <li>Go to the <a href="https://playground.theinformationlab.io/" target={"_blank"} rel="noreferrer">Tableau Embedded Analytics Playground</a></li>
                    <li>Enter the URL of the dashboard you intend to embed. Tip: Remove any part of the URL after & including the '?'</li>
                    <li>Under <b>JWT Settings</b> enter your Tableau Server username (or email address for Tableau Online)</li>
                    <li>Copy and paste the Client ID, Secret ID and Secret Values we saved earlier</li>
                    <li>Click the <b>Get started</b> or <b>Generate Embed</b> button</li>
                  </ol>
                  If all works as expected your dashboard should load into view. If you see an error code take a look at the&nbsp;
                  <a href="https://help.tableau.com/current/online/en-us/connected_apps_troubleshoot.htm" target={"_blank"} rel="noreferrer">Troubleshoot Connected Apps</a>
                  &nbsp;documentation to give you an idea of how to fix it.
                </p>
              </div>
            </div>
          </div>
          <div className="text-lg max-w-prose mx-auto">
            <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto mb-20">
              <h2>Generate the token</h2>
              <p>
                Now we've got the information we need from Tableau Server let's dive into some code to generate the signed JWT. In the example below we'll be using
                NodeJS which can be used in Vercel serverless functions and AWS Lambda. If you're using a different code the list below defining what you need for your
                JWT is still valid.
              </p>
              <div className="flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden shadow-sm">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                            >
                              JWT Setting
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Claim
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Value
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Comment
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className='border-b-0'>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                Payload
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">iss</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Client ID</td>
                              <td className="px-3 py-4 text-sm text-gray-500">The Client ID created when adding the connected app to Tableau Server</td>
                            </tr>
                            <tr className='border-b-0 border-t-0'>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">sub</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Username/Email</td>
                              <td className="px-3 py-4 text-sm text-gray-500">Your username/email from logging into Tableau Server or Online</td>
                            </tr>
                            <tr className='border-b-0 border-t-0'>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">aud</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">"tableau"</td>
                              <td className="px-3 py-4 text-sm text-gray-500">Really simple, just the string "tabelau"</td>
                            </tr>
                            <tr className='border-b-0 border-t-0'>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">exp</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Token Expiry</td>
                              <td className="px-3 py-4 text-sm text-gray-500">
                                Expiry time of your token. Unix time in seconds that can't be more than 10 minutes from the time the token is used based on the
                                server's system time.
                              </td>
                            </tr>
                            <tr className='border-b-0 border-t-0'>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">jti</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">UUID</td>
                              <td className="px-3 py-4 text-sm text-gray-500">A random string of characters which are unique from any other token</td>
                            </tr>
                            <tr className='border-t-0'>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">scp</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">["tableau:views:embed",<br/> "tableau:metrics:embed"]</td>
                              <td className="px-3 py-4 text-sm text-gray-500">The token scope is an array of strings allowing viewing of Tableau views and metrics</td>
                            </tr>
                            <tr>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                Secret
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">secret</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Secret Value</td>
                              <td className="px-3 py-4 text-sm text-gray-500">The Secret Value created when adding the connected app to Tableau Server</td>
                            </tr>
                            <tr className='border-b-0'>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                Headers
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">kid</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Secret ID</td>
                              <td className="px-3 py-4 text-sm text-gray-500">The Secret ID created when adding the connected app to Tableau Server</td>
                            </tr>
                            <tr className='border-t-0'>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">iss</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Client ID</td>
                              <td className="px-3 py-4 text-sm text-gray-500">The Client ID created when adding the connected app to Tableau Server</td>
                            </tr>
                            <tr>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                Options
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">algorithm</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">"HS256"</td>
                              <td className="px-3 py-4 text-sm text-gray-500">Tableau requires HS256 for JWTs</td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Obviously the method you use to create your JWT will depend upon the code and potentially package you use on the server side. In this NodeJS example
                we'll make use of the <a href='https://www.npmjs.com/package/jsonwebtoken' target={'blank'} rel="noreferrer">jsonwebtoken</a> package to sign the JWT
                as well as <a href="https://www.npmjs.com/package/uuid" target={'blank'} rel="noreferrer">uuid</a> to create the token's unique identifier (<b>jti</b>).
              </p>
              <pre><code className="language-javascript">{`var jwt = require('jsonwebtoken');
const { v1: uuidv1 } = require('uuid');

module.exports = (req, res) => {
  const username = "craig";
  const uuid = uuidv1();
  const timenow = new Date().getTime();
  const expiry = new Date().getTime() + (5 * 60 * 1000);
  var token = jwt.sign({
        iss: process.env.Tableau_JWT_ClientId,
        sub: username,
        aud: "tableau",
        exp: expiry / 1000,
        iat: timenow / 1000,
        jti: uuid,
        scp: ["tableau:views:embed", "tableau:metrics:embed"]
      },
      process.env.Tableau_JWT_SecretValue,
      {
          algorithm: 'HS256',
          header: {
            'kid': process.env.Tableau_JWT_SecretId,
            'iss': process.env.Tableau_JWT_ClientId
          }
        }
        );
  res.send(token);
};`}
              </code></pre>
              <p>
                In this example the <b>username</b> is a fixed value however should be dynamic and based on the user that's logged into the web app. The <b>Client ID</b>,
                <b>Secret ID</b> and <b>Secret Value</b> values are accessed via environment variables.
              </p>
              <p>
                The example embed at the top of this page is using this code and is accessed via the API <a href="/ap/jwt" target={'blank'} rel="noreferrer">/api/jwt</a> hosted
                by this website. Each time the page is loaded the API endpoint generates a new token. Here's the result of the API being queried live:
              </p>
              <iframe className="word-wrap w-full h-20 rounded-lg shadow-lg object-cover object-center" src='http://localhost:3000/api/jwt'></iframe>
              <p>That's it for server side! We have our token, now let's go on to use it in our web app.</p>
            </div>
          </div>
        </div>
        </section>
      </div>
      <div className="relative pb-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <section id='react'>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                Client Side
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Embedding in your Web App
              </span>
            </h1>
            <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto mb-20">
              <p>
                Now we have our JWT we can make use of the Tableau Embedding API v3 to place the dashboard in our web app. As we mentioned
                earlier this tutorial is going to focus on the using React however much of the content also applies to HTML and other JS frameworks.
              </p>
              <h2>Here's a React Component Ready to Go</h2>
              <p>
                If you're thinking that setting up the JWT was too much of your time and you just want to get on with some embedding 
                then <a 
                  href={"https://github.com/TheInformationLab/tableau-connected-apps-demo/blob/205ced9fb69499a4cf042c451d31d173aa3c8f49/src/components/TableauEmbed/TableauEmbed.jsx"}
                  target={'blank'} rel="noreferrer"
                >here's the React component you need</a>. To make use of it simply import it into and add the snippet:
                <pre>
                  <code className="language-javascript">
{`<TableauEmbed 
  viewUrl={"https://online.tableau.com/t/PublicDemo/views/IncomeStatement/IncomeStatement"}
  tokenUrl={"/api/jwt"}
/>`}     
                  </code>
                </pre>
                <p>Where <b>viewURL</b> is the url of the dashboard you want to embed and <b>tokenUrl</b> is the url or path to retrieve the JWT
                you created earlier. In this case it's via the path <code>/api/jwt</code> which is part of this web app.</p>
              </p>
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>
  )
}
