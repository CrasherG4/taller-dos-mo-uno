import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Alert, Text, useWindowDimensions, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { styles } from '../Theme/appTheme'
import { InputComponents } from '../Components/InputComponents'
import { COLOR_VIOLET, COLOR_WHITE_MENU } from '../Common/ConstantsColor'
import { MusicaComponets } from '../Components/MusicaComponents'
import { IMAGEN_ALBUM_GIDLE_INEVERDIE, IMAGEN_PLAYLIST_MAMAMOO_UNO, IMAGEN_SONG_GIDLE_NXDE } from '../Common/ImgConstants'
import { User } from '../Navigator/StackNavigator'

interface Props{
  users: User[];
  handleAddUser: (user: User) => void;
}

// interface - formulario Registro
interface FormRegister {
  nombre: string;
  apellido: string;
  usuario: string;
  email: string;
  password: string;
}


export const Registro = ({ users, handleAddUser }: Props) => {

    // hook useState: Manipular el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
      nombre: '',
      apellido: '',
      usuario: '',
      email: '',
      password: ''
    });
  
    // Parte del código que se ocupa de cambiar el estado de la contraseña con el icono 
    // (Bastante rudimentario en mi opinión pero sirve X2)
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
    const [icon, setIcon] = useState('visibility')
  
    const changeIcon = () => {
      setHiddenPassword(!hiddenPassword)
  
      if (icon === 'visibility') {
        setIcon('lock')
      }
      else {
        (icon === 'lock')
        setIcon('visibility')
      }
    }
  
    // hook useNavigation: permitir navegar de una pantalla a otra
    const navigation = useNavigation();
  
    // Función que actualice el estado del formulario
    const handleSetValues = (name: string, value: string) => {
      setFormRegister({ ...formRegister, [name]: value });
    }
  
    // función que permita registrar usuario
    const handleSignInUp = () => {
      if (!formRegister.nombre || !formRegister.apellido || !formRegister.usuario || !formRegister.email || !formRegister.password) {
        Alert.alert(
          "Campos incompletos",
          "Por favor, completa todos los campos anteriores."
        )
        return;
      }

      //Comprobar que no exista el usuario
      if (verifyUser() != null) {
        Alert.alert(
          "El usuario ya existe",
          "El correo que ha ingresado ya está registrado"
        )
        return;
      }

      //General el nuevo usuario
      const getIdUsers = users.map(user => user.id);
      const getNewId = Math.max(...getIdUsers) + 1;
      const newUser: User =  {
        id: getNewId,
        nombre: formRegister.nombre,
        apellido: formRegister.apellido,
        usuario: formRegister.usuario,
        email: formRegister.email,
        password: formRegister.password
      }

      handleAddUser(newUser);

      Alert.alert(
        "Proceso completado",
        "Tu registro se ha ejecutado de forma exitosa"
      ),
      navigation.goBack();

      console.log(formRegister);
    }

  // función para verificar coincidencias en el user
  const verifyUser = (): User => {
    const existUser = users.filter (user => user.email === formRegister.email)[0]
    return existUser; //User | null
  }

  return (
    <View style={styles.contenedorAll}>
      <View style={styles.contenido}>
        <View style={styles.LogInUno}>
          <Text style={{
            ...styles.textoT1,
            fontSize: 35
          }}>Registrate para empezar a comprar música</Text>
        </View>
        <View style={styles.LogInTres}>
          <View style={{...styles.contentInput, marginTop: 0}}>
            <Text style={{...styles.textbtnLogIn, color: COLOR_WHITE_MENU}}>Completa los campos a continuación</Text>
            <InputComponents placeholder='Nombre' handleSetValues={handleSetValues} name='nombre' />
            <InputComponents placeholder='Apellido' handleSetValues={handleSetValues} name='apellido' />
            <InputComponents placeholder='Usuario' handleSetValues={handleSetValues} name='usuario' />
            <InputComponents placeholder='Correo' handleSetValues={handleSetValues} name='email' />
            <InputComponents placeholder='Contraseña' handleSetValues={handleSetValues} name='password' secureTextEntry={hiddenPassword} actionIcon={() => changeIcon()} isPss={true} icon={icon} />
          </View>
          <View style={styles.contenedorItems}>
            <TouchableOpacity style={styles.btnLogIn} onPress={() => handleSignInUp()}>
              <Text style={styles.textbtnLogIn}>Registrarse</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.contenedorItems, flexDirection: 'row' }}>
            <Text style={{ ...styles.textbtnLogIn, color: COLOR_WHITE_MENU }}>¿Ya tienes cuenta? Haz click </Text>
            <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
              <Text style={{ ...styles.textbtnLogIn, color: COLOR_VIOLET }}>Aquí</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.textList}>Música recomendada actualmente:</Text>
        <View style={styles.contCard}>
          <MusicaComponets img={IMAGEN_ALBUM_GIDLE_INEVERDIE} title='(여자)아이들 - I NEVER DIE' description='Tomboy, Villan dies, My Bag, Liar, Polaroid, Already...'/>
          <MusicaComponets img={IMAGEN_SONG_GIDLE_NXDE} title='Gidle - Nxde' description='Nxde es la inspiración de las cantantes para poder tener más...'/>
          <MusicaComponets img={IMAGEN_PLAYLIST_MAMAMOO_UNO} title='Mamamoo' description='Hip, 하늘 땅 바다만큼 (mumumumuch), Egotistic(너나 ...'/>
        </View>
      </View>
    </View>

  )
}
