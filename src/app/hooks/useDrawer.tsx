import { useContext } from "react";
import { DrawerContext } from "@/contexts/DrawerContext";

export function useDrawer () {
    const { toggleDrawer, setToggleDrawer } = useContext(DrawerContext);
    return {
        isOpen: toggleDrawer,
        setToggleDrawer: setToggleDrawer
    }
}