import { BackButton} from "./BackButton";
import { BottomIndicator } from "./BottomIndicator";
import { MenuItems } from "./MenuItems";
import NavigationMenu from "./NavigationMenu";
import { StatusBar } from "../Calendar/StatusBar";



function MenuPage() {

  return (
    <>
      <BackButton />
      <BottomIndicator />
      <MenuItems />
      <NavigationMenu />
      <StatusBar />

    </>
  )
}

export default MenuPage
