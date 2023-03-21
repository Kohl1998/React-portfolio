<<<<<<< HEAD
import me from './images/me.jpg';
import React from 'react';
import "./Home.css"
import Header from '../Header/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className='content-wrapper'>
      <h3>Welcome!, my name is Kohl Vernon</h3>
      </div>
      <div className='content-text'>
      <p>I am a front-end web developer with a love for design, and functionality</p>
      </div>
      <div style={{textAlign: 'center'}}>
        <img src={me}/> 
      </div>
    </div>
  )
}


=======
import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import me from './images/me.jpg';
import Footer from "../Footer/Footer";

function Home () {
    return (
        <div>
        <Header />
        <div className="header-container">
        <h1>Welcome, my name is Kohl Vernon</h1>
        <p>I am a front-end developer with an interest for design, martial arts, and simplicity.</p>
        <p>I believe in respect, integrity, curiousity, and self-development. </p>
        <div className="image-container">
        <img src= {me} />
        </div>
        <h2>Tech Stack</h2>
        <div className="skills">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" height="60" width="60"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B"></path> <path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white"></path> </g></svg>
        <svg viewBox="-52.5 0 361 361" xmlns="http://www.w3.org/2000/svg" height="60" width="60" preserveAspectRatio="xMinYMin meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26"></path><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529"></path><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB"></path><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z"></path><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF"></path></g></svg>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" height="60" width="60"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" height="60" width="60" preserveAspectRatio="xMinYMin meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C"></path><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="#FFF"></path></g></svg>
        <svg viewBox="0 0 32 32" fill="none"  height="60" width="60" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"  stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" fill="#FFCA28"></rect> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"></path> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"></path> </g></svg>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" height="60" width="60"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="#0769AD"></circle> <path d="M22.6573 13.4211C23.9143 13.4211 25.0652 13.0019 25.955 12.3066C25.0312 13.5238 23.5007 14.3196 21.7689 14.3196C18.9477 14.3196 16.6607 12.2077 16.6607 9.60256C16.6607 8.1581 17.3638 6.86527 18.4712 6C17.8901 6.76568 17.5491 7.6981 17.5491 8.70407C17.5491 11.3092 19.8361 13.4211 22.6573 13.4211Z" fill="#78CFF5"></path> <path d="M25.9064 16.6586C24.5512 17.7216 22.7968 18.3628 20.8805 18.3628C16.5874 18.3628 13.1071 15.1447 13.1071 11.1749C13.1071 9.63522 13.6307 8.20859 14.5221 7.03894C12.8413 8.35742 11.7745 10.3248 11.7745 12.5226C11.7745 16.4924 15.2548 19.7106 19.5479 19.7106C22.176 19.7106 24.4994 18.5047 25.9064 16.6586Z" fill="#78CFF5"></path> <path d="M26 20.7701C24.0689 22.6129 21.3937 23.7538 18.4375 23.7538C12.5497 23.7538 7.77678 19.2283 7.77678 13.6458C7.77678 11.8768 8.25603 10.214 9.09813 8.76767C7.18322 10.595 6 13.1125 6 15.892C6 21.4745 10.7729 26 16.6607 26C20.6827 26 24.1846 23.8881 26 20.7701Z" fill="#78CFF5"></path> </g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" aria-label="React" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#ffffff"></rect><circle cx="256" cy="256" r="36" fill="#61dafb"></circle><path stroke="#61dafb" stroke-width="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"></path></g></svg>
        <svg viewBox="-3.8 -1.5 40.921 40.921" xmlns="http://www.w3.org/2000/svg"  fill="#000000" height="60" width="60"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient id="b" x1="271.97" x2="211.104" y1="217.606" y2="341.772" gradientUnits="userSpaceOnUse"> <stop offset=".3" stop-color="#3e863d"></stop> <stop offset=".5" stop-color="#55934f"></stop> <stop offset=".8" stop-color="#5aad45"></stop> </linearGradient> <linearGradient id="d" x1="186.484" x2="297.349" y1="321.381" y2="239.465" gradientUnits="userSpaceOnUse"> <stop offset=".57" stop-color="#3e863d"></stop> <stop offset=".72" stop-color="#619857"></stop> <stop offset="1" stop-color="#76ac64"></stop> </linearGradient> <linearGradient id="f" x1="197.051" x2="288.72" y1="279.652" y2="279.652" gradientUnits="userSpaceOnUse"> <stop offset=".16" stop-color="#6bbf47"></stop> <stop offset=".38" stop-color="#79b461"></stop> <stop offset=".47" stop-color="#75ac64"></stop> <stop offset=".7" stop-color="#659e5a"></stop> <stop offset=".9" stop-color="#3e863d"></stop> </linearGradient> <clipPath id="a"> <path d="m239.03 226.605-42.13 24.317a5.085 5.085 0 0 0-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336a5.1 5.1 0 0 0 5.09 0l42.126-24.336a5.096 5.096 0 0 0 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317a5.123 5.123 0 0 0-5.1 0"></path> </clipPath> <clipPath id="c"> <path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39a5.318 5.318 0 0 0-1.32-.53zm0 0"></path> </clipPath> <clipPath id="e"> <path d="M241.066 225.953a5.14 5.14 0 0 0-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336a5.105 5.105 0 0 0 2.46-3.476l-46.18-78.89a5.29 5.29 0 0 0-1.03-.102l-.42.02"></path> </clipPath> </defs> <g clip-path="url(#a)" transform="translate(-68.564 -79.701) scale(.35278)"> <path fill="url(#b)" d="m331.363 246.793-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"></path> </g> <g clip-path="url(#c)" transform="translate(-68.564 -79.701) scale(.35278)"> <path fill="url(#d)" d="m144.07 264.004 83.825 113.453 110.86-81.906-83.83-113.45zm0 0"></path> </g> <g clip-path="url(#e)" transform="translate(-68.564 -79.701) scale(.35278)"> <path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0"></path> </g> </g></svg>
        </div>
        <div className="button-container" >
            <a href="./projects">Click to see my projects</a>
        </div>
        <Footer/>
        </div>
        </div> 
        )
}

>>>>>>> 4e0c2e15ce2f9c1be90401041a43c604434140b5
export default Home