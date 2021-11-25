import styled from 'styled-components';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;
// colors
export const Colors = {
    primary: '#ffffffff',
    secondary: '#ff9800',
    tertiary: '#ff5722',
    quaternary: '#9c27b0',
    quinary: '#2196f3',
    senary: '#009688',
    septenary: '#e91e63',
    octonary: '#673ab7',
    green: '#10B981',
    brand: '#6D28D9',
    red: '#EF4444',
    lightpink: '#FFB6C1',
};
const { primary, secondary, tertiary, quaternary, quinary, senary, septenary, octonary, green, brand, red, lightpink } = Colors;
export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;

`
export const WelcomeContainer = styled(InnerContainer)`
    padding : 25px;
    padding-top: 10px;
    justify-content: center;
`

export const Avatar = styled.Image`

    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-width: 2px;
    border-color: white;
    margin-bottom: 10px;
    align-items: center;
    margin-left: 80px;
`


export const WelcomeImage = styled.Image`
    width: 220px;
    height: 220px;
    border-radius: 50px;
    border-width: 2px;
    justify-content: center;
    marginTop: 20px;
   
   
`
export const PageLogo = styled.Image`
 width: 250px;
 height:220px;
`
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding:10px;
    ${(props) => props.welcome && `
        font-size: 30px;
        text-align: center;
    `}
    

`
export const PageSubTitle = styled.Text`
     font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
  ${(props) => props.welcome && `
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: normal;
    `}

`

export const StyledFormArea = styled.View`
    width:90%

 `
export const StyledTextInput = styled.TextInput`
    background-color: ${lightpink};
    padding:15px;
    padding-left: 30px;
    border-radius: 5px;
    font-size: 16px;
    height : 50px;
    color: ${tertiary};
    text-align: center;
    
 `
export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 16px;
    text-align: left;
 `

export const LeftIcon = styled.View`
    left:15px;
    top:38px;
    position: absolute;
    z-index: 1;
 `
export const RightIcon = styled.TouchableOpacity`
    right:15px;
    top:38px;
    position: absolute;
    z-index: 1;
    
 `
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${quinary};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    height:60px;
    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
        

    
    `}
 `
export const StyledButtonText = styled.Text`
    color: ${primary};
    font-size: 18px;
    ${(props) => props.google == true && `
     margin-left: 13px;
    `}
   
 
 `
export const MessageBox = styled.Text`
    text-align: center;
    font-size: 16px;
 `
export const Line = styled.View`
    height:1px;
    width:100%;
    background-color: ${tertiary};
    margin-top: 10px;
 
 `
export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
 `

export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    color: ${septenary};
    font-size: 16px;

 `
export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

 `

export const TextLinkContent = styled.Text`
    color: ${septenary};
    font-size: 16px;
 
 `

