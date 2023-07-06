import { SafeAreaView } from 'react-native-safe-area-context';
import SetupForm from '../components/setup/SetupForm';
import { useTheme } from '@react-navigation/native';

export default function SetupScreen() {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
            <SetupForm />
        </SafeAreaView>
    )
}