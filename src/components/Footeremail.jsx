import React from 'react'

const Footeremail = () => {
  return (
    <div>
        <div className='footer padding mt-20 place-items-center'>
            <p className="text-white text-sm md:text-lg mb-5">Demo project UI inspired by Netflix. No data is collected.</p>
            <div className="flex max-w-3xl w-full">
              
             <input
  type="email"
  id="email-secondary"
  aria-label="Demo email input (no data collected)"
  autoComplete="off"
  className="bg-black/70 border-gray-400/70 block w-full ps-4 pe-4 py-3.5 border rounded-sm text-heading text-sm focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  placeholder="Email address (demo only)"
/>
              <a
  role="button"
  aria-disabled="true"
  className="bg-red-600 cursor-not-allowed text-white ps-4 pe-4 py-3.5 whitespace-nowrap flex items-center justify-center rounded text-xl font-semibold ml-3 opacity-80"
>
  Explore Plans
</a>

            </div>
            <p className="text-xs text-gray-800 mt-2">
  This is a frontend demo project. No email is stored or transmitted.
</p>
        </div>
        
    </div>
  )
}

export default Footeremail