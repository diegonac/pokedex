import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { usePokeContext } from '../../context/PokeContext';
import ItemText from './ItemText';
import SwitchTheme from './SwitchTheme';
import styles from './styles';


export default function AccountData() {
    const { setup, favorites } = usePokeContext();
    const { colors } = useTheme();

    return (
        <View style={styles.content}>
            <Text style={[styles.title, { color: colors.text }]}>Bienvenido {setup.firstName}</Text>

            <View style={styles.dataContent}>
                <ItemText title='Nombre' text={`${setup.firstName}`} />
                <ItemText title='Apellido' text={setup.lastName} />
                <ItemText title='Edad' text={setup.age} />
                <SwitchTheme />
                <ItemText title='Total favoritos' text={favorites.length + ' pokemones'} />
            </View>

        </View>
    )
}