import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  color  from '../Utility/colors';
import * as Utils from '../Utility';
import  {Images}  from '../Utility/imagePath';
import HomeScreen from '../Component/Screen/Home/index';
import SearchScreen from '../Component/Screen/Search';
import EditScreen from '../Component/Screen/Edit';
import NotificationScreen from '../Component/Screen/Notification';
import ProfileScreen from '../Component/Screen/Profile';
import { spacing } from '../Styles/spacing';



const Tab  = createBottomTabNavigator();
const tabBarColor = color.white;

const tabData = [
    {
        name: Utils.Constant.SCREEN_HOME,
        icon: Images.IMG_HOME,
        component: HomeScreen,
    },
    {
        name: Utils.Constant.SCREEN_SEARCH,
        icon: Images.IMG_SEARCH,
        component: SearchScreen,
    },
    {
        name: Utils.Constant.SCREEN_EDIT,
        icon: Images.IMG_EDIT,
        component: EditScreen,
    },
    {
        name: Utils.Constant.SCREEN_NOTIFICATION,
        icon: Images.IMG_NOTIFICATION,
        component: NotificationScreen,
    },
    {
        name: Utils.Constant.SCREEN_PROFILE,
        icon: Images.IMG_PROFILE,
        component: ProfileScreen,
    }
]

const BottomTabNavigator = () => {
  return (
    <View style={{flex:1}}> 
      <Tab.Navigator 
      screenOptions={{
        tabBarLabel:false,
        tabBarStyle:{
          backgroundColor: tabBarColor,
          paddingBottom:0,
          height: spacing.HEIGHT_44,
        },
        tabBarLabelStyle:{alignSelf:'center'},
        tabBarAllowFontScaling:true,
        tabBarShowLabel:false,
        headerShown:false
      }}>
      {tabData.map((item,index)=>{
        return(
          <Tab.Screen
            key={`BottomTabMain_${index.toString()}`}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon:({focused})=>{
                return(
                  <View style={{alignItems:'center'}}>
                    <Image
                      source={item.icon}
                      style={[
                        Styles.iconStyle,
                        focused && {tintColor:color.black},
                        item.name == Utils.Constant.SCREEN_EDIT && {
                          width:spacing.HEIGHT_28,
                          height:spacing.HEIGHT_28
                        },
                        item.name == Utils.Constant.SCREEN_SEARCH && {
                          width:spacing.HEIGHT_36,
                          height:spacing.HEIGHT_36
                        },
                      ]}
                      resizeMode='contain'
                    />
                  </View>
                )
              }
            }}
          />
        )
      })}
      </Tab.Navigator>
    </View>
  )
}

const Styles = StyleSheet.create({
  iconStyle: {
    height: spacing.HEIGHT_30,
    width: spacing.HEIGHT_30,
    tintColor: color.grey500,
  },
});

export default BottomTabNavigator