import React from 'react'



 function AuthApi (email,password,devId)  {
    let formData = new FormData();
    formData.append('mobile_number',email.value);
    formData.append('password',password.value);
    if(devId)formData.append('device_id',devId)
    if(email.value && password.value){
    return (
          fetch('https://stcapp.stcwallpaper.com/backend/v1/get_loginInfoByMobileAndPassword',{
            method:'POST',
            body: formData
            

            }
      
    
        
   ).then(response=>response.json()).then((json)=>{
       return json;
   }
   ).catch((err)=>{
    console.error(err)
    return err; 
   })

    )
   
       
    
}
        
    
   
}

export default AuthApi
