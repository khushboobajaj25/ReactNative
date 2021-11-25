import React from 'react'
import { View, Text , TextInput, Button} from 'react-native'
import { globalStyles } from '../styles/global'
import {Formik} from 'formik';
import * as yup from "yup"
import CustomButton from '../shared/CustomButton';


const ReviewSchema = yup.object({
    title: yup.string().required().min(4).max(100),
    body: yup.string().required().min(4).max(1000),
    rating: yup.string().required().min(1).max(5).test('is-num-1-5','Rating must be between 1 and 5',(val)=>{
        return parseInt(val) <6 && parseInt(val) >0
    })
})

export default function Form(props ) {
    
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title:'', body:'', rating:'' }}
                validationSchema={ReviewSchema}
                onSubmit={(values,action) => {
                    action.resetForm();
                    props.addReviews(values)
                    console.log(values);
                }}
            >
                {(props)=>{
                    return (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review Title'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                            <TextInput
                                multiline minHeight={60}
                                style={globalStyles.input}
                                placeholder='Review Body'
                                onChangeText={props.handleChange('body')}
                                value={props.values.body}
                                onBlur={props.handleBlur('body')}
                            />
                             <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                            
                            <TextInput
                                
                                style={globalStyles.input}
                                placeholder='Rating(1-5)'
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                keyboardType='numeric'
                                onBlur={props.handleBlur('rating')}
                            />
                             <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                            <CustomButton
                                title='Submit'
                                onPress={props.handleSubmit}
                            />
                        </View>
                    )
                }}
            </Formik>
            

            
        </View>
    )
}
