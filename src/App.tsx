import { StyleSheet, Text, View, ImageSourcePropType, Image, Pressable} from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import {trigger} from 'react-native-haptic-feedback'

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

export type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps) : JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  const rollDiceOnTap = () => {
    const random = Math.floor(Math.random() * 6 ) + 1;
    switch (random) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }

    trigger('impactLight', options)
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable style={styles.rollTheDiceBtn}>
        <Text onPress={rollDiceOnTap} style={styles.rollTheDiceBtnText}>Roll Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  diceImage:{
    width: 200,
    height:200
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rollTheDiceBtn:{
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  rollTheDiceBtnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  }
})