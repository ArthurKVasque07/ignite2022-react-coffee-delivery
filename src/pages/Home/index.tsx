import { Intro } from "../../components/_homePage/Intro";
import { OurCoffees } from "../../components/_homePage/OurCoffees";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />

      <OurCoffees />
    </HomeContainer>
  );
}