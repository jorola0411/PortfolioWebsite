import { React, useEffect, useState, useRef } from 'react';
import jslogo from '/src/assets/jslogo.svg';
import reactlogo from '/src/assets/React-icon.svg';
import tailwind from '../assets/tailwind.svg'
import serverjs from '/src/assets/serverjs.png';
import cardset from '/src/assets/cardsetjs.png';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import "highlight.js/styles/atom-one-dark.css";
hljs.registerLanguage('javascript', javascript);

export default function GoFish() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const slides = [
        { src: cardset, alt: "CardSet.js" },
        { src: serverjs, alt: "Server.js" }
    ];
    const codeRef = useRef(null);
    useEffect(() => {
        document.querySelectorAll("code").forEach((block) => {
            hljs.highlightElement(block);
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handCode = `
      //this displays the hands of the player and CPU, 
function Hand({ title, hand, isCpu, onCardClick }) {
    return (
        <>
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="relative flex justify-center items-center w-full h-40">
                {hand.map((card, index) => {
                    const offset = (index - (hand.length - 1) / 2) * 30; // Centers cards
                    return (
                        <img
                            key={index}
                            src={isCpu ? "https://deckofcardsapi.com/static/img/back.png" : card.image}
                            alt={card.value}
                            className={\`\absolute w-24 h-32 \${isCpu ? "" : "transition-transform transform hover:scale-110"}\`\}
                            style={{
                                transform: \`\translateX(\${offset}px)\`\, // Centers the cards 
                                zIndex: index
                            }}
                            onClick={() => !isCpu && onCardClick(card.value)} // Clickable only for player's hand
                        />
                    );
                })}
            </div>

        </>
    );
}

export default Hand;

      `

    const startgameCode = `
import { useState } from 'react';

const useInitGame = () => {

    const [playerHand, setPlayerHand] = useState([]);
    const [cpuHand, setCpuHand] = useState([]);
    const [deckId, setDeckId] = useState('');
    const [remainingCards, setRemainingCards] = useState(52);
    const [gameStart, setGameStart] = useState(false);
    const cardOrder = { "ACE": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "JACK": 11, "QUEEN": 12, "KING": 13 };

const sortHand = (hand) => {
    return [...hand].sort((a, b) => {
        const rankA = cardOrder[a.value] || 0; // Default to 0 if undefined
        const rankB = cardOrder[b.value] || 0;
        return rankA - rankB;
    });
};
const API_BASE_URL = "https://www.deckofcardsapi.com";
        const startGame = async () => {
            try {
                const deckResponse = await fetch(\`$\{API_BASE_URL}\/api/deck/new/shuffle/?deck_count=1\`\) // new deck
                const deckData = await deckResponse.json();
                setDeckId(deckData.deck_id);

                const dataResponse = await fetch(\`\${API_BASE_URL}/api/deck/\$\{deckData.deck_id}\/draw/?count=14\`\) // This draws 14 cards from the deck, 7 for the player and 7 for the CPU
                const drawData = await dataResponse.json();

                setPlayerHand(sortHand(drawData.cards.slice(0, 7)));
                setCpuHand(sortHand(drawData.cards.slice(7, 14)));
                setRemainingCards(drawData.remaining);
                setGameStart(true);

            } catch (error) {
                setError(error);
            }
        };

    return { playerHand, cpuHand, deckId, remainingCards, setPlayerHand, setCpuHand, setDeckId, setRemainingCards, gameStart, startGame };

};

export default useInitGame;
`;

    const turnsCode = `
const playerTurn = (requestedCardValue) => {
        if (currentTurn !== 'player' || gameOver) return;
        setLastRequestedCard(requestedCardValue);

        const matchingCards = cpuHand.filter(card => card.value === requestedCardValue);

        if (matchingCards.length > 0) {

            setPlayerHand(prevHand => {
                const newHand = sortHand([...prevHand, ...matchingCards]);
                completedSet(newHand, setPlayerHand, setPlayerScore);
                return newHand;
            });

            setCpuHand(prevHand => prevHand.filter(card => card.value !== requestedCardValue));

            return;
        } else {
            playerGoFish();
        }

        changeTurn();
    };

    const cpuTurn = async () => {
        if (currentTurn !== 'cpu' || cpuHand.length === 0 || gameOver) return;

        const randomCard = cpuHand[Math.floor(Math.random() * cpuHand.length)];
        const requestedCardValue = randomCard.value;
        setCpuMessage(\`\Do you have any \$\{requestedCardValue}s?\`\);
        await new Promise(resolve => setTimeout(resolve, 1500));

        const matchingCards = playerHand.filter(card => card.value === requestedCardValue);

        if (matchingCards.length > 0) {
            setCpuHand(prevHand => {
                const newHand = [...prevHand, ...matchingCards];
                completedSet(newHand, setCpuHand, setCpuScore);
                return newHand;
            });

            setPlayerHand(prevHand => prevHand.filter(card => card.value !== requestedCardValue));
            setTimeout(changeTurn, 1500);
        } else {
            setCpuMessage('Go Fish!');
            setTimeout(cpuGoFish, 1500);
        }
    };

        `;

    return (
        <>
            <section className="relative w-full bg-beige-100 lg:py-10 lg:mt-10 mb-10 p-5">
                <h1 className="sm:text-xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-center" data-aos="fade-down"> Go Fish!</h1>
                <hr className="max-w-[80%] border-t-2 border-black mt-2 mb-4 mx-auto" />
                <div className='flex gap-4 justify-center mb-3'>

                    <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2  hover:bg-orange-600 transition duration-200 gap-10 rounded-sm hover:scale-110 ease-in-out"> <a href="https://github.com/jorola0411/Go-Fish.git" target="_blank">
                        GitHub
                    </a></button>

                    <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2  hover:bg-orange-600 transition duration-200 rounded-sm hover:scale-110  ease-in-out"> <a href="https://gofish.joseorola.ca/" target="_blank">
                        Live Website
                    </a></button>
                    <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2  hover:bg-orange-600 transition duration-200 rounded-sm hover:scale-110  ease-in-out"> <a href="https://glitch.com/edit/#!/deckofcardsapi" target="_blank">
                        API
                    </a></button>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto">

                    <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <h2 className='font-semibold text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>technologies</h2>
                        <hr className="sm:max-w-[50%] md:max-w-[25%] border-t-2 border-black mt-2 mb-2 mx-auto" />
                        <div className="relative flex justify-center items-center gap-4">
                            <img src={jslogo} alt="javascript logo" className="mb-2 object-contain sm:h-12 md:h-14 lg:h-16 xl:h-36" />
                            <img src={tailwind} alt="tailwind logo" className="mb-2 object-contain sm:h-12 md:h-14 lg:h-14 xl:h-36" />
                            <img src={reactlogo} alt="react logo" className="mb-2 object-contain sm:h-12 md:h-14 lg:h-16 xl:h-36" />
                        </div>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <h2 className='font-semibold text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>overview</h2>
                        <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-2 mx-auto" />
                        <p className="text-left sm:text-md md:text-xl lg:text-xl xl:text-2xl">a solo full stack project, a game of go fish was created via react and javascript, and glitch.com for back end hosting and development.</p>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <h2 className='font-semibold text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>timeframe</h2>
                        <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-2 mx-auto" />
                        <p className='text-center sm:text-md md:text-xl lg:text-xl xl:text-2xl'>1 month: feb-march 2025</p>
                    </div>

                </div>

                <div className="max-w-[80%] mx-auto">
                    <h1 className="sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-bold text-left mt-5"> the tldr;</h1>
                    <ul className='list-disc list-outside'>
                        <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>why:</span> i wanted to create an app via full stack development, as well as developing my javascript & react knowledge further.</li>
                        <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>challenges:</span> handling the game logic and core gameplay loop, as well as integrating animations. </li>
                        <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>solutions:</span> breaking down the game logic (cpu/player turn, go fish, drawing cards) helped structure the development easily, lots of document reading also helped.</li>
                    </ul>
                </div>
            </section>

            <section className='p-10 bg-beige-200'>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto max-w-[80%] mb-10">
                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <pre className='max-h-72 overflow-y-auto text-xs sm:text-sm md:text-md lg:text-md xl:text-2xl'>
                            <code ref={codeRef} className="language-javascript">
                                {startgameCode}
                            </code>
                        </pre>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>startGame.jsx</h2>
                        <hr className="border-t-2 border-black mt-2 mb-4" />
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>the startGame.jsx file intializes the game, and creates a new deck from the api.</p>
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>this file also handles the sorting of the cards, as to keep things neat and make it easier for the player to see what ranks they have.</p>
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>.slice gives the player and CPU 7 cards each.</p>
                    </div>
                </div>
            </section>

            <section className='p-10 bg-beige-200 mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto max-w-[80%] mb-10">
                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <pre className='max-h-72 overflow-y-auto text-xs sm:text-sm md:text-md lg:text-md xl:text-2xl'>
                            <code ref={codeRef} className="language-javascript">
                                {handCode}
                            </code>
                        </pre>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Hand.jsx</h2>
                        <hr className="border-t-2 border-black mt-2 mb-4 mx-auto" />
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>hand.jsx handles the UI of the hands that the player and CPU holds.</p>
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>the offset constant is there to dynamically hold the hand in the middle of the screen, regardless of card amount in each hand.</p>
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>a ternary statement is used for both the animation and visual look of the cards. If its the CPU, then display the back of the cards and ignore animation. If it's not the CPU (player), display the cards face up and add the animation.</p>
                    </div>
                </div>
            </section>


            <section className='p-10 bg-beige-200 mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto max-w-[80%]">
                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <pre className='max-h-72 overflow-y-auto text-xs sm:text-sm md:text-md lg:text-md xl:text-2xl'>
                            <code ref={codeRef} className="language-javascript">
                                {turnsCode}
                            </code>
                        </pre>
                    </div>
                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>turns.jsx</h2>
                        <hr className="border-t-2 border-black mt-2 mb-4" />

                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>turns.jsx has the entire gameplay loop.</p>
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>the entire file handles the player/cpu turns, go fish, win and game over mechanics, to check if there has been a completed set, function to go again if the cpu/player has the requested card, score system, and messaging system. </p>

                    </div>
                </div>
            </section>

            <section className='p-10 bg-beige-200 mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mx-auto max-w-[80%]">
                    <div className='col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex flex-col sm:order-1 md:order-1'>
                        <div className="flex-1 flex items-center justify-center">
                            <img src={cardset} className="cursor-pointer hover:scale-102 transition-transform duration-200 " onClick={() => { setIndex(0); setOpen(true); }} />
                        </div>
                    </div>
                    <div className='col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 sm:order-3 md:order-2'>
                        <img src={serverjs} className="cursor-pointer hover:scale-102 transition-transform duration-200" onClick={() => { setIndex(1); setOpen(true); }} />
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 mt-5 sm:order-2 md:order-3">
                        <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>cardset.js</h2>
                        <hr className="border-t-2 border-black mt-2 mb-4" />
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>cardset.js handles the card information and export for use to the server.</p>
                    </div>

                    <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 mt-5 sm:order-4 ">
                        <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>server.js</h2>
                        <hr className="border-t-2 border-black mt-2 mb-4" />
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>server.js handles the routes and drawing of decks, as well as the creation of the decks via unique IDs.</p>
                    </div>

                </div>
                <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={index} />
            </section>
        </>
    )
}