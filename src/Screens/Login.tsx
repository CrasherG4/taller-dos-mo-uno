import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Alert, Image, Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { InputComponents } from '../Components/InputComponents'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLOR_DARK_VIOLET_MENUS, COLOR_VIOLET, COLOR_WHITE_MENU } from '../Common/ConstantsColor'

// interfaz
interface FormLogin{
  email: string;
  password: string;
}

// interface - vector objetos
interface User{
  id: number;
  email: string;
  password: string;
}

export const Login = () => {

  const { height } = useWindowDimensions();  

  // arreglo de usuarios: permitir inicio de sesión
  const users: User[] = [
    {id: 1, email: 'carmen@gmail.com', password: '123456'},
    {id: 2, email: 'crashi@gmail.com', password: '987654'},
  ]

  // Hook useState: manipular el estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''
  });

  // hook useNavigation: permitir navegar de una pantalla a otra
  const navigation = useNavigation();
  
  // Parte del código que se ocupa de cambiar el estado de la contraseña con el icono 
  // (Bastante rudimentario en mi opinión pero sirve)
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

  // función que permita actualizar el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value });
  }

  // función que permite iniciar sesión
  const handleSignIn = () => {
    if(!formLogin.email || !formLogin.password) {
      // Mensajes de alerta
      Alert.alert(
        "Error",
        "Por favor, completar todos los campos!"
      );
      return;
    }
    // Validadndo si el correo y contraseña existe
    if(!verifyUser()){
      Alert.alert(
        "Error",
        "Correo y/o contraseña incorrecta!"
      );
      return;
    }
    
    Alert.alert(
      "Listo",
      "Tu cuenta se ha comprobado"
    )
    const foundUser = users.find(user => user.email === formLogin.email);
    console.log(foundUser);

  }

  //función para mostrar la contraseña del usuario
  const usersOn = () => {
    if(!formLogin.email) {
      Alert.alert(
        "Correo incompleto",
        "Para buscar tu contraseña es necesario tu correo"
      );
      return;
    }
    else if (!users.find(user => user.email === formLogin.email)) {
      Alert.alert(
        "Correo no encontrado",
        "Ingrese un correo válido"
      )
    }
    else {
      const foundUser = users.find(user => user.email === formLogin.email);
      Alert.alert(
        "Correo encontrado",
        `La contraseña del usuario ${foundUser?.email} es: ${foundUser?.password}`
      )
    }
  }

  // función verificar si existe el correo y contraseña
  const verifyUser = (): User => {
    const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];    
    return existUser;
  }

  // Mostrar usuarios que se encuentran en la app
  const mostrarUsuarios = () => {
    const usuariosInfo = users.map(user => `Email: ${user.email}\nContraseña: ${user.password}`).join('\n\n');
    Alert.alert(
      "Usuarios:",
      usuariosInfo
    )
  }

  return (
    <View style={styles.contenedorAll}>
      <View style={styles.contenido}>
        <View style={styles.LogInUno}>
          <Text style={{
              ...styles.textoT1,
              fontSize: height*0.035
            }}>¡Consigue y Escucha los mejores álbumes actuales!</Text>
        </View>
        <View style={styles.LogInDos}>
          <Image style={styles.contenedorImgUno} source={require('../img/ImgChicaMúsicaMenú_Horizontal.jpg')}/>
          <Image style={styles.contenedorImgDos} source={require('../img/ImgChicaMúsicaMenú_Vertical.jpg')}/>
        </View>
        <View style={styles.LogInTres}>
          <View style={styles.contentInput}>
            <InputComponents placeholder='Correo' handleSetValues={handleSetValues} name='email'/>
            <InputComponents placeholder='Contraseña' handleSetValues={handleSetValues} name='password' secureTextEntry={hiddenPassword} actionIcon={() => changeIcon()} isPss={true} icon={icon}/>
          </View>
          <View style={styles.contenedorItems}>
            <TouchableOpacity onPress={() => usersOn()}>
              <Text style={{...styles.textbtnLogIn, textAlign:'right'}}>¿Has olvidado tu contraseña?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contenedorItems}>
            <TouchableOpacity style={styles.btnLogIn} onPress={() => handleSignIn()}>
              <Text style={styles.textbtnLogIn}>Acceder</Text>
            </TouchableOpacity>
          </View>
          <View style={{...styles.contenedorItems, flexDirection: 'row'}}>
            <Text style={{...styles.textbtnLogIn, color: COLOR_WHITE_MENU}}>¿No tienes cuenta? Haz click </Text>
            <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro' }))}>
              <Text style={{...styles.textbtnLogIn, color: COLOR_VIOLET}}>Aquí</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => mostrarUsuarios()}>
          <Text style={styles.textUsuarios}>Mostrar Usuarios</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}