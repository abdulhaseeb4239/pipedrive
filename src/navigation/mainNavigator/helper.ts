import {Profile, ProfileData} from '../../common/types';

export const HomeScreen = 'HomeScreen';
export const ProfileScreen = 'ProfileScreen';

export type Params = {
  [HomeScreen]: undefined;
  [ProfileScreen]: {profile: ProfileData};
};
