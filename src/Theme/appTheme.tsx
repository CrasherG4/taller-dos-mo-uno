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
    gap: 6,
    alignItems: 'center'
  },
  imgAlMu: {
    width: '20%',
    height: '90%',
    borderRadius: 6,
  },
  contextAlMu: {
    width: '60%',
    height: '100%',
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
  //Diseños de la card
  contentCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contenedorPrincipalModal: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  contenedorModalInfo: {
    backgroundColor: COLOR_DARK_VIOLET,
    borderRadius: 8,
    padding: 20,
    gap: 20
  },
  textModal: {
    color: COLOR_WHITE,
    fontSize: 24,
    fontWeight: '600'
  },
  textModalDos: {
    color: COLOR_WHITE,
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center'
  },
  contTextExit: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconExitModal: {
    position: 'absolute',
    right: 0
  },
  viewImgModal: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgModal: {
    width: 150,
    height: 150,
    borderRadius: 8
  },
  descModal: {
    color: COLOR_WHITE,
    fontSize: 18,
    textAlign: 'justify'
  },
  contadorModal: {
    flexDirection: 'row',
    width: '60%',
    alignSelf: 'center',
    gap: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_DARK_VIOLET_MENUS,
    borderRadius: 6,
    marginBottom: 10,
  },
  buttonContadorModal: {
    width: 50,
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButtonContadorModal: {
    fontSize: 30,
    fontWeight: '600',
  },
  buttonAddModal: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: COLOR_VIOLET,
    borderRadius: 8
  },
  navInicio: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    backgroundColor: COLOR_DARK_VIOLET_MENUS,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    gap: 120,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  headerTable: {
    flexDirection: 'row',
  },
  listModal: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textListModal: {
    color: COLOR_WHITE,
    marginRight: 50
  },
  textIconCar: {
    zIndex: 1,
    width: 24,
    height:22,
    backgroundColor: COLOR_WHITE_MENU,
    color: COLOR_DARK_VIOLET_MENUS,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  contImgProductHome: {
    marginTop: 10,
    padding: 10,
    borderColor: COLOR_DARK_VIOLET_MENUS,
    borderWidth: 2,
    borderRadius: 8,
  },
  imgProductsHome: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    borderRadius: 6,
  },
  flatListInicio: {
    height: '60%'
  }
})