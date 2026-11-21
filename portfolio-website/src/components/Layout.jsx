import { Outlet, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { FaXmark, FaBars, FaSun, FaMoon } from "react-icons/fa6";

export default function Layout() {

    const [dark, setDark] = useState(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", prefersDark);
        return prefersDark;
    });

    const toggleDark = () => {
        const newDark = !dark;
        setDark(newDark);
        document.documentElement.classList.toggle("dark", newDark);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);


        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>

            <div className='bg-offwhite dark:bg-caviar text-caviar dark:text-offwhite transition-colors duration-300'>
                <nav className='md:text-lg sm:px-8 md:px-32 pt-6 sm:mb-10 md:mb-20'>
                    <div className='flex justify-between'>
                        <Link to="/">
                            <h1 className="font-bold hover:cursor-pointer dark:hover:text-cream hover:text-coffee hover:scale-95 transition-transform ease-in-out">
                                Jose Orola
                            </h1>
                        </Link>

                        <div className='hidden md:flex gap-6'>
                            <Link to="/about" >
                                <button className='hover:cursor-pointer dark:hover:text-cream hover:text-coffee hover:scale-95 transition-transform ease-in-out'>
                                    About
                                </button>
                            </Link>
                            <button className='hover:cursor-pointer dark:hover:text-cream hover:text-coffee hover:scale-95 transition-transform ease-in-out'>
                                <a href="/joseorolaresume.pdf" target='_blank'>
                                    Resume
                                </a>
                            </button>

                            <button onClick={toggleDark} className={`hover:cursor-pointer relative w-14 h-7 transition-colors duration-300 ease-in-out rounded-full   ${dark ? 'bg-coffee' : 'bg-caviar'}`} aria-label="Toggle dark mode">
                                <span className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-sm transition-transform duration-300 ease-in-out bg-snow ${dark ? 'translate-x-7' : 'translate-x-0'}`}>
                                    {dark ? <FaSun className="text-caviar" /> : <FaMoon className="text-caviar" />}
                                </span>
                            </button>
                    
                        </div>
                        <div className="flex md:hidden gap-4">
                           <button onClick={toggleDark} className={`hover:cursor-pointer relative w-14 h-7 transition-colors duration-300 ease-in-out rounded-full   ${dark ? 'bg-coffee' : 'bg-caviar'}`} aria-label="Toggle dark mode">
                                <span className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-sm transition-transform duration-300 ease-in-out bg-snow ${dark ? 'translate-x-7' : 'translate-x-0'}`}>
                                    {dark ? <FaSun className="text-caviar" /> : <FaMoon className="text-caviar" />}
                                </span>
                            </button>
                            <button
                                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className={`md:hidden flex justify-end transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 mt-4" : "opacity-0 pointer-events-none"}`}>
                        <div className="flex flex-col items-end space-y-2 ">
                            <Link to="/about" className='text-lg' onClick={toggleMenu}>
                                About
                            </Link>
                            <a href="/joseorolaresume.pdf" className='text-lg' onClick={toggleMenu}>
                                Resume
                            </a>
                        </div>
                    </div>
                </nav>

                <main className='sm:px-8 md:px-32'>
                    <Outlet />
                </main>

                <footer className='dark:bg-shadowgray bg-snow sm:px-8 md:px-32 md:py-2 scroll-smooth'>
                    <div className="grid md:grid-cols-2 mx-auto justify-between sm:gap-10 md:gap-20 items-end sm:py-3 md:py-0">
                        <div className='col-span-1 sm:text-left '>
                            <h5 className='sm:text-lg md:text-xl mb-2'>Let's get in touch.</h5>
                            <p className="font-bold sm:text-2xl md:text-4xl md:text-left"><a href="mailto:jorola0411@gmail.com" className="hover:underline">jorola0411@gmail.com</a></p>
                        </div>

                        <div className='md:col-span-1 sm:flex sm:flex-col md:items-end sm:text-lg md:text-xl sm:py-3 md:py-0'>
                            <ul>
                                <li className='hover:scale-95 transition-transform ease-in-out dark:hover:text-cream hover:text-coffee'>
                                    <a href="https://github.com/jorola0411" target="_blank" className="flex items-center gap-2 ">
                                        <svg className="sm:w-5 sm:h-5 md:h-6 md:w-6 lg:w-8 lg:h-8 xl:h-32 xl:w-32  fill-caviar dark:fill-offwhite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" /></svg>
                                        <span>GitHub</span>
                                    </a>
                                </li>
                                <li className='hover:scale-95 transition-transform ease-in-out dark:hover:text-cream hover:text-coffee'>
                                    <a href="https://linkedin.com/in/jose-orola" target="_blank" className="flex items-center gap-2">
                                        <svg className="sm:w-5 sm:h-5 md:h-6 md:w-6 lg:w-8 lg:h-8 xl:h-32 xl:w-32  fill-caviar dark:fill-offwhite " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" /></svg>
                                        LinkedIn
                                    </a>
                                </li>
                                <li className='hover:scale-95 transition-transform ease-in-out dark:hover:text-cream hover:text-coffee'>
                                    <a href="/joseorolaresume.pdf" target="_blank" className="flex items-center gap-2">
                                        <svg className="sm:w-5 sm:h-5 md:h-6 md:w-6  lg:w-8 lg:h-8 xl:h-32 xl:w-32  fill-caviar dark:fill-offwhite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M192 112L304 112L304 200C304 239.8 336.2 272 376 272L464 272L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 128C176 119.2 183.2 112 192 112zM352 131.9L444.1 224L376 224C362.7 224 352 213.3 352 200L352 131.9zM192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 250.5C512 233.5 505.3 217.2 493.3 205.2L370.7 82.7C358.7 70.7 342.5 64 325.5 64L192 64zM248 320C234.7 320 224 330.7 224 344C224 357.3 234.7 368 248 368L392 368C405.3 368 416 357.3 416 344C416 330.7 405.3 320 392 320L248 320zM248 416C234.7 416 224 426.7 224 440C224 453.3 234.7 464 248 464L392 464C405.3 464 416 453.3 416 440C416 426.7 405.3 416 392 416L248 416z" /></svg>
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-span-1 '>
                            <p>Copyright 2026 Jose Orola.</p>
                        </div>
                        <div className='col-span-1 flex flex-col md:items-end'>
                            <p className='md:text-right'>
                                This website was made with React and complies with WCAG 2.2 Accessibiility.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}