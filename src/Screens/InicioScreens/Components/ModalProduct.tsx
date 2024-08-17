import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Product } from '../Inicio';
import { styles } from '../../../Theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_DARK_VIOLET, COLOR_PINK, COLOR_WHITE } from '../../../Common/ConstantsColor';

interface Props {
  product: Product;
  isVisible: boolean;
  setShowModal: () => void;
  changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const ModalProduct = ({ isVisible, setShowModal, product, changeStockProduct }: Props) => {
  //hook useWindowDimension: tamaño de la pantalla
  const { width } = useWindowDimensions();

  // hook useState: manipular el estado de la cantidad
  const [contador, setContador] = useState<number>(1)

  // función actualizar el valor de la cantidad - contador
  const handleChangeQuantity = (value: number) => {
    setContador(contador + value)
  }

  //función agregar productos carrito
  const handleAddProduct = () => {
    //Actualizar stock
    changeStockProduct(product.id, contador);
    //Reiniciar quantity
    setContador(1);
    //Cerrar modal
    setShowModal();
  }

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <View style={styles.contenedorPrincipalModal}>
        <View style={{ ...styles.contenedorModalInfo, width: width * 0.80 }}>
          <View style={styles.contTextExit}>
            <Text style={styles.textModal}>{product.name}</Text>
            <View style={styles.iconExitModal}>
              <Icon name='cancel' size={30} color={COLOR_WHITE} onPress={setShowModal} />
            </View>
          </View>
          <View style={styles.viewImgModal}>
            <Text style={{...styles.textModalDos, marginBottom: 5}}>Precio: ${product.price}</Text>
            <Image style={styles.imgModal} source={{ uri: product.pathImage }} />
          </View>
          <View>
            <Text style={styles.descModal}>{product.desc}</Text>
          </View>
          {product.stock === 0 ? (
            <View style={styles.contadorModal}>
              <Text style={{ ...styles.textModal, color: COLOR_WHITE }}>Agotado</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.textModalDos}>Precio: ${product.price * contador}</Text>
              <View style={styles.contadorModal}>
                <View style={{ margin: 8 }}>
                  <Icon name='remove' size={30} color={COLOR_WHITE} onPress={() => handleChangeQuantity(-1)} disabled={contador === 1} />
                </View>
                <View>
                  <Text style={{ ...styles.textModal, fontSize: 20 }}>{contador}</Text>
                </View>
                <View style={{ margin: 8 }}>
                  <Icon name='add' size={30} color={COLOR_WHITE} onPress={() => handleChangeQuantity(1)} disabled={contador === product.stock} />
                </View>
              </View>
              <TouchableOpacity style={styles.buttonAddModal} onPress={handleAddProduct}>
                <Text style={styles.textModalDos}>Agregar al carrito</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  )
}
