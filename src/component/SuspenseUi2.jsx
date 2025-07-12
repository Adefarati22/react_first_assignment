import React from 'react'

export default function SuspenseUi2() {
  return (
     <div className='flex justify-center items-center gap-2 min-h-screen' >
<span className="loading loading-bars loading-xs text-info"></span>
<span className="loading loading-bars loading-sm text-info"></span>
<span className="loading loading-bars loading-md text-info"></span>
<span className="loading loading-bars loading-lg text-info"></span>
<span className="loading loading-bars loading-xl text-info"></span>
     </div>
  )
}
