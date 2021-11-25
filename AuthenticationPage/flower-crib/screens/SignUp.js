import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from '@react-native-community/datetimepicker';

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

export default function SignUp() {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dob, setDob] = useState('');

    function onChange(event, selectedDate) {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }
    const showDatepicker = () => {
        setShow(true);
    }

    return (

        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>

                <PageTitle>FlowerCrib</PageTitle>
                <PageSubTitle> Accounts SignUp</PageSubTitle>


                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <Formik
                    initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                >{
                        ({ handleChange, handleBlur, handleSubmit, values }) =>
                        (<StyledFormArea>

                            <MyTextInput
                                label="Full Name"
                                icon="person"
                                placeholder="Himmat Singh"
                                placeholderTextColor={primary}
                                onChangeText={handleChange('fullname')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}

                            />
                            <MyTextInput
                                label="Date of Birth"
                                icon="calendar"
                                placeholder="YYYY - MM - DD"
                                placeholderTextColor={primary}
                                onChangeText={handleChange('dateOfBirth')}
                                onBlur={handleBlur('dateOfBirth')}
                                value={dob ? dob.toDateString() : ''}
                                isDate={true}
                                editable={false}
                                showDatePicker={showDatepicker}


                            />
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
                            <MyTextInput
                                label="Confirm Password"
                                icon="lock"
                                placeholder="* * * * *"
                                placeholderTextColor={primary}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('password')}
                                value={values.confirmPassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MessageBox>....</MessageBox>
                            <StyledButton onPress={handleSubmit}>
                                <StyledButtonText>Login</StyledButtonText>
                            </StyledButton>


                            <ExtraView>
                                <ExtraText>Already have an account?</ExtraText>
                                <TextLink>
                                    <TextLinkContent>LogIn</TextLinkContent>
                                </TextLink>
                            </ExtraView>

                        </StyledFormArea>)

                    }

                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
    return (
        <View >
            <LeftIcon>
                <Octicons name={icon} size={24} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />

            </TouchableOpacity>}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? "md-eye-off" : "md-eye"} size={24} color={octonary} />
                </RightIcon>
            )}

        </View>
    )
}
