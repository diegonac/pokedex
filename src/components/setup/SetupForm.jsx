import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePokeContext } from '../../context/PokeContext';
import MyButton from '../MyButton';

export default function SetupForm() {

    const { colors } = useTheme();

    const { sendSetup } = usePokeContext();

    const styleInputs = {
        ...styles.input,
        color: colors.text
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (dataForm) => {
            sendSetup(dataForm);
        }
    });

    return (
        <View>
            <Text style={[styles.title, {color: colors.text}]}>Regístrese en Pokedex</Text>
            <View style={styles.contentImage}>
                <Image source={require("../../assets/loginPokeball.png")} style={styles.image} />
            </View>
            <View style={styles.contentInput}>
                <TextInput 
                    style={[styleInputs, formik.errors.firstName && styles.inputError]}
                    placeholder='Nombre'
                    placeholderTextColor={formik.errors.firstName ? '#f007' : colors.placeholder}
                    value={formik.values.firstName}
                    onChangeText={(text) => formik.setFieldValue('firstName', text.trim())}
                />
                <Text style={styles.error}>{formik.errors.firstName}</Text>
                <TextInput 
                    style={[styleInputs, formik.errors.lastName && styles.inputError]} 
                    placeholder='Apellido'
                    placeholderTextColor={formik.errors.lastName ? '#f007' : colors.placeholder}
                    value={formik.values.lastName}
                    onChangeText={(text) => formik.setFieldValue('lastName', text.trim())}
                />
                <Text style={styles.error}>{formik.errors.lastName}</Text>
                <TextInput 
                    style={[styleInputs, formik.errors.age && styles.inputError]} 
                    placeholder='Edad'
                    placeholderTextColor={formik.errors.age ? '#f007' : colors.placeholder}
                    keyboardType='numeric'
                    value={formik.values.age}
                    onChangeText={(text) => formik.setFieldValue('age', text)}
                />
                <Text style={styles.error}>{formik.errors.age}</Text>
                <MyButton title='Enviar' onPress={formik.handleSubmit} />
            </View>
        </View>
    )
}

const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
};

function validationSchema() {
    return {
        firstName: Yup.string().required('Debe poner un nombre.').min(3, 'Debe tener al menos 3 carácteres.').max(20, "Debe tener menos de 20 carácateres."),
        lastName: Yup.string().required('Debe poner un apellido.').min(3, 'Debe tener al menos 3 carácteres.').max(20, "Debe tener menos de 20 carácateres."),
        age: Yup.number().required("Debe poner una edad."),
    };
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold'
    },
    contentImage: {
        alignItems: 'center',
        marginVertical: 20
    },
    image: {
        height: 200,
        width: 200,
    },
    contentInput: {
        marginTop: 0
    },
    input: {
        padding: 10,
        margin: 12,
        marginHorizontal: 35,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "rgba(128, 128, 128, 1)",
        height: 40,
    },
    inputError: {
        borderColor: '#f00',
        backgroundColor: '#db020238',
    }, 
    error: {
        textAlign: "center",
        color: "#f00",
    }
});