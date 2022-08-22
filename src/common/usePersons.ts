import {useInfiniteQuery} from '@tanstack/react-query';
import {fetchProfileList} from './api';
import {ProfileData} from './types';

export const usePersons = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery(['persons'], fetchProfileList, {
    getNextPageParam: lastPage => {
      return lastPage.additional_data.pagination.next_start;
    },
    networkMode: 'offlineFirst',
  });

  const paginatedData: ProfileData[] = [];
  data?.pages.forEach(page => {
    page.data.forEach(char => {
      paginatedData.push(char);
    });
  });

  return {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    paginatedData,
    refetch,
  };
};
