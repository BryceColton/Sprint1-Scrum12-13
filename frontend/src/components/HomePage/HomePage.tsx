import { ActionButtons } from "./ActionButtons";
import { MainContent } from "./MainContent";
import { NavigationBar } from "./NavigationBar";
import { StatusBar } from "./StatusBar";


export function HomePage() {

  return (
    <>
        <StatusBar /> 
        <NavigationBar />
      <MainContent /> 

    </>
  )
}