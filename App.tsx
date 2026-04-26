import React from 'react';
import { View, Text, StyleSheet, 
  TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.moto}>🏍️</Text>
      <Text style={styles.titulo}>LuziLeva</Text>
      <Text style={styles.sub}>
        O comércio de Luziânia na sua porta
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>
          Começar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center',
    justifyContent:'center', 
    backgroundColor:'#2d6a2d' },
  moto: { fontSize: 80 },
  titulo: { color:'#f5c518', fontSize:48,
    fontWeight:'900' },
  sub: { color:'#fff', fontSize:16,
    marginTop:8, textAlign:'center',
    paddingHorizontal:32 },
  btn: { marginTop:32, 
    backgroundColor:'#fff',
    borderRadius:20, 
    paddingHorizontal:40,
    paddingVertical:16 },
  btnTxt: { color:'#2d6a2d', 
    fontSize:18, fontWeight:'800' },
});
