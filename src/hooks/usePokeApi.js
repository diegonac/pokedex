import { useState, useEffect } from "react";
import axios from "axios";
import { getStorageFavorites } from '../api/favoritesStorage';

const urlBase = 'https://pokeapi.co/api/v2/';

export function usePokeApi() {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);

    useEffect(() => {
        getPokemons();
    }, []);

    async function getUrl() {
        try {
            const response = await axios.get(nextUrl || `${urlBase}pokemon?limit=20&offset=0`);
            const data = response.data.results;
            setNextUrl(response.data.next);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async function getPokemons() {
        try {
            const data = await getUrl();
            const pokemonsPromise = data.map(async item => {
                const response = await axios.get(item.url);
                const pokemon = {
                    id: response.data.id,
                    name: response.data.name,
                    types: response.data.types,
                    order: response.data.order,
                    image: response.data.sprites.other["official-artwork"].front_default,
                    stats: response.data.stats,
                }
                return pokemon;
            })
            const pokemonsResults = await Promise.all(pokemonsPromise);
            setPokemons(prevPokemons => [...prevPokemons, ...pokemonsResults]);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async function getFavorites(setFavorites = () => {}) {
        try {
            const favoritesId = await getStorageFavorites();
            const favoritesPromise = favoritesId.map(async item => {
            const response = await axios.get(urlBase + 'pokemon/' + item);
            const pokemon = {
                id: response.data.id,
                name: response.data.name,
                types: response.data.types,
                order: response.data.order,
                image: response.data.sprites.other["official-artwork"].front_default,
                stats: response.data.stats,
            }
            return pokemon;
            });
            const favoritesResults = await Promise.all(favoritesPromise);
            setFavorites(favoritesResults);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async function getPokemonByName(name) {
        try {
            const response = await axios.get(`${urlBase}pokemon/${name}`);
            const pokemon = {
                id: response.data.id,
                name: response.data.name,
                types: response.data.types,
                order: response.data.order,
                image: response.data.sprites.other["official-artwork"].front_default,
                stats: response.data.stats,
            };
            return pokemon;
        } catch (error) {
            console.log(error);
            return 404
        }
    }
    return {
        pokemons,
        getPokemons,
        getFavorites,
        getPokemonByName,
        nextUrl,
    }
}