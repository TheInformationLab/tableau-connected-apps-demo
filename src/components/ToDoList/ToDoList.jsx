import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline'
import { useCookies } from 'react-cookie';
import { Transition } from '@headlessui/react'
import Prism from 'prismjs';

const ToDoList = (props) => {
  const [cookies, setCookie] = useCookies(['createConnectedApp', 'generateSecret', 'createToken']);
  const [menuOpen, setMenuOpen] = useState(!props.mobile);
  return (
    <div style={{width: 270, backgroundColor: '#FFF'}} className={(props.mobile ? "hidden " : "") + "z-50 left-0 ml-6 py-2 px-6 aspect-w-12 aspect-h-7 rounded-lg shadow-lg lg:aspect-none bg-white}"}>
      <fieldset className="space-y-5">
      <legend className="sr-only">To Do</legend>
      <div className='inline-flex'>
        <button
          onClick={()=> {
            setMenuOpen(!menuOpen)
          }}
        ><MenuIcon className='w-5 mr-2'/></button>
        <h3>Connected Apps Task List</h3>
      </div>
      <Transition
        show={menuOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform origin-top scale-5 opacity-0"
        enterTo="transform origin-top scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform origin-top scale-100 opacity-100"
        leaveTo="transform origin-top scale-5 opacity-0"
      >
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="createConnectedApp"
            aria-describedby="createConnectedApp-description"
            name="createConnectedApp"
            type="checkbox"
            onChange={() => {
              if (cookies.createConnectedApp === "1") {
                setCookie('createConnectedApp', "0", { path: '/' });
              } else {
                setCookie('createConnectedApp', "1", { path: '/' });
              }
            }}
            checked={cookies.createConnectedApp === "1" || false}
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="createConnectedApp" className="font-medium text-gray-700">
            Register Connected App
          </label>
          <p id="createConnectedApp-description" className="text-gray-500">
            Create a connected app on Tableau Server
          </p>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="generateSecret"
            aria-describedby="generateSecret-description"
            name="generateSecret"
            type="checkbox"
            onChange={() => {
              if (cookies.generateSecret === "1" || false) {
                setCookie('generateSecret', "0", { path: '/' });
              } else {
                setCookie('generateSecret', "1", { path: '/' });
              }
            }}
            checked={cookies.generateSecret === "1"}
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="generateSecret" className="font-medium text-gray-700">
            Generate a Secret
          </label>
          <p id="generateSecret-description" className="text-gray-500">
            With your secret you should have a Client ID, Secret ID & Secret Value
          </p>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="createToken"
            aria-describedby="createToken-description"
            name="createToken"
            type="checkbox"
            onChange={() => {
              if (cookies.createToken === "1") {
                setCookie('createToken', "0", { path: '/' });
              } else {
                setCookie('createToken', "1", { path: '/' });
              }
            }}
            checked={cookies.createToken === "1" || false}
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="createToken" className="font-medium text-gray-700">
            Generate a Token
          </label>
          <p id="createToken-description" className="text-gray-500">
            Write some server side code to generate a JSON Web Token
          </p>
        </div>
      </div>
      </Transition>
    </fieldset>
    </div>
)};

export default ToDoList;
