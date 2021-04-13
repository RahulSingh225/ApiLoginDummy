import React from 'react'
import { Text,View } from 'react-native'
 
  function DashBoard({route}) {
      const {userName}= route.params;
    return (
        <View stye={{flex:1,alignItems:'center',jusityContent:'center'}}>
                    <Text>Welcome {JSON.stringify(userName)}</Text>
      
        </View>
    )
}
 export default DashBoard;

