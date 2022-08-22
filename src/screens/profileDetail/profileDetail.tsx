import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Linking,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useActivities} from '../../common/useActivities';
import {useDeals} from '../../common/useDeals';
import ActivityItem from '../../components/activityItem';
import ProfileImage from '../../components/profileImage';
import {Params} from '../../navigation/mainNavigator/helper';
import AppStyles from '../../utils/styles';
import styles from './styles';

type ProfileRouteProp = RouteProp<Params, 'ProfileScreen'>;

const ProfileDetail = () => {
  const route = useRoute<ProfileRouteProp>();
  const navigation = useNavigation();
  const profile = route.params.profile;
  const profId = profile?.id ?? 1;
  const {isDealsLoading, dealsError, dealsData} = useDeals(profId);
  const {isActivitiesLoading, activitiesError, activitiesData} =
    useActivities(profId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${profile.name}`,
    });
  }, [navigation]);

  const onPhonePress = () => {
    if (profile?.phone[0].value)
      Linking.openURL(`tel:${profile?.phone[0].value}`);
  };

  const isDivider = (index: number): boolean => {
    if (activitiesData?.data) return activitiesData.data.length - 1 !== index;
    else return false;
  };

  const phone = (
    <TouchableOpacity style={styles.btnView} onPress={onPhonePress}>
      <View style={styles.phoneView}>
        <Image
          source={{
            uri: '/Users/abdulhaseeb/Work/pipedrive/PipeDriveTest/src/assets/images/ic_phone.png',
          }}
          style={{width: 22, height: 22}}
        />
        <Text style={styles.phoneText}>
          {profile?.phone[0].value ?? 'not available'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderDealView = () => {
    return (
      <View style={styles.dealView}>
        <Text style={styles.heading}>Latest Deal</Text>
        <Text style={styles.smallHeading}>Name</Text>
        <Text style={styles.value}>
          {dealsData?.data[0]?.title ?? 'not available'}
        </Text>
        <Text style={styles.smallHeading}>Value</Text>
        <Text style={styles.value}>
          {dealsData?.data[0]?.value ?? 'not available'}
        </Text>
        <Text style={styles.smallHeading}>Add Time</Text>
        <Text style={styles.value}>
          {dealsData?.data[0]?.add_time.toString() ?? 'not available'}
        </Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View>
        <View style={styles.imgView}>
          <ProfileImage
            name={profile.name}
            img={profile?.picture_id?.pictures[512] ?? ''}
            imgStyle={{width: 80, height: 80, borderRadius: 40}}
            placeHolderStyle={styles.imgPlaceHolder}
          />
        </View>
        {phone}
        {dealsData?.data !== null ? renderDealView() : null}
        {activitiesData?.data !== null ? (
          <Text style={[styles.heading, {marginTop: 20}]}>Activities</Text>
        ) : null}
      </View>
    );
  };

  return (
    <View style={AppStyles.fullScreen}>
      {isActivitiesLoading ? (
        <View style={{marginTop: 20}}>
          <ActivityIndicator size={'large'} color={'black'} />
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={activitiesData?.data ?? []}
            renderItem={({item, index}) => (
              <ActivityItem activity={item} showDivider={isDivider(index)} />
            )}
            ListHeaderComponent={renderHeader()}
            contentContainerStyle={{paddingBottom: 20}}
          />
        </View>
      )}
    </View>
  );
};

export default ProfileDetail;
