import { React, useEffect, useRef } from 'react';
import jslogo from '/src/assets/jslogo.svg';
import reactlogo from '/src/assets/reactlogo.png';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import "highlight.js/styles/atom-one-dark.css";
hljs.registerLanguage('javascript', javascript);

export default function GoFish() {
    const codeRef = useRef(null);
    useEffect(() => {
        document.querySelectorAll("code").forEach((block) => {
            hljs.highlightElement(block);
        });
    }, []);

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
        <div>
            <div className="w-full bg-beige-200 py-10 mt-10 mb-10">
                <h1 className="sm:text-xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-center" data-aos="fade-down"> Go Fish!</h1>
                <hr className="max-w-[80%] border-t-2 border-black mt-2 mb-4 mx-auto" />
                <div className='flex gap-4 justify-center mb-3'>

                    <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200 gap-10"> <a href="https://github.com/jorola0411/Go-Fish.git" target="blank">
                        GitHub
                    </a></button>

                    <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"> <a href="https://gofish.joseorola.ca/" target="blank">
                        Live Website
                    </a></button>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto">

                    <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Technologies</h2>
                        <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-4 mx-auto" />
                        <div className="relative flex justify-center items-center ">
                            <img src={jslogo} alt="css3" className="mb-2 rounded-sm object-contain sm:h-12 md:h-24 lg:h-24 xl:h-36" />

                            <img src={reactlogo} alt="css3" className="mb-2 rounded-sm object-contain sm:h-12 md:h-24 lg:h-24 xl:h-36" />
                        </div>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Overview</h2>
                        <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-4 mx-auto" />
                        <p className="text-center sm:text-md md:text-xl lg:text-xl xl:text-2xl">Using custom hooks and an API, a simple Go Fish game was created.</p>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Timeframe</h2>
                        <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-4 mx-auto" />
                        <p className='text-center sm:text-md md:text-xl lg:text-xl xl:text-2xl'>?? hours</p>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto max-w-[90%] mb-10">
                <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2'>
                    <pre className='max-h-72 overflow-y-auto sm:text-md md:text-md lg:text-md xl:text-2xl'>
                        <code ref={codeRef} className="language-javascript">
                            {startgameCode}
                        </code>
                    </pre>
                </div>

                <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1'>
                    <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>StartGame.jsx</h2>
                    <hr className="border-t-2 border-black mt-2 mb-4" />
                    <p className='mb-5 sm:text-md md:text-md lg:text-md xl:text-2xl'>Lorem</p>

                    

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto max-w-[90%] mb-10">
                <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2'>
                    <pre className='max-h-72 overflow-y-auto sm:text-md md:text-md lg:text-md xl:text-2xl'>
                        <code ref={codeRef} className="language-javascript">
                            {handCode}
                        </code>
                    </pre>
                </div>

                <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1'>
                    <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Hand.jsx</h2>
                    <hr className="border-t-2 border-black mt-2 mb-4 mx-auto" />
                    <p className='mb-5 sm:text-md md:text-md lg:text-md xl:text-2xl'>Lorem</p>

                    
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto max-w-[90%]">
                <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2'>
                    <pre className='max-h-72 overflow-y-auto sm:text-md md:text-md lg:text-md xl:text-2xl'>
                        <code ref={codeRef} className="language-javascript">
                            {turnsCode}
                        </code>
                    </pre>
                </div>
                <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1'>
                    <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Turns.jsx</h2>
                    <hr className="border-t-2 border-black mt-2 mb-4" />

                    <p className='mb-5 sm:text-md md:text-md lg:text-md xl:text-2xl'>Lorem</p>

                   
                </div>
            </div>
        </div>
    )
}