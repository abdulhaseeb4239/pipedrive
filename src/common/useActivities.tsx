import {useQuery} from '@tanstack/react-query';
import {fetchActivities} from './api';

export const useActivities = (profId: number) => {
  const {isLoading, error, data} = useQuery(
    ['activities', profId],
    () => fetchActivities(profId),
    {
      networkMode: 'offlineFirst',
    },
  );

  return {
    isActivitiesLoading: isLoading,
    activitiesError: error,
    activitiesData: data,
  };
};
