import Navigation from "./navigation/Navigation";
import SetupScreen from "./screens/SetupScreen";
import { usePokeContext } from "./context/PokeContext";

export default function Main() {
    const { setup } = usePokeContext();
    
    return (
        <>
            { setup ? <Navigation /> : <SetupScreen />}
        </>
    );
}
