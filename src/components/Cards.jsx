import React from 'react'
import tv from "../assets/tv.png"
import down from "../assets/down.png"
import bino from "../assets/bino.png"
import mask from "../assets/mask.png"

const Cards = () => {
  return (
    <div className='padding mt-10'>
      <span className='text-2xl font-bold text-left'>More reasons to join</span>
      <div className="mt-7">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="h-full flex flex-col w-full bg-base-100 card-md shadow-sm 
                    bg-[linear-gradient(149deg,_#192247_0%,_#210e17_96.86%)] 
                    rounded-3xl">
            <div className="py-10 px-7 flex flex-col grow">
              <h2 className="text-2xl font-bold text-white">Enjoy on your TV</h2>
              <p className="text-gray-300 mt-2">
                A card component has a figure, a body part, and inside body there are title and actions parts
              </p>

              <div className="mt-auto self-end pt-10">
                <img className="h-14 w-14" src={tv} alt="TV" />
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col w-full bg-base-100 card-md shadow-sm 
                    bg-[linear-gradient(149deg,_#192247_0%,_#210e17_96.86%)] 
                    rounded-3xl">
            <div className="py-10 px-7 flex flex-col grow">
              <h2 className="text-2xl font-bold text-white">Download your shows to watch offline</h2>
              <p className="text-gray-300 mt-2">
                Save your favourites easily and always have something to watch.
              </p>

              <div className="mt-auto self-end pt-10">
                <img className="h-14 w-14" src={down} alt="TV" />
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col w-full bg-base-100 card-md shadow-sm 
                    bg-[linear-gradient(149deg,_#192247_0%,_#210e17_96.86%)] 
                    rounded-3xl">
            <div className="py-10 px-7 flex flex-col grow">
              <h2 className="text-2xl font-bold text-white">Watch everywhere</h2>
              <p className="text-gray-300 mt-2">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>

              <div className="mt-auto self-end pt-10">
                <img className="h-14 w-14" src={bino} alt="TV" />
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col w-full bg-base-100 card-md shadow-sm 
                    bg-[linear-gradient(149deg,_#192247_0%,_#210e17_96.86%)] 
                    rounded-3xl">
            <div className="py-10 px-7 flex flex-col grow">
              <h2 className="text-2xl font-bold text-white">Create profiles for kids</h2>
              <p className="text-gray-300 mt-2">
                Send kids on adventures with their favourite characters in a space made just for them — free with your membership.
              </p>

              <div className="mt-auto self-end pt-10">
                <img className="h-14 w-14" src={mask} alt="TV" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Cards