import MobileFacebookSVG from './../SVG/MobileFacebook';
import MobileLinkedinSVG from './../SVG/MobileLinkedinSVG';
import MobileGithubSVG from './../SVG/MobileGithubSVG';
import MobileFiverrSVG from './../SVG/MobileFiverrSVG';
import MobileUpworkSVG from './../SVG/MobileUpworkSVG';
import FacebookSVG from './../SVG/FacebookSVG';
import LinkedinSVG from './../SVG/LinkedinSVG';
import GithubSVG from './../SVG/GithubSVG';
import FiverrSVG from './../SVG/FiverrSVG';
import UpworkSVG from './../SVG/UpworkSVG';
import { motion as m } from 'framer-motion'

export default function FindMeIn({ item, index }) {

    const links = [
        { iconMobile: <MobileFacebookSVG className='rounded-full w-14 h-14' />, icon: <FacebookSVG className='transition-all duration-200 ease-in-out fill-gray-500 h-[74px] w-[164px] hover:fill-[#4267B2]' />, href: 'https://www.facebook.com/abdelrahman.mo.essawy/' },
        { iconMobile: <MobileLinkedinSVG className='fill-[#0a66c2] w-14 h-14' />, icon: <LinkedinSVG className='transition-all duration-200 ease-in-out fill-gray-500 h-[104px] w-[164px] hover:fill-[#0a66c2] scale-90' />, href: 'https://www.linkedin.com/in/abdelrahman-essawy/' },
        { iconMobile: <MobileGithubSVG className='rounded-full w-14 h-14 scale-110' />, icon: <GithubSVG className='transition-all duration-200 ease-in-out fill-gray-500 h-[104px] w-[164px] hover:fill-gray-800 scale-125' />, href: 'https://github.com/abdelrahman-essawy' },
        { iconMobile: <MobileFiverrSVG className='rounded-full w-12 h-12' />, icon: <FiverrSVG className='transition-all duration-200 ease-in-out fill-gray-500 h-[104px] w-[164px] hover:fill-gray-800' />, href: 'https://www.fiverr.com/users/abdelrahman_ess' },
        { iconMobile: <MobileUpworkSVG className='rounded-full w-12 h-12' />, icon: <UpworkSVG className='transition-all duration-200 ease-in-out fill-gray-500 h-[104px] w-[164px] hover:fill-[#14A800] scale-110' />, href: 'https://www.upwork.com/freelancers/~01efec3f377775367a' },
    ]
    return (
        <m.div
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
            whileInView={{ opacity: 1, y: 0, type: 'spring' }}

            className="mb-4 md:mb-0 px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-xl sm:px-12">
            <span className="font-semibold text-gray-400 uppercase">FIND ME IN</span>
            <div className='sm:hidden flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between'>
                {links.map((item, index) =>
                    <m.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        target={'_blank'} rel="noopener noreferrer" key={index} href={item.href} className={'mx-auto lg:mb-0 hover:fill-gray-800'}>
                        {item.iconMobile}
                    </m.a>)}
            </div>
            <div className='hidden sm:flex justify-evenly items-center mt-8 text-gray-500 sm:justify-evenly flex-nowrap'>
                {links.map((item, index) =>
                    <m.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target={'_blank'} rel="noopener noreferrer" key={index} href={item.href}>
                        {item.icon}
                    </m.a>)}
            </div>
        </m.div>
    );
}