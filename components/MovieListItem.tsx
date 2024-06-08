import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

const MovieListItem = (movie: Movie) => {
    return (
        <Link href={`/${movie.id}`} asChild>

            <Pressable style={{
                flex: 1,

            }}>
                <Image source={{
                    uri: `https://image.tmdb.org/t/p/w500` + movie.poster_path
                }} style={{
                    width: "100%",
                    aspectRatio: 3 / 4,
                    borderRadius: 10
                }} />
            </Pressable>
        </Link>
    )
}

export default MovieListItem