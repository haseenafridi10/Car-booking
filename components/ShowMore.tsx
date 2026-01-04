import { cars } from '@/data/cars';
import React, { useState } from 'react'

const ShowMore = () => {
    const [visibleCount, setvisibleCount] = useState(6);
    const visbleCars = cars.splice(0,visibleCount);
  return (
    <div>
      {visibleCount < cars.length && (
        <button
         onClick={() => setvisibleCount(prev => prev + 3)}
         className='mt-6 px-4 py-2 bg-black text-white rounded'
        >
            Show More
        </button>
      )}
    </div>
  )
}

export default ShowMore
