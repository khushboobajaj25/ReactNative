import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {

    InnerContainer,

    PageTitle,
    PageSubTitle,
    StyledFormArea,

    StyledButton,
    StyledButtonText,

    Line,

    WelcomeContainer, WelcomeImage, Avatar

} from '../components/styles'





export default function Login() {
    const [hidePassword, setHidePassword] = useState(true);

    return (

        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('../assets/img/flower-color.jpg')} />
                <WelcomeContainer >
                    <PageTitle welcome={true}>Welcome Buddy!</PageTitle>
                    <PageSubTitle> Simpson</PageSubTitle>
                    <PageSubTitle> simpson@gmail.com</PageSubTitle>

                    <StyledFormArea>

                        <Avatar resizeMode="cover" source={require('../assets/img/pinkredrose.jpg')} />


                        <Line />
                        <StyledButton onPress={() => { }}>
                            <StyledButtonText>LogOut</StyledButtonText>
                        </StyledButton>


                    </StyledFormArea>



                </WelcomeContainer>
            </InnerContainer>
        </>
    )
}
