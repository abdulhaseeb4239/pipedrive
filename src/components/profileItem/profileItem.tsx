import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Profile, ProfileData} from '../../common/types';
import ProfileImage from '../profileImage';
import styles from './styles';

interface Props {
  profile: ProfileData;
  onPress: (profile: ProfileData) => void;
}

const ProfileItem = ({profile, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(profile)}>
      <View style={styles.row}>
        <ProfileImage
          name={profile.name}
          img={profile?.picture_id?.pictures[512] ?? ''}
        />
        <Text style={styles.name}>{profile.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;
