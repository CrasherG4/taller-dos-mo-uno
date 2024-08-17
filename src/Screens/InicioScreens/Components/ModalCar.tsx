import React from 'react'
import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Car, Product } from '../Inicio';
import { styles } from '../../../Theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_WHITE } from '../../../Common/ConstantsColor';


//Props
interface Props {
  isVisible: boolean;
  car: Car[];
  setShowModal: () => void;
  setCar: (value: []) => void;
}

export const ModalCar = ({ isVisible, car, setShowModal, setCar }: Props) => {

  const { width } = useWindowDimensions();

  //función para clacular el total a pagar
  const totalPay = (): number => {
    //acumulador
    let total: number = 0;
    car.forEach(product => {
      total += product.price * product.totalCantidad
    })
    return total;
  }

  //función enviar la compra
  const handleSendInfo = () => {
    const productInfo = car.map(product => `Producto: ${product.name}\nCantidad: ${product.totalCantidad}`).join('\n\n');
    Alert.alert(
      "¡Compra exitosa!",
      `${productInfo}`
    )
    //Cerrar el modal
    setShowModal()
    setCar([]);
  }
  console.log(car);
  

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <View style={styles.contenedorPrincipalModal}>
        <View style={{ ...styles.contenedorModalInfo, width: width * 0.80 }}>
          <View style={styles.contTextExit}>
            <Text style={styles.textModal}>Mis Compras</Text>
            <View style={styles.iconExitModal}>
              <Icon name='cancel' size={30} color={COLOR_WHITE} onPress={setShowModal} />
            </View>
          </View>
          <View style={styles.headerTable}>
            <View style={{width: '40%'}}>
              <Text style={{...styles.textModalDos, alignSelf: 'flex-start'}}>Producto</Text>
            </View>
            <View style={styles.listModal}>
              <Text style={{ ...styles.textModalDos, marginRight: 10 }}>Precio</Text>
              <Text style={{ ...styles.textModalDos, marginRight: 10 }}>Cantidad</Text>
              <Text style={{ ...styles.textModalDos, marginRight: 10 }}>Total</Text>
            </View>
          </View>
          <FlatList data={car} renderItem={({ item }) =>
            <View style={styles.headerTable}>
              <View style={{width: '40%'}}>
                <Text style={styles.textListModal}>{item.name}</Text>
              </View>
              <View style={{...styles.listModal, gap: 10}}>
                <Text style={styles.textListModal}>{item.price}</Text>
                <Text style={styles.textListModal}>{item.totalCantidad}</Text>
                <Text style={styles.textListModal}>{(item.price * item.totalCantidad).toFixed(2)}</Text>
              </View>
            </View>
          } keyExtractor={item => item.id.toString()} />
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.textModalDos}>Total a pagar: ${totalPay().toFixed(2)}</Text>
          </View>
          <TouchableOpacity onPress={handleSendInfo} style={styles.buttonAddModal}>
            <Text style={styles.textModalDos}>¡Comprar!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
