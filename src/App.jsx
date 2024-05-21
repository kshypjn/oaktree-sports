import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from "react-feather";
// import Carousel from './carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import SimpleSlider from './slider';
import Thumbnail from './slider';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About Us', href: '#', current: false },
  { name: 'Our Work', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];



const HamburgerIcon = ({ onClick }) => (
  <div className="md:hidden cursor-pointer" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </div>
);

HamburgerIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const MobileMenu = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm md:hidden ${
      isOpen ? 'block' : 'hidden'
    }`}
  >
    <div className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-white p-4 overflow-y-auto">
      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={onClose}
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mt-8">
        <nav className="grid gap-y-4">  {/* Reduced gap between <li>s */}
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${
                item.current ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
              } block p-4 rounded-md font-semibold text-lg`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function App() {
//   const images = [
//     {
//         url: "src/assets/heroop1.jpeg"
//     },
//     {
//         url: "src/assets/heroop2.jpeg"
//     },
//     {
//         url: "src/assets/heroop3.jpeg"
//     },
//     {
//         url: "src/assets/heroop4.jpeg"
//     },
//     {
//         url: "src/assets/heroop5.jpeg"
//     },
// ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="m-0">
      <nav id="shift" className="bg-white text-black p-4 flex mt-0 shadow-bx-sdw justify-between items-center py-6 px-10 text-lg">
        <a>
          <img src="src/assets/oaktreeLogo.jpeg" className="h-16 w-auto" alt="Logo" />
        </a>
        <div className="hidden md:flex">
          <ul className="flex space-x-4 gap-8 list-none font-serif-pop font-semibold px-4">
            {navigation.map((item) => (
              <li key={item.name} className={item.current ? 'text-orange-400' : ''}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <HamburgerIcon onClick={toggleMenu} />
      </nav>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      {/* hero section option 1 */}
      {/* <section className="hero-section flex  items-center mt-4 py-16 px-8">
        <div className="w-1/2 mr-4 shadow-xl">
          <Carousel>
            {images.map((s, index) => (
              <img
                key={index}
                src={s.url}
                alt=""
                className="w-full h-auto object-contain"
              />
            ))}
          </Carousel>
        </div>
        <div className="w-1/2 p-4 text-center items-center justify-center flex flex-col ">
          <h1 className="text-6xl leading-tight text-green-500 mb-4  font-yes">
          We Tell Extraordinary Stories with a Backdrop of Sport
          </h1>
          <div className='flex flex-col items-center justify-center gap-0 relative'>
            <ChevronDown className='chevron' ></ChevronDown>
            <ChevronDown className='chevron' ></ChevronDown>
            <ChevronDown  className='chevron'></ChevronDown>
          </div>
        </div>
      </section> */}
      {/* hero section 2 */}
      <section className='flex flex-col'>
        <h1 className="text-2xl leading-tight text-green-500    selection:text-orange-400 selection:bg-black mx-3 font-yes text-center mt-10 sm:text-4xl md:text-7xl md:mt-20">WE TELL EXTRAORDINARY STORIES WITH A BACKDROP OF SPORT</h1>
        <div className='flex flex-col items-center justify-center gap-0 relative'>
            <ChevronDown className='chevron' ></ChevronDown>
            <ChevronDown className='chevron' ></ChevronDown>
            <ChevronDown  className='chevron'></ChevronDown>
          </div>
      </section>
{/* carousel slider */}
        <Thumbnail></Thumbnail>
        {/* about us */}
        <section className="about flex flex-col md:px-10 md:my-10" id="AboutLanding">
          <h1 className=' selection:text-orange-300 selection:bg-black title mx-10 my-5 text-2xl font-light leading-snug md:leading-none tracking-wide font-yes text-center text-purple-600 md:text-5xl lg:text-6xl '>The Storytellers of the Sports World</h1>
          <div className="aboutContent flex flex-col  md:flex-row md:px-10 md:mt-8 md:gap-8 md:w-11/12">
            <div className="aboutText text-denim flex flex-col gap-4  mx-5 font-joseph md:mx-2 md:my-0 md:mr-0 ">
              <p className=' text-base text-center md:text-left px-10 md:text-2xl md:px-12' >
              We, at Oaktree, are a bunch of nuts, passionately telling stories about sports and the communities that surround it. With our extensive network in the sporting community and our expertise in storytelling, <b>we bring out the extraordinary in the ordinary.</b>
              </p>
              <p className='text-base text-center md:text-left  px-10 md:text-2xl md:px-12'>
              Our work ranges from creating original content for our O&O channels to creating inspiring and engaging sports stories for our partner brands.
              </p>
              <div className="text-center">
                <button  className="w-1/2 bg-blue-500 hover:bg-blue-700 md:font-semibold md:w-fit text-gray-100 md:mx-12 md:py-2 md:px-4 rounded shadow md:float-left md:text-lg">
                  Learn More
                </button>
              </div>
          </div>
          <img src="src/assets/aboutimage.svg" alt=""  className=' hidden md:scale-150 sm:my-10 sm:block'/>
          <img src="src/assets/aboutImageMobile.svg" alt=""  className=' my-5 mb-2 sm:hidden'/>
          </div>
        </section>
        <section className="services md:pt-10 flex flex-col md:mx-10 justify-center items-center">
          <h1 className= 'selection:text-orange-400 selection:bg-black title md:mx-10 my-4 text-2xl font-light leading-snug md:leading-none tracking-wide font-yes text-center text-purple-600 md:text-5xl lg:text-6xl '>What We Can Do For You</h1>
          <div className='flex flex-col justify-center items-center gap-4 my-3 md:flex-row  md:gap-6 md:my-8'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-1/2 mx-auto" src="src/assets/video.png" alt=""/>
            <div className="px-2 py-2">
              <div className="font-bold text-center text-xl mb-2">Content Production</div>
              <p className="text-gray-700 text-center text-base">
              Podcasts, Videos, Shows - We Create It All!
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-1/2 mx-auto" src="src/assets/bulbMain.png" alt=""/>
            <div className="px-2 py-2">
              <div className="font-bold text-center text-xl mb-2">Media Conceptualisation</div>
              <p className="text-gray-700 text-center text-base">
              Creative ideas to fuel sports content in India.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-1/2 mx-auto" src="src/assets/chat.png" alt=""/>
            <div className="px-2 py-2">
              <div className="font-bold text-center text-xl mb-2">Branded Content</div>
              <p className="text-gray-700 text-center text-base">
              We partner with brands to create content that reflects their ideologies
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-1/2 mx-auto" src="src/assets/puzzle.png" alt=""/>
            <div className="px-2 py-2">
              <div className="font-bold text-center text-xl mb-2">Content Consulting</div>
              <p className="text-gray-700 text-center text-base">
              Our team helps you tackle sports media demands
              </p>
            </div>
          </div>
          </div>

        </section>
        </div>
  );
}

{/* <p className="text-xl text-gray-700 leading-relaxed">
  At Oaktree Sports, we believe in storytelling that connects people through
  the shared passion for sports and athletic achievements.
</p> */}
export default App;