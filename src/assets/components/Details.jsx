

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="card card-side bg-base-100 shadow-xl p-6">
        <figure>
          <img 
            src={character.image} 
            alt={character.name} 
            className="object-cover h-72 w-72 rounded-lg border-4 border-purple-400"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-600 text-4xl">{character.name}</h2>
          <p className="text-lg text-purple-700"><strong>Hair Color:</strong> {character.hair || "Unknown"}</p>
          <p className="text-lg text-purple-700"><strong>Status:</strong> {character.status || "Unknown"}</p>
          <p className="text-lg text-purple-700"><strong>Species:</strong> {character.species || "Unknown"}</p>
          <p className="text-lg text-purple-700"><strong>Gender:</strong> {character.gender || "Unknown"}</p>
          <p className="text-lg text-purple-700"><strong>Planet:</strong> {character.origin || "Unknown"}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
