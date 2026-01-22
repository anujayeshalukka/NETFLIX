import React from 'react'

const Footeremail = () => {
  return (
    <div>
        <div className='footer padding mt-20 place-items-center'>
            <p className="text-white text-sm md:text-lg mb-5">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex max-w-3xl w-full">
              
             <input
  type="email"
  id="email-secondary"
  className="bg-black/70 border-gray-400/70 block w-full ps-4 pe-4 py-3.5 bg-neutral-secondary-medium border rounded-sm text-heading text-sm focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  placeholder="Confirm email address"
/>
              <a className="bg-red-600 cursor-pointer text-white ps-4 pe-4 py-3.5 whitespace-nowrap flex items-center justify-center rounded text-xl font-semibold ml-3">
                 Get Started
                <svg class="w-3 h-3 text-white dark:text-white ml-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
              </a>

            </div>
        </div>
        
    </div>
  )
}

export default Footeremail