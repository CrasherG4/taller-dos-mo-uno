import React, { useState } from 'react'
import { Alert, Image, StatusBar, Text, View } from 'react-native'
import { styles } from '../../Theme/appTheme'
import { FlatList } from 'react-native-gesture-handler';
import { CardProduct } from './Components/CardProduct';
import { COLOR_WHITE_MENU } from '../../Common/ConstantsColor';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ModalCar } from './Components/ModalCar';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
  desc: string;
}

export interface Car {
  id: number;
  name: string;
  price: number;
  totalCantidad: number;
}

export const Inicio = () => {
  //Arreglo con la lista de Albumes para comprar
  const products: Product[] = [
    { id: 1, name: '(여자) 아이들 - I Never Die', price: 1.80, stock: 5, pathImage: 'https://i.scdn.co/image/ab67616d0000b273c7b6b2976e38a802eebff046', desc: 'I Never Die es el primer álbum de estudio del grupo femenino surcoreano (G)I-dle, que fue lanzado el 14 de marzo de 2022 por Cube Entertainment. El álbum contiene nueve pistas, incluyendo su sencillo principal titulado «Tomboy».' },
    { id: 2, name: 'MMM - Reality in Black', price: 1.30, stock: 7, pathImage: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Mamamoo_-_Reality_in_Black.png', desc: 'Reality in Black es el segundo álbum de estudio del grupo surcoreano Mamamoo.' },
    { id: 3, name: 'The Weeknd - Dawn FM', price: 5.00, stock: 0, pathImage: 'https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d', desc: 'Dawn FM es el quinto álbum de estudio del cantautor canadiense The Weeknd lanzado el 7 de enero de 2022 por XO y Republic Records. Dawn FM cuenta con apariciones especiales de Tyler, the Creator, Lil Wayne y Jim Carrey.' },
    { id: 4, name: 'Vexento - TSM', price: 2.40, stock: 1, pathImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/09/87/5a/09875ad2-d91b-4199-8b21-29694089e110/5057302120863_cover.jpg/1200x1200bb.jpg', desc: 'Alexander M. llamado por su nombre artistico Vexento es un DJ y productor de musica electronica de 21 años, conocido por crear musica sin coprygth, volviendose altamente famoso en Facebook y Youtube, reconocido por sus exitos como Pixel Party o Masked Heroes, entre otros.' },
    { id: 5, name: 'Yuqi - Yuqi1', price: 2.40, stock: 1, pathImage: 'https://i.scdn.co/image/ab67616d0000b2736f99ccfe83f1eabd15ad3a14', desc: 'Sòng Yǔqí, más conocida como Yuqi, es una cantante, compositora, rapera y bailarina china. En 2018, debutó como integrante de I-DLE y en 2019 se convirtió en coanfitriona del programa chino, Keep Running.' },
    { id: 6, name: '(여자) 아이들 - I Sway', price: 2.40, stock: 1, pathImage: 'https://i.scdn.co/image/ab67616d0000b27366f7b6431ebb26c9b557a96b', desc: 'I Sway es el séptimo EP del grupo femenino surcoreano (G)I-dle. Fue lanzado por Cube Entertainment y distribuido por Kakao M el 8 de julio de 2024. El miniálbum contiene cuatro pistas, incluido su sencillo principal titulado «Klaxon».' },
    { id: 7, name: '(여자) 아이들 - I Sway', price: 2.40, stock: 1, pathImage: 'https://i.scdn.co/image/ab67616d0000b27366f7b6431ebb26c9b557a96b', desc: 'I Sway es el séptimo EP del grupo femenino surcoreano (G)I-dle. Fue lanzado por Cube Entertainment y distribuido por Kakao M el 8 de julio de 2024. El miniálbum contiene cuatro pistas, incluido su sencillo principal titulado «Klaxon».' },
  ]

  // hook useNavigation: permitir navegar de una pantalla a otra
  const navigation = useNavigation();

  //hook useState: manipular el arreglo de productos
  const [productState, setProductState] = useState(products)

  //hook useState: manipular el arreglo de compras
  const [car, setCar] = useState<Car[]>([]);

  //hook useState: manipular la visibilidad del modal
  const [showModal, setShowModal] = useState<boolean>(false)

  //función para actualizar la información del arreglo producto
  const changeStockProduct = (idProduct: number, quantity: number) => {
    //Nuevo stock
    const updateStock = productState.map(product => product.id === idProduct
      ? { ...product, stock: product.stock - quantity }
      : product
    )
    //Actualizar productState
    setProductState(updateStock);

    //llamar función agregar carrito
    addProduct(idProduct, quantity)
  }

  //función agregar los productos al carrito
  const addProduct = (idProduct: number, totalCantidad: number) => {
    const product = productState.find(product => product.id === idProduct)

    //Controlar si el priducto no ha sido encontrado
    if (!product) {
      return;
    }

    //Verificar si el producto ya está en el carrito
    const productoExistente = car.findIndex(item => item.id === idProduct)

    if (productoExistente >= 0) {
      const carActualizado = [...car]
      carActualizado[productoExistente].totalCantidad += totalCantidad
      setCar(carActualizado)
    }
    else {
      const newProductCar: Car = {
        id: product.id,
        name: product.name,
        price: product.price,
        totalCantidad: totalCantidad
      }
      setCar([...car, newProductCar])
    }
  }

  return (
    <View style={{ ...styles.contenedorAll, gap: 10 }}>
      <StatusBar />
      <View>

      </View>
      <View>
        <Text style={{ ...styles.textoT1, fontSize: 24 }}>¡Escucha los mayores exitos de la plataforma!</Text>
      </View>
      <View style={styles.flatListInicio}>
        <FlatList data={productState} renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct} />} keyExtractor={item => item.id.toString()} />
      </View>
      <View style={styles.contImgProductHome}>
        <Image style={styles.imgProductsHome} source={{uri: 'https://png.pngtree.com/background/20230613/original/pngtree-anime-girl-listening-to-music-picture-image_3381911.jpg'}}/>
      </View>
      <View style={styles.navInicio}>
        <View>
          <Icon name='home' size={40} color={COLOR_WHITE_MENU} onPress={() => navigation.goBack()} />
        </View>
        {car.length != 0 ? (
          <View>
            <Text style={styles.textIconCar}>{car.length}</Text>
            <Icon name='shopping-bag' size={40} color={COLOR_WHITE_MENU} onPress={() => setShowModal(!showModal)} />
          </View>
        ) : (
          <View>
            <Icon name='shopping-bag' size={40} color={COLOR_WHITE_MENU} onPress={() => Alert.alert("No hay compras", "Aún no has seleccionado nungún producto")} />
          </View>
        )}
      </View>
      <ModalCar isVisible={showModal} car={car} setShowModal={() => setShowModal(!showModal)} setCar={setCar}/>
    </View>
  )
}
