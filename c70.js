/* no cmd

expo install @expo-google-fonts/rajdhani
expo install expo-font@~8.4.0
npm install react-native-vector-icons
*/






// estilo do tab bar options


tabBarOptions= {{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "black",
            style: {
              height: 130,
              borderTopWidth: 0,
              backgroundColor: "#5653d4"
            },
            labelStyle: {
              fontSize: 20,
              fontFamily: "Rajdhani_600SemiBold"
            },
            labelPosition: "beside-icon",
            tabStyle: {
              marginTop: 25,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 30,
              borderWidth: 2,
              alignItems: "center",
              borderColor: "white",
              justifyContent: "center",
              backgroundColor: "#5653d4"
            }
          }}



//código do formulário

return (
      <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.bgImage}>
      <View style={styles.upperContainer} >
        <Image source={appIcon} style={styles.appIcon} />
        <Image source={appName} style={[styles.appName, { marginTop: 25 }]} />
      </View>

      <View style={styles.lowerContainer}>
        <View style={styles.textinputContainer} >
          <TextInput style={styles.textinput} 
          placeholder={"ID do Livro"}
          placeholderTextColor={"white"}
          //value={bookId}
          />

          <TouchableOpacity 
          style={styles.scanbutton}  
          onPress={()=> this.getCameraPermissions("bookId")}
          >
            <Text style={styles.scanbuttonText}  > Digitalizar</Text>
          </TouchableOpacity>

        </View>

        <View style={[styles.textinputContainer, { marginTop: 25 }]}>
          <TextInput
          style={styles.textinput} 
          placeholder={"ID do Livro"}
          placeholderTextColor={"white"}
          //value={studentId}
          />

          <TouchableOpacity 
          style={styles.scanbutton} 
          onPress={()=> this.getCameraPermissions("studentId")}
          >
            <Text style={styles.scanbuttonText} >Digitalizar</Text>
          </TouchableOpacity>

        </View>

      </View>
      </ImageBackground> 
      </View>
    );



//estilo do formulario

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#FFFFFF"
  },
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText: {
    fontSize: 20,
    color: "#0A0101",
    fontFamily: "Rajdhani_600SemiBold"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
  appIcon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 80,
    
  },
  appName: {
    width: 500,
    resizeMode: "contain",
    borderWidth: 3,
    borderColor: "white"

  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
