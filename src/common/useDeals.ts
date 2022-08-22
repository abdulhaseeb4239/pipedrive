import {useQuery} from '@tanstack/react-query';
import {fetchDeals} from './api';

export const useDeals = (profId: number) => {
  const {isLoading, error, data} = useQuery(
    ['deals', profId],
    () => fetchDeals(profId),
    {
      networkMode: 'offlineFirst',
    },
  );

  return {
    isDealsLoading: isLoading,
    dealsError: error,
    dealsData: data,
  };
};
