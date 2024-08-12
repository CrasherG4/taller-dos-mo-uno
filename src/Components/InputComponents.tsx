import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../Theme/appTheme';
import { COLOR_DARK_VIOLET, COLOR_WHITE_MENU, } from '../Common/ConstantsColor';

interface Props {
  placeholder: string;
  handleSetValues: (name: string, value: string) => void;
  name: string;
  icon?: string;
  secureTextEntry?: boolean;
  isPss?: boolean;
  actionIcon?: () => void;
}

export const InputComponents = ({ placeholder, handleSetValues, name, secureTextEntry = false, isPss = false, actionIcon, icon}: Props) => {

  return (
    <View>
      {isPss && (
        <Icon style={styles.iconPassword} name={icon} size={25} color={COLOR_WHITE_MENU} onPress={actionIcon}/>
      )}
      <TextInput
        placeholder= {placeholder}
        placeholderTextColor={COLOR_WHITE_MENU}
        keyboardType='default'
        onChangeText={(value) => handleSetValues(name, value)}
        secureTextEntry={secureTextEntry}
        style={styles.inputText}
      />
    </View>
  )
}