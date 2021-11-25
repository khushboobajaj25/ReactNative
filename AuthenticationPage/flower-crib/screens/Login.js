import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    PageSubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon, 
    StyledButton, 
    StyledInputLabel, 
    StyledTextInput, 
    Colors, 
    StyledButtonText, 
    MessageBox, 
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
    
} from '../components/styles'
// formik

import { Formik } from 'formik'
// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

const { primary, secondary, brand, octonary } = Colors

export default function Login() {
    const [hidePassword, setHidePassword] = useState(true);

    return (

        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/img/pinkredrose.jpg')} />
                <PageTitle>FlowerCrib</PageTitle>
                <PageSubTitle> Account Login</PageSubTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                >{
                        ({ handleChange, handleBlur, handleSubmit, values }) =>
                        (<StyledFormArea>

                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="ani@gmail.com"
                                placeholderTextColor={primary}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * *"
                                placeholderTextColor={primary}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MessageBox>....</MessageBox>
                            <StyledButton onPress={handleSubmit}>
                                <StyledButtonText>Login</StyledButtonText>
                            </StyledButton>
                            <Line />
                            <StyledButton google={true} onPress={handleSubmit}>
                                <Fontisto name="google" size={24} color={primary} />
                                <StyledButtonText google={true}>Sign in with Google</StyledButtonText>
                            </StyledButton> 
                            <ExtraView>
                                <ExtraText>Don't have an account?</ExtraText>
                                <TextLink>
                                    <TextLinkContent>Sign up</TextLinkContent>
                                </TextLink>
                            </ExtraView>

                        </StyledFormArea>)

                    }

                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View >
            <LeftIcon>
                <Octicons name={icon} size={24} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? "md-eye-off" : "md-eye"} size={24} color={octonary} />
                </RightIcon>
            )}

        </View>
    )
}
