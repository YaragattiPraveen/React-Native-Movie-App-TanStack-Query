import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import getDataTopRatedMovies from '@/api/movies';


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


export default function TabOneScreen() {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<string>("")

  const getTopMoviesData = async () => {
    setIsLoading(true)
    try {
      const movies = await getDataTopRatedMovies()
      setTopRatedMovies(movies)
    } catch (error:any) {
      setIsError(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getTopMoviesData()
  }, [])

  if (isLoading) {
    return <ActivityIndicator />
  }

  if(isError) {
    return <Text>{isError?.message}</Text>
  }

  console.log(topRatedMovies)
  return (
    <View style={styles.container}>
      <FlatList data={topRatedMovies} renderItem={({ item }) => {
        return <View>
          <Text>{item?.title}</Text>
          <Text>{item?.original_title}</Text>
        </View>
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
