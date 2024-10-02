// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const MainPage = () => {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     fetch('https://6657369e9f970b3b36c865b0.mockapi.io/Images/')
//       .then((response) => response.json())
//       .then((data) => setCharacters(data));
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-12 text-purple-700">Character Gallery</h1>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//         {characters.map((character) => (
//           <div 
//             key={character.id} 
//             className="border-2 border-purple-400 rounded-lg p-4 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-purple-50"
//           >
//             <Link to={`/character/${character.id}`}>
//               <img 
//                 src={character.image} 
//                 alt={character.name} 
//                 className="w-full h-56 object-contain rounded-lg mb-4 border-4 border-purple-300"
//               />
//               <p className="text-2xl font-bold text-purple-600">{character.name}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainPage;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://6657369e9f970b3b36c865b0.mockapi.io/Images/')
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-purple-700">Character Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {characters.map((character) => (
          <div key={character.id} className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={character.image}
                alt={character.name}
                className="object-cover h-48 w-48"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-purple-600">{character.name}</h2>
              <p>Learn more about {character.name}!</p>
              <div className="card-actions justify-end">
                <Link to={`/character/${character.id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
