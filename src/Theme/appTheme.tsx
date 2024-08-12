import { StyleSheet, useWindowDimensions } from "react-native";
import { COLOR_DARK_VIOLET, COLOR_DARK_VIOLET_MENUS, COLOR_PINK, COLOR_VIOLET, COLOR_WHITE, COLOR_WHITE_MENU } from "../Common/ConstantsColor";

export const styles = StyleSheet.create({

  // Contenedores
  contenedorAll: {
    flex: 1,
    backgroundColor: COLOR_DARK_VIOLET,
    padding: 20,
  },
  contenido: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    gap: 4
  },
  contenedorItems: {
    marginTop: 4,
    marginBottom: 4,
    justifyContent: 'center'
  },
  // LogIn
  LogInUno: {
    height: '10%',
    width: '100%',
    marginBottom: 5,
  },
  LogInDos: {
    height: '45%',
    width: '100%',
    flexDirection: 'row',
    gap: 4
  },
  LogInTres: {
    height: '45%',
    width: '100%',
  },
  // Texto
  textoT1: {
    color: COLOR_WHITE,
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'justify',
  },
  // Imagenes - Recursos
  contenedorImgUno: {
    backgroundColor: COLOR_VIOLET,
    width: '69%',
    height: '100%',
    borderRadius: 12,
    position: 'absolute',
    bottom: 0
  },
  contenedorImgDos: {
    backgroundColor: COLOR_PINK,
    width: '29%',
    height: '100%',
    borderRadius: 12,
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  contInput: {
    borderRadius: 4,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
  },
  textUsuarios: {
    color: COLOR_WHITE_MENU,
    position: 'absolute',
    bottom: 0,
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center'
  },
  titleBody: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  despcriptionBody: {
    fontSize: 16
  },
  contentInput: {
    marginTop: 20,
    gap: 10,
  },
  inputText: {
    color: COLOR_WHITE,
    backgroundColor: COLOR_DARK_VIOLET_MENUS,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4
  },
  iconPassword: {
    position: 'absolute',
    right: 20,
    zIndex: 1,
    marginTop: 12,
  },
  btnLogIn: {
    marginTop: 12,
    padding: 10,
    backgroundColor: COLOR_PINK,
    borderRadius: 6,
  },
  textbtnLogIn: {
    textAlign: 'center',
    color: COLOR_WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
  contAlMu: {
    padding: 4,
    width: '100%',
    height: 100,
    borderRadius: 6,
    flexDirection: 'row',
    gap: 6
  },
  imgAlMu: {
    width: '25%',
    height: '100%',
    borderRadius: 6,
  },
  contextAlMu: {
    width: '60%',
    height: '50%',
    flexDirection: 'column'
  },
  textAlMuT: {
    color: COLOR_WHITE,
    fontSize: 20,
    fontWeight: '800'
  },
  textAlMuD: {
    color: COLOR_WHITE,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify'
  },
  conticonAlMu: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconAlMu: {
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  },
  textList: {
    color: COLOR_WHITE,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 35,
    marginBottom: 5
  },
  contCard: {
    width: '100%',
    flexDirection: 'column',
    gap: 4,
    borderColor: COLOR_WHITE_MENU,
    borderWidth: 1,
    borderRadius: 6,
  },
})