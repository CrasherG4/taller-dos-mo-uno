import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from '../../../Theme/appTheme'
import { MusicaComponets } from '../../../Components/MusicaComponents'
import { Product } from '../Inicio';
import { ModalProduct } from './ModalProduct';

//interfacce - Props
interface Props {
  product: Product;
  changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const CardProduct = ({ product, changeStockProduct }: Props) => {

  // hook useState: manipular el estado del modal
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <View style={styles.contentCard}>
      <MusicaComponets img={product.pathImage} title={product.name} description={product.desc} setShowModal={() => setShowModal(!showModal)}/>
      <ModalProduct isVisible={showModal} setShowModal={() => setShowModal(!showModal)} product={product} changeStockProduct={changeStockProduct}/>
    </View>
  )
}
