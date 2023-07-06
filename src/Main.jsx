import Navigation from "./navigation/Navigation";
import SetupScreen from "./screens/SetupScreen";
import Loading from "./components/Loading";
import { usePokeContext } from "./context/PokeContext";
import { useEffect, useState } from "react";

export default function Main() {
    const [infoUser, setInfoUser] = useState(null);
    const { setup } = usePokeContext();
    useEffect(() => {
        setTimeout(() => {
            setInfoUser(setup);
        }, 1500);
    }, [setup])
    return (
        <>
            { infoUser === null ? <Loading /> :  infoUser ? <Navigation /> : <SetupScreen />}
        </>
    );
}
