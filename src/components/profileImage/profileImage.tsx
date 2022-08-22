import React from 'react';
import {Image, ImageStyle, StyleProp, Text, View} from 'react-native';
import {getInitials} from '../../utils/helper';
import styles from './styles';

interface Props {
  name: string;
  img: string;
  imgStyle?: StyleProp<ImageStyle>;
  placeHolderStyle?: StyleProp<ImageStyle>;
}

const ProfileImage = ({name, img, imgStyle, placeHolderStyle}: Props) => {
  return img === '' ? (
    <View style={placeHolderStyle ?? styles.placeHolder}>
      <Text style={styles.text}>{getInitials(name)}</Text>
    </View>
  ) : (
    <Image
      source={{uri: img}}
      style={imgStyle ?? {width: 50, height: 50, borderRadius: 25}}
    />
  );
};

export default ProfileImage;
