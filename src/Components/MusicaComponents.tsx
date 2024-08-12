import React from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_WHITE_MENU } from '../Common/ConstantsColor';

interface Props {
  img: string;
  title: string;
  description: string;
}

export const MusicaComponets = ({ img, title, description }: Props) => {
  return (
    <View style={styles.contAlMu}>
      <Image style={styles.imgAlMu} source={{uri: img}}/>
      <View style={styles.contextAlMu}>
        <Text style={styles.textAlMuT}>{title}</Text>
        <Text style={styles.textAlMuD}>{description}</Text>
      </View>
      <View style={styles.conticonAlMu}>
        <Icon style={styles.iconPassword} name='apps' size={25} color={COLOR_WHITE_MENU}/>
      </View>
    </View>
  )
}