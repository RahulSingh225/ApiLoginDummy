import React,{useState} from 'react';

import {Button,View,TextInput, Platform, Text,StyleSheet, Image,ActivityIndicator} from 'react-native';
import {emailValidator,passwordValidator} from '../utils/Validator'

import AuthApi from '../utils/AuthApi'
import * as Application from 'expo-application'
let devId = null
Platform.OS==='android'?devId=Application.androidId:Application.getIosIdForVendorAsync().then(data=>{
    data=devId
  });

 function Login({navigation}){
     
    let devId  =null
    devId=Application.androidId;
    const [disbaled,setdisabled]= useState({value:false,color:'#3C2C28'})
    const [loading,setLoading]= useState(false)
    const [error,setError]= useState()
    const [email,setEmail] = useState({value:'',error:''});
    const [password,setPassword] = useState({value:'',error:''});
    
    

    function onButtonClick(){
    
        let Name=null
      //emailValidator(email.value)?setError(emailValidator(email.value)):null
      //passwordValidator(password.value)?setError(passwordValidator(password.value)):null
      if(email.value && password.value){
          setLoading(true)
          setError('')
          setdisabled({value:true,color:'#8e685f'})
          setTimeout(() => {
              
         
     AuthApi(email,password,devId).then(data=>{
         if(data.error){
             setLoading(false)
        setError(data.msg)
        setdisabled({value:false,color:'#3C2C28'})
         }
         Name=data.first_name;
         console.log(data);
        if(Name){
           navigation.navigate('DashBoard',{
               userName:Name
               
           }) 
           setLoading(false)
           setdisabled({value:false,color:'#3C2C28'})
        }
     }
    
    
     
     )
    }, 1000);
    }else{setError('Fields are empty please fill details correctly')}
     
         

    }
     
    
    

    
    return(
        
        <View style={styles.container}>
            <Image source={require('../../assets/logo_stc.jpg')}/>
        <Text>Welcome Please Login</Text>
        <TextInput style={styles.input}
            label='Email' 
            
            placeholder='Enter Mobile No.'
            
            onChangeText={(email)=>setEmail({value:email,error:''})}/>
            

        <TextInput style={styles.input}
        label='Password'
        placeholder='Enter password here'
        secureTextEntry={true}
        onChangeText={password=>setPassword({value:password,error:''})}/>
        <Button style={styles.button}
        color={disbaled.color}
        label='Login'
        //mode='outlined'
        onPress={onButtonClick}
        title='LOGIN'
        disabled={!email.value || !password.value?true:disbaled.value}
        />
        <ActivityIndicator animating={loading} size='large' color='#3C2C28'/>
        {error?<Text style={styles.error}>{error}</Text>:null}
        

        </View>

        
    )
    

    


 
 /*async function AuthApi ({email,password})  {
    let formData = new FormData();
    formData.append('mobile_number',email.value);
    formData.append('password',password.value);
    
    return (
       await fetch('https://stcapp.stcwallpaper.com/backend/v1/get_loginInfoByMobileAndPassword',{
            method:'POST',
            body: formData
           

            }
      
    ).then((response)=>response.json())
    .then((json=>{
        if(json.error){
            console.log(json.msg)
            
        }
        console.log(json.first_name)
        
    }))
   
       
    )
        
    
    
}*/
 }
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#E5D5B1',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input:{
        width:200,
        borderWidth:1,
        borderColor:'#8e685f',
        borderRadius:10,
        padding:5,
        marginBottom:10
        
    },
    error:{
        color:'red',
        fontSize:18
        
    },
    button:{
        borderRadius:10
    }
    
  });
  

 
export default Login;


