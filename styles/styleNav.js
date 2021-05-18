import {StyleSheet} from 'react-native';

const styleNavigation  = StyleSheet.create(
    {
        homeContainer:{
            flex:1,
            justifyContent:'center',
            backgroundColor:'#ffe875',
            paddingTop:20,
            paddingHorizontal:10
            
        },
        chocovaniContainer:{
            flex:1,
            justifyContent:'center',
            backgroundColor:'#f26199',
            paddingTop:20,
            paddingHorizontal:10
        },
        cocoazuContainer:{
            flex:1,
            justifyContent:'center',
            backgroundColor:'#bb9eff',
            paddingTop:20,
            paddingHorizontal:10
        },
        cinnamapContainer:{
            flex:1,
            justifyContent:'center',
            backgroundColor:'#62d982',
            paddingTop:20,
            paddingHorizontal:10
        },
        headerText:{
            fontFamily: 'roboto',
            fontSize:36,
            color:'white',
            fontStyle:'italic',
            textAlign:'center',
            textShadowColor:'black',
            textShadowOffset:{width:2,height:2},
            textShadowRadius:10
        },
        headerContainer:{
            flex:1,
            justifyContent:'flex-start',
            borderBottomWidth:2,
            borderBottomRightRadius:10,
            borderBottomLeftRadius:10
        },
        homeImageContainer:{
            width:"95%",
            height:"60%",
            alignSelf:'center',
            borderRadius:30,
            resizeMode:'cover',
            borderWidth:10,
        },
        homeText:{
            fontFamily: 'roboto',
            fontSize:24,
            color:'white',
            fontStyle:'italic',
            textAlign:'center',
            textShadowColor:'black',
            textShadowOffset:{width:2,height:2},
            textShadowRadius:10
        },
        textContainer:{
            borderWidth:2,
            borderRadius:10,
            flex:1,
            margin:10,
            padding:2
            
        },
        textProperties:{
            color:'white',
            fontSize:13,
            fontFamily:'roboto',
            textAlign:'justify',
            padding:5
       },
       nekoImg:{
        width: 150, 
        height: 275,
        borderRadius: 10,
        borderWidth: 2,
        alignSelf: 'center' 
       }
    }
);
export default styleNavigation;