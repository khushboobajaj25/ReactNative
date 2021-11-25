import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Cards from '../shared/Cards';
import {MaterialIcons} from '@expo/vector-icons';
import Form from './reviewForm';



export default function Home({navigation}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Review 1', rating: 5, body: 'This is the first review', key: '1'},
        {title: 'Review 2', rating: 4, body: 'This is the second review', key: '2'},
        {title: 'Review 3', rating: 3, body: 'This is the third review', key: '3'},
        {title: 'Review 4', rating: 2, body: 'This is the fourth review', key: '4'},
    ])
    const addReviews = (review) =>{
        review.key = Math.random().toString();
        setReviews((currentReviews)=>{
            return [...currentReviews, review]
        })  ;
        setModalOpen(false);    
    }
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modelContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        color='black'
                        style={{...styles.modalToggle,...styles.modalClose}}
                        onPress={() => setModalOpen(false)}
            />
                        <Text style={{...globalStyles.titleText, ...styles.title}}>Add Your Review</Text>
                        <Form addReviews={addReviews}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                color='black'
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({item}) =>(
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Cards>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Cards>
                    </TouchableOpacity>
                )}
            />
           
        </View>
    )
}
const styles = StyleSheet.create({
    modelContent: {
        margin: 20,
        flex:1,
    },
    title:{
        marginVertical: 10,
        textAlign: 'center',
        fontFamily: 'nunito-bold'
        

    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'

    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,

    }
})