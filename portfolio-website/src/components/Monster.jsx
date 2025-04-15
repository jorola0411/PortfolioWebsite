import { React, useEffect, useRef } from 'react';
import jslogo from '/src/assets/jslogo.svg';
import reactlogo from '/src/assets/React-icon.svg';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

import "highlight.js/styles/atom-one-dark.css";
hljs.registerLanguage('javascript', javascript);

export default function Monster() {
    const codeRef = useRef(null);
    useEffect(() => {
        document.querySelectorAll("code").forEach((block) => {
            hljs.highlightElement(block);
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const favoriteCode = `
      function Favourites() {
        const [category, setCategory] = useState("monsters"); // Default category
        const [favItems, setFavItems] = useState([]);
        const [loading, setLoading] = useState(false);
        
        useEffect(() => {
          const savedFavs = JSON.parse(localStorage.getItem("favs")) || {};
          const categoryFavs = savedFavs[category] || [];
      
          if (categoryFavs.length > 0) {
              fetch(\`https://mhw-db.com/\${category}\`)
                  .then((response) => response.json())
                  .then((items) => {
                      const filteredFavs = items.filter((item) => categoryFavs.includes(item.id));
                      setFavItems(filteredFavs);
                  })
                  .catch((error) => console.log(\`Error fetching \${category}:\`, error));
          } else {
              setFavItems([]);
          }
        }, [category]);
      
        const removeFromFavorites = (itemId) => {
          const savedFavs = JSON.parse(localStorage.getItem("favs")) || {};
          const categoryFavs = savedFavs[category] || [];
          const updatedFavs = categoryFavs.filter((id) => id !== itemId);
      
          savedFavs[category] = updatedFavs;
          localStorage.setItem("favs", JSON.stringify(savedFavs));
      
          setFavItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        };
      
        return (
          <>
            <h1>My Favourites</h1>
            <div>
              {favItems.map((item) => (
                <li key={item.id}>
                  <Link to={\`/\${category}/\${item.id}\`}>{item.name}</Link>
                  <button onClick={() => removeFromFavorites(item.id)}>Remove</button>
                </li>
              ))}
            </div>
          </>
        );
      }
      `

    const detailCode = `
const Details = () => {
const { category, id } = useParams(); 
const [detail, setDetail] = useState(null);
const [favs, setFavs] = useState( () => {

    const savedFavs = localStorage.getItem("favs");

    return savedFavs ? JSON.parse(savedFavs) : [];
})

const toggleFav = (itemID) => {
    const savedFavs = JSON.parse(localStorage.getItem("favs")) || {};
    const categoryFavs = savedFavs[category] || []; 

    let updatedFavs;
    if (categoryFavs.includes(itemID)) {
    
        updatedFavs = categoryFavs.filter((favId) => favId !== itemID);
    } else {
        
        updatedFavs = [...categoryFavs, itemID];
    }


    const newFavs = { ...savedFavs, [category]: updatedFavs };
    localStorage.setItem("favs", JSON.stringify(newFavs)); 


    setFavs(updatedFavs);
};



useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favs")) || {};
    const categoryFavs = savedFavs[category] || [];
    setFavs(categoryFavs); // Ensure favs is the array of IDs for the current category

    fetch(\`https://mhw-db.com/\${category}/\${id}\`)
        .then((response) => response.json())
        .then((data) => setDetail(data))
        .catch((error) => console.error('Error fetching Monster details:', error));
}, [category, id]);

if (!detail) {
    return <div>Loading...</div>;
}
const renderDetails = () => {
switch (category) { //we use a switch case because we need to display different details for each category, such as skills being exclusive to skills and Zenny (how much the item is worth in Monster Hunter Currency) is exclusive to the items category.
    case 'monsters':
        return (
            <div className=" w-2/3 mx-auto">
        <div>
            <h1 className="text-center text-white text-5xl m-5">{detail.name}</h1>
            <p className="text-left mb-5"><strong>Description:</strong> {detail.description}</p>
            <p className="text-left mb-5"><strong>Locations:</strong> {detail.locations?.map((loc) => loc.name).join(', ') || 'Unknown'}</p>
            <p className="text-left mb-5"><strong>Type:</strong> {detail.type}</p>
            <p className="text-left mb-5"><strong>Weaknesses:</strong> {detail.weaknesses?.map((weak) => weak.element).join(', ') || 'None'}</p>
        </div>
        </div>
        );
        case 'skills':
            return (
            <div>
                <h1 className="text-center text-white text-5xl m-5">{detail.name}</h1>
                <p className="text-left mb-5"><strong>Description:</strong> {detail.description}</p>
                <p className="text-left mb-5"><strong>Skills:</strong> {detail.skills?.map((skill) => skill.skillName).join(', ') || 'None'}</p>

            </div>
            );
    case 'items':
        return (
        <div className="w-2/3 mx-auto">
           <h1 className="text-center text-white text-5xl m-5">{detail.name}</h1>
            <p className="text-left mb-5"><strong>Description:</strong> {detail.description || 'No description available'}</p>
            <p className="text-left mb-5"><strong>Rarity:</strong> {detail.rarity}</p>
            <p className="text-left mb-5"><strong>Carry Limit:</strong> {detail.carryLimit}</p>
            <p className="text-left mb-5"><strong>Value:</strong> {detail.value} zenny</p>
        </div>
        );
    case 'charms':
        return (
            <div className="w-2/3 mx-auto">
                <h1 className="text-center text-white text-5xl mb-5">{detail.name}</h1>
                <p className="text-left mb-5"><strong>Rank:</strong> {detail.level}</p>
                <p className="text-left mb-5"><strong>Skills:</strong> {detail.skills?.map((skill) => skill.skillName).join(', ') || 'None'}</p>
                <p className="text-left mb-5"><strong>Rarity:</strong> {detail.rarity}</p>
            </div>
        );

    case 'weapons':
        return (
            <div className="w-2/3 mx-auto">
                <h1 className="text-center text-white text-5xl mb-5">{detail.name}</h1>
                <p className="text-left mb-5"><strong>Type:</strong> {detail.type}</p>
                <p className="text-left mb-5"><strong>Rarity:</strong> {detail.rarity}</p>
                <p className="text-left mb-5"><strong>Attack:</strong> {detail.attack?.display || 'Unknown'}</p>
                <p className="text-left mb-5"><strong>Elements:</strong> {detail.elements?.map((elem) => \`\${elem.type} ($\{elem.damage})\`\).join(', ') || 'None'}</p>
                <p className="text-left mb-5"><strong>Crafting Materials:</strong> {detail.crafting?.materials?.map((mat) => \`$\{mat.item.name} x \$\{mat.quantity}\`\).join(', ') || 'Unknown'}</p>
            </div>
        );

    case 'armor':
        return (
            <div className="w-2/3 mx-auto">
                <h1 className="text-center text-white text-5xl mb-5">{detail.name}</h1>
                <p className="text-left mb-5"><strong>Type:</strong> {detail.type}</p>
                <p className="text-left mb-5"><strong>Rarity:</strong> {detail.rarity}</p>
                <p className="text-left mb-5"><strong>Defense:</strong> {detail.defense?.base} (Base), {detail.defense?.max} (Max), {detail.defense?.augmented} (Augmented)</p>
                <p className="text-left mb-5"><strong>Resistances:</strong> 
                    {Object.entries(detail.resistances || {}).map(([element, value]) => (
                        <span key={element} className="block">{\`\${element}: \${value}\`\}</span>
                    ))}
                </p>
                <p className="text-left mb-5"><strong>Skills:</strong> {detail.skills?.map((skill) => skill.skillName).join(', ') || 'None'}</p>
                <p className="text-left mb-5"><strong>Set Bonus:</strong> {detail.armorSet?.rank || 'None'}</p>
            </div>
        );

    case 'locations':
        return (
            <div className="w-2/3 mx-auto">
                <h1 className="text-center text-white text-5xl mb-5">{detail.name}</h1>
                <p className="text-left mb-5"><strong>Zone Count:</strong> {detail.zoneCount}</p>
            </div>
        );


    default:
        return (
        <div>
            <p>Details for this category are not yet implemented.</p>
        </div>
        );
    }
    
}
return (
    <>
    <div className='min-h-screen'>
        <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row md:justify-center items-center"></header>
      {renderDetails()} {/* this calls the renderDetails function we created for each category and item, and displays it.*/}
      <button
    onClick={() => toggleFav(detail.id)}
    className="bg-gray-500 rounded-sm border border-gray-300 text-white m-5 py-2 px-4 hover:bg-gray-600"
>
    {favs.includes(detail.id) ? 'Remove from Favourites' : 'Add to Favourites'}
</button>

      <button className="bg-gray-500 rounded-sm border border-gray-300 text-white m-5 py-2 px-4  hover:bg-gray-600">
      <Link to="/" className="text-white">Back to Home</Link>
      </button>
      </div>
      <footer className="bg-gray-800 text-white p-4 flex flex-col md:flex-row md:justify-center items-center">
<a href="https://docs.mhw-db.com/#introduction" target="blank"><p>API from the Monster Hunter Database</p> </a>
</footer>
 
    </>
  );
};
useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favs")) || {};
    const categoryFavs = savedFavs[category] || [];
    setFavs(categoryFavs);

    fetch(\`https://mhw-db.com/\${category}/\${id}\`)
        .then((response) => response.json())
        .then((data) => setDetail(data))
        .catch((error) => console.error('Error fetching Monster details:', error));
}, [category, id]);

if (!detail) {
    return <div>Loading...</div>;
}

const renderDetails = () => {
    switch (category) {
        case 'monsters':
            return (
                <div className="w-2/3 mx-auto">
                    <h1 className="text-center text-white text-5xl m-5">{detail.name}</h1>
                    <p><strong>Description:</strong> {detail.description}</p>
                    <p><strong>Locations:</strong> {detail.locations?.map(loc => loc.name).join(', ') || 'Unknown'}</p>
                    <p><strong>Type:</strong> {detail.type}</p>
                    <p><strong>Weaknesses:</strong> {detail.weaknesses?.map(weak => weak.element).join(', ') || 'None'}</p>
                </div>
            );
        case 'skills':
            return (
                <div>
                    <h1 className="text-center text-white text-5xl m-5">{detail.name}</h1>
                    <p><strong>Description:</strong> {detail.description}</p>
                    <p><strong>Skills:</strong> {detail.skills?.map(skill => skill.skillName).join(', ') || 'None'}</p>
                </div>
            );
        default:
            return <p>Details for this category are not yet implemented.</p>;
    }
};
`;

    const searchCode = `
const [data, setData] = useState([]) // this line of codes holds the fetched data of monsters, items, etc.
  const [category, setCategory] = useState('monsters'); // This is the default category when the user loads the page.
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {

    const fetchAndFilterData = async () => { // This function fetches the API as well as filter the data for the search
      setLoading(true); //while the data is loading, it sets the function to true, which displays the word "Loading"

      try {
        const response = await fetch(\`https://mhw-db.com/\${category}\`);
        const allData = await response.json();

        // This line of code filters the search by letters and makes sure the search isn't case sensitive, the api will recognize Potion or potion from the search bar as potion in the API data 
        const filteredData = allData.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        
        setData(filteredData);
        setCurrentPage(1);
      } catch (error) {
        console.error(\`Error fetching \${category}:\`, error);
      } finally {
        setLoading(false); // End the loading.
      }
    };

    fetchAndFilterData();
  }, [category, searchTerm]); // The line of code reruns if the category or search changes.

  const itemsPerPage = 20;
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage; // This line of code sets the start index
  const endIndex = startIndex + itemsPerPage; // This line of code sets the end index
  const paginatedData = data.slice(startIndex, endIndex); // This line of code displays the data from the start index to the end index

  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row md:justify-center items-center">
        <div className="flex flex-wrap justify-center md:justify-start">
          <button className="px-4 py-2 rounded-sm hover:bg-gray-400 transition duration-200" onClick={() => setCategory("monsters")}>Monsters</button>
          <button className="px-4 py-2 rounded-sm hover:bg-gray-400 transition duration-200" onClick={() => setCategory("skills")}>Skills</button>
          <button className="px-4 py-2 rounded-sm hover:bg-gray-400 transition duration-200" onClick={() => setCategory("items")}>Items</button>
          <button className="px-4 py-2 rounded-sm hover:bg-gray-400 transition duration-200" onClick={() => setCategory("charms")}>Charms</button>
          <button className="px-4 py-2 rounded-sm hover:bg-gray-400 transition duration-200" onClick={() => setCategory("weapons")}>Weapons</button>
          <button className="px-4 py-2 rounded-sm hover:bg-gray-400 transition duration-200" onClick={() => setCategory("armor")}>Armor</button>
          <button className="px-4 py-2 rounded-sm hover:bg-gray-400 transition duration-200" onClick={() => setCategory("locations")}>Location</button>
        </div>

        <input type="text" className="w-full md:w-auto px-4 py-2 rounded-sm" placeholder={\`Search for \${category}\`} value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value) }} />
      </header>
        `;

    return (
        <>
            <section className="w-full bg-beige-100 lg:py-10 lg:mt-10 mb-10 p-10">
                <h1 className="sm:text-xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-center" data-aos="fade-down"> Monster Hunter Database</h1>
                <hr className="max-w-[80%] border-t-2 border-black mt-2 mb-4 mx-auto" />
                <div className='flex gap-4 justify-center mb-3'>

                    <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-200 gap-10 rounded-sm hover:scale-110 ease-in-out"> <a href="https://github.com/jorola0411/MonsterHunter-API-project.git" target="_blank">
                        GitHub
                    </a></button>

                    <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-200 rounded-sm hover:scale-110 ease-in-out"> <a href="http://mhapiproject.joseorola.ca/" target="_blank">
                        Live Website
                    </a></button>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto">

                    <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <h2 className='text-center font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>technologies</h2>
                        <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-2 mx-auto" />
                        <div className="relative flex justify-center items-center ">
                            <img src={jslogo} alt="javascript logo" className="mb-2 rounded-xs object-contain sm:h-12 md:h-14 lg:h-16 xl:h-36" />

                            <img src={reactlogo} alt="react.js logo" className="mb-2 rounded-xs object-contain sm:h-12 md:h-14 lg:h-16 xl:h-36" />
                        </div>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <h2 className='text-center font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>overview</h2>
                        <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-2 mx-auto" />
                        <p className="text-left sm:text-md md:text-md lg:text-xl xl:text-2xl px-5">utilising fetch statements and local storage, this project allows the user to search various items within the Monster Hunter World API, and favorite their items via local storage.</p>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                        <h2 className='text-center font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>timeframe</h2>
                        <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-2 mx-auto" />
                        <p className='text-center sm:text-md md:text-xl lg:text-xl xl:text-2xl'>48 hours</p>
                    </div>
                </div>
                <div className="max-w-[80%] mx-auto">
                    <h1 className="lg:col-span-1 sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-bold text-left mt-5"> the tldr;</h1>
                    <ul className='list-disc list-outside'>
                        <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>key features:</span> favorite items that are persistant across browser sessions via local storage, auto filter via search bar. </li>
                        <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>why:</span>this project improved my understanding of fetching APIs, react components, and how local storage works. </li>
                        <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>challenges:</span>I struggled on how to handle multiple categories at once, certain favorited items appearing under the wrong category.</li>
                        <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>solutions:</span> the switch statement allowed me to handle categories without depending on DRY code. by using variables and .map to differentiate each item by its category, </li>
                    </ul>
                </div>
 
            </section>

            <section className='p-10 bg-beige-200' >
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto max-w-[80%] mb-10">
                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <pre className='max-h-72 overflow-y-auto  md:text-md lg:text-md xl:text-2xl'>
                            <code ref={codeRef} className="language-javascript">
                                {favoriteCode}
                            </code>
                        </pre>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>favoriting Items & local storage</h2>
                        <hr className="border-t-2 border-black mt-2 mb-4" />
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>multiple const variables are created, notably the category and fav item const.</p>

                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>using useEffect and if statements in the function “Favorites,” the code fetches the API, and checks which item from that API has been favorited, resulting in a list of favorited items.</p>

                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>on the favorites page, there is an option to remove the item from the favorites, and the const savedFavs retrieves the local storage which holds the favorited items.</p>

                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>through a filter, and the const updatedFavs, it checks if the id and the item id are not the same. If true (if they are not the same,), remove the item.</p>

                    </div>
                </div>
            </section>

            <section className='p-10 bg-beige-200 mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto max-w-[80%] mb-10">
                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <pre className='max-h-72 overflow-y-auto text-xs sm:text-sm md:text-md lg:text-md xl:text-2xl'>
                            <code ref={codeRef} className="language-javascript">
                                {detailCode}
                            </code>
                        </pre>
                    </div>

                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>detail page & switch statement</h2>
                        <hr className="border-t-2 border-black mt-2 mb-4 mx-auto" />
                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>with amount of content within the Monster Hunter series, I felt it was necessary to allow different categories like monsters, weapons, and items.</p>

                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>each category has different details, and I used a switch statement to differentiate the details within each category.</p>

                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>each category has a name, the monster category has a id of “monster”. When the user changes the category to monster,  the switch statement will use the matching case clause to use the details unique to the “monster” category.</p>
                    </div>
                </div>
            </section>

            <section className='p-10 bg-beige-200 mt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto max-w-[80%]">
                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <pre className='max-h-72 overflow-y-auto text-xs sm:text-sm md:text-md lg:text-md xl:text-2xl'>
                            <code ref={codeRef} className="language-javascript">
                                {searchCode}
                            </code>
                        </pre>
                    </div>
                    <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3'>
                        <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>search bar</h2>
                        <hr className="border-t-2 border-black mt-2 mb-4" />

                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>for this project, I made the search bar not case sensitive, as typing “potion” or “Potion” will result in potion still showing.</p>

                        <p className='mb-5 sm:text-md md:text-md lg:text-xl xl:text-2xl'>the search bar filters the results no matter what; if the user types just the letter “a”, the API. will show results that contain the letter a, or as specific as “pot”, which would pull up results that contain “pot”.</p>

                    </div>
                </div>
            </section>
        </>
    )
}