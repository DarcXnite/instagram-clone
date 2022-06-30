// display username, and the most recent picture, and profile photo

import React from 'react'

export default function UserDisplay({ user: { name, pictures }, user }) {
  //change content to caption after wiping DB
  const mostRecentPic = pictures[pictures.length - 1]

//   return (
//     <div>
//       <h1 className='text-center'>{user.name}!</h1>
//       <div className='border-black items-center border bg-gray-100 flex justify-center'>
//         <img
//           width='300px'
//           src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_310,h_200,c_scale/${mostRecentPic.cloudId}.png`}
//           alt='place'
//         />
//       </div>
//     </div>
//   )
// }

return (
  <div className="">
    <div className="items-center hover:scale-125 font-serif hover:text-red-500 ">
      <h1 className=" text-center mx-28 p-5">{name}!</h1>
      <div className=" border-black items-center border bg-gray-100 flex justify-center rounded-3xl p-2 mx-10">
        <img
          width="300px"
          src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_310,h_200,c_scale/${mostRecentPic.cloudId}.png`}
          alt="place"
        />
      </div>
    </div>
  </div>
)
}
