import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import {TextInput,Card,Button,Title} from 'react-native-paper';


const Home = () => {
    const [data,setData]=useState([])
  
    const submit=(e)=>{
      setData([...data,{id:data.length,task:e}]);
    }
    
    const del=(id)=>{
      var temp=[]
      data.forEach((element) => {
        if (element.id!=id) {
          temp=[...temp,element]
        }      
      });
      setData(temp)
    }
  
    const List=(item)=>{
      return(
        <Card elevation={2} style={{borderWidth:2,borderColor:'green',flex:1,justifyContent:'center',alignItems:'center',marginTop:15}}>
          <Card.Content >
            <Title>{item.task}</Title>
          </Card.Content> 
          <Card.Actions>
            <Button
            onPress={()=>del(item.id)}
            >Delete</Button>
          </Card.Actions>
        </Card>
  
      );
    }
  
    return (
        <View style={styles.textView}>
          <View style={styles.header}>
            <Text style={styles.text}>Tasker V0.2</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.text2}>--- Add a Task ---</Text>
            <TextInput
            mode="outlined"
            label="Add Task"
            style={{width:'70%'}}
            enablesReturnKeyAutomatically={true}
            placeholder="+Type Here+"
            underlineColorAndroid="green"
            onSubmitEditing={(e)=>submit(e.nativeEvent.text)}
            ></TextInput>
  
            <View style={{flex:1,alignItems:'center',width:'100%'}}>
            {
              data.length?
            <FlatList
            style={{width:'80%',marginTop:5}}
            data={data}
            renderItem={item=>List(item.item)}
            keyExtractor={item=>String(item.id)}
            >
            </FlatList>
            :
            <Text style={{marginTop:30,fontSize:15}}>
              Hurry!!! No task found. Please add a new one
            </Text>
           }
            </View>
          </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    textView:{
      flex:1
    },
    header:{
      width:'100%',
      height:'15%',
      alignItems:'center',
      backgroundColor:'#280303'
    },
    text:{
      fontSize:30,
      fontWeight:"bold",
      color:'red',
      marginTop: '10%'
    },
    text2:{
      fontSize:30,
      marginTop: 30
    },
    body:{
      flex:1,
      alignItems:"center",
    },
    card:{
      borderWidth:1,
      height:43,
      borderRadius:12,
      width: 250,
      textAlign:'center',
      fontSize:35,
      marginRight:10,
      marginTop:5,
      color:'white',
      backgroundColor:'#005050'
    }
  });

  export default Home;