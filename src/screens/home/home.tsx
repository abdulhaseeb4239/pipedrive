import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {usePersons} from '../../common/usePersons';
import ProfileItem from '../../components/profileItem';
import {Params, ProfileScreen} from '../../navigation/mainNavigator/helper';
import styles from '../../utils/styles';

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<Params>>();

  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    paginatedData,
    refetch,
  } = usePersons();

  const [refreshing, setRefreshing] = useState(false);

  const refresh = async () => {
    setRefreshing(true);
    await refetch(); // requery from page 1 again
    setRefreshing(false);
  };

  return (
    <View style={styles.fullScreen}>
      {isLoading ? (
        <View style={{marginTop: 20}}>
          <ActivityIndicator size={'large'} color={'black'} />
        </View>
      ) : null}
      <FlatList
        data={paginatedData}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => refresh()}
            tintColor={'black'}
          />
        }
        renderItem={({item, index}) => (
          <ProfileItem
            profile={item}
            onPress={profile => {
              navigation.navigate(ProfileScreen, {profile: profile});
            }}
          />
        )}
        onEndReached={() => {
          fetchNextPage();
        }}
      />
    </View>
  );
};

export default Home;
