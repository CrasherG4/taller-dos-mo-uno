import React from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_WHITE_MENU } from '../Common/ConstantsColor';

interface Props {
  img: string;
  title: string;
  description: string;
  setShowModal?: () => void;
}

export const MusicaComponets = ({ img, title, description, setShowModal }: Props) => {
  //función para la descripción
  const cortarString = (): string => {
    const maxLargo: number = 60
    if (description.length > maxLargo) {
      return description.substring(0, maxLargo) + '...';
    }
    else {
      return description;
    }
  }
  return (
    <View style={styles.contAlMu}>
      <Image style={styles.imgAlMu} source={{uri: img}}/>
      <View style={styles.contextAlMu}>
        <Text style={styles.textAlMuT}>{title}</Text>
        <Text style={styles.textAlMuD}>{cortarString()}</Text>
      </View>
      <View style={styles.conticonAlMu}>
        <Icon style={styles.iconAlMu} name='apps' size={34} color={COLOR_WHITE_MENU} onPress={setShowModal}/>
      </View>
    </View>
  )
}