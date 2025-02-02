import React from 'react';


export default function Monster() {

    return (
        <div>
            <h1>Monster Hunter API project</h1>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <h2>Favoriting Items & local Storage</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p>Multiple const variables are created, notably the category and fav item const.

            Using useEffect and if statements in the function “Favorites,” the code fetches the API, and checks which item from that API has been favorited, resulting in a list of favorited items.
            
            On the favorites page, there is an option to remove the item from the favorites, and the const savedFavs retrieves the local storage which holds the favorited items.
            
            Through a filter, and the const updatedFavs, it checks if the id and the item id are not the same. If true (if they are not the same,), remove the item.</p>
            
            <h2>Detail page & switch statement</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p>With amount of content within the Monster Hunter series, I felt it was necessary to allow different categories like monsters, weapons, and items.

Each category has different details, and I used a switch statement to differentiate the details within each category.

Each category has a name, the monster category has a id of “monster”. When the user changes the category to monster,  the switch statement will use the matching case clause to use the details unique to the “monster” category.</p>
        </div>
                    <h2>Search Bar</h2>
                    <hr className="border-t-2 border-black mt-2 mb-4" />  
                    <p>For this project, I made the search bar not case sensitive, as typing “potion” or “Potion” will result in potion still showing.

                    The search bar filters the results no matter what; if the user types just the letter “a”, the API. will show results that contain the letter a, or as specific as “pot”, which would pull up results that contain “pot”.
                    
                    .slice reduces the search results to a maximum of 20 results at a time, as to not clutter the UI.</p>
    )
}