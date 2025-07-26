import { View, Text } from 'react-native'
import React from 'react'
import GET_API from './src/components/GET_API';
// import ModalDialogBox from './src/components/ModalDialogBox';
// import AlertExample from './src/components/AlertExample';
// import ModalDialogBox from './src/components/ModalDialogBox';
// import UseRefHook from './src/components/UseRefHook';
// import StatusBarExample from './src/components/StatusBarExample';
// import StatusBar from './src/components/StatusBarExample';
// import Loader from './src/components/Loader';
// import StyleWithButtons from './src/components/StyleWithButtons';
// import UseEffectHookUnmountingPhase from './src/components/UseEffectHookUnmountingPhase';
// import UseEffectHookUpdatingPhase from './src/components/UseEffectHookUpdatingPhase';
// import UseEffectHook from './src/components/UseEffectHook';
// import LoginPage from './src/components/LoginPage';
// import Grid from './src/components/Grid';

const App = () => {
  return (
    // <LoginPage/> 
     <View style={{flex:1 , justifyContent:'center'}} > 
  {/* <UseEffectHook/>  */}
  {/* <UseEffectHookUpdatingPhase/> */}
  {/* <UseEffectHookUnmountingPhase/> */}
  {/* <StyleWithButtons/> */}
  {/* <Loader/> */}
  {/* <StatusBar/> */}
  {/* <StatusBarExample/> */}
  {/* <UseRefHook/> */}
  {/* <ModalDialogBox/> */}
   {/* <AlertExample/> */}
   {/* <ModalDialogBox/> */}
   <GET_API/>
    </View>    
  );
};

export default App;