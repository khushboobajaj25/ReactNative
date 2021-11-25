import React,{useState} from 'react'
import { View, Text,ScrollView } from 'react-native'

export default function Scroll() {
    const [people, setPeople] = useState([

        { "name": "Anisha", "age": "23",key:"1" },
        { "name": "Khushboo", "age": "19",key:"2" },
        { "name": "Karan", "age": "21",key:"3" },
        { "name": "Disha", "age": "20",key:"4" },
        { "name": "Disha", "age": "20",key:"5" },
        { "name": "Disha", "age": "20",key:"6" },
        { "name": "Disha", "age": "20",key:"7" },
        { "name": "Disha", "age": "20",key:"8" },
        { "name": "Disha", "age": "20",key:"9" },]
      );
    
    return (
        <View>
            <View style={styles.container}>
      <ScrollView>

      
      {
        people.map((item) => {
          return(

          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>

          </View>
          )
        })
      }
      </ScrollView>
    </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 50,
      paddingHorizontal: 20,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    header: {
      backgroundColor: "pink",
      padding: 20,
  
    },
    text: {
      fontSize: 30,
      fontWeight: "bold",
    },
    body: {
      backgroundColor: "yellow",
      padding: 20,
      marginTop: 20,
    },
    buttonContainer: {
      marginTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "black",
      width: 200,
      height: 50,
      borderRadius: 10,
      padding: 10,
      margin: 8,
    },
    item: {
      padding: 50,
      marginVertical: 8,
      backgroundColor: "pink",
      fontSize: 18,
    }
  });
  