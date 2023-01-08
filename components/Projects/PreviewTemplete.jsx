import React from 'react'
import { motion as m } from 'framer-motion'
import Image from 'next/image'

export default function PreviewTemplete({ name, image }) {
    const handleImage = () =>{
        const laptop = () => {
            const laptop = '/laptop.webp'
            return (

                <div className={``}>
                    <Image
                        className={`p-7`}
                        src={laptop}
                        alt={name}
                        fill
                        style={{ objectFit: 'contain' }}
                        quality={1}
                        loading='lazy'
                    />
                    {/* <div className='absolute top-[50px] bottom-[62px] inset-x-[58px] round bg-black flex '>
                        {   
                            image ? 
                                
                                <Image
                                    //required px w= 1498 h= 917
                                    className={``}
                                    src={image}
                                    alt={name}
                                    fill
                                    placeholder='empty'
                                    blurDataURL={image}
                                    style={{ objectFit: 'contain' }}
                                    quality={1}
                                    loading='lazy'
                                />
                                :
                                <div className='text-3xl font-light text-gray-500 m-auto '>
                                    {name}
                                </div>
                        }
                    </div> */}
                </div>
            )
            
        }
        const mobile = () => {
            const mobile = '/mobile.webp'
            const notch = '/notch.webp'

        }
        return laptop()
    }
  return (
      <m.div
          initial={{ opacity: 0,  }}
          animate={{ opacity: 1,  }}
          
          whileHover={{
              scale: 1.05, backgroundColor: '#e0e0e0', transition: {
                  type: 'tween',
                  duration: 0.3,
                  ease: 'easeOut'

              }
          }}
          className={`absolute inset-0 flex`}>
          {
                  handleImage()
          }


      </m.div>
  )
}
