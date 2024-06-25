import * as React from "react";
// @ts-ignore
import caughtImage from "../images/caught.png";
// @ts-ignore
import uncaughtImage from "../images/uncaught.png";

const PokemonCard: React.FC<{
  //TODO: make partial node type for Pokemon from detailed page
  node: any;
  pokemonIdMap: { [name: string]: string };
}> = ({ node: pokemon, pokemonIdMap }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg max-w-3xl mx-auto flex flex-col justify-between h-full">
      <div className="flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <h1 className="bg-white text-black px-2 py-1 rounded-full font-bold">
            {pokemon.name}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-200 text-black text-xl font-bold px-3 py-1 rounded-full">
            {pokemon.stage}
          </div>
        </div>
      </div>
      <div className="flex items-center" style={{ marginTop: "-50px" }}>
        <img
          src={`https://wiki.pokerogue.net/_media/starters:sprites:${
            pokemonIdMap[pokemon.name]
          }.png`}
          alt={pokemon.name}
          style={{ height: "200px" }}
        />
        <img
          src={pokemon.caught ? caughtImage : uncaughtImage}
          alt={pokemon.caught ? "Caught" : "Uncaught"}
          style={{ height: "50px", marginLeft: "10px" }}
        />
        <div className="hexagon-wrapper">
          <div className="hexagon">IVs</div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-200 p-2 rounded-lg">
            <h2 className="text-black font-bold">Biome</h2>
            <div className="bg-gray-400 p-2 rounded-lg mt-2">
              <img
                src="/placeholder.svg"
                alt={pokemon.biome}
                className="w-full h-12 object-cover rounded-lg"
              />
              <p className="text-white text-center mt-1">{pokemon.biome}</p>
            </div>
          </div>
          <div className="bg-gray-200 p-2 rounded-lg">
            <h2 className="text-black font-bold">Ability</h2>
            <p className="text-black mt-2">
              {pokemon.abilityDropDown
                ? pokemon.abilityDropDown
                    .split("_")
                    .map(
                      (word: any) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")
                : ""}
            </p>
          </div>
          <div className="bg-gray-200 p-2 rounded-lg">
            <h2 className="text-black font-bold">Passive</h2>
            <p className="text-black mt-2">{pokemon.passive}</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-lg">
            <h2 className="text-black font-bold">Nature</h2>
            {pokemon.nature && (
              <div className="flex items-center">
                <div className="nature-name">
                  {pokemon.nature.split(/\s+/)[0]}
                </div>
                <div className="nature-modifiers">
                  <div className="increase-stat">
                    {pokemon.nature.split(/\s+/)[1] +
                      " " +
                      pokemon.nature.split(/\s+/)[2]}
                  </div>
                  <div className="decrease-stat">
                    {pokemon.nature.split(/\s+/)[3] +
                      " " +
                      pokemon.nature.split(/\s+/)[4]}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
