import Navigation from "./navigation/Navigation";
import SetupNavigation from "./navigation/SetupNavigation";
import { usePokeContext } from "./context/PokeContext";

export default function Main() {
    const { setup } = usePokeContext();
    
    return (
        <>
            { setup ? <Navigation /> : <SetupNavigation />}
        </>
    );
}
