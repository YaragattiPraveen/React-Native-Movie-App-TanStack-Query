import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import getDataTopRatedMovies from '@/api/movies';
import { useQuery } from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListItem';

export default function TabOneScreen() {
  const { data: topRatedMovies, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getDataTopRatedMovies
  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>{error?.message}</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 6, padding: 5 }}
        columnWrapperStyle={{gap:6}}
        numColumns={2}
        data={topRatedMovies} renderItem={({ item }) => <MovieListItem movie{...item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
