import { Play } from "phosphor-react";
import {
  CountDownContainer,
  FormnContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormnContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesInput type="number" id="minutesAmount" placeholder="00" />

          <span>minutos.</span>
        </FormnContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton disabled type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}

export default Home;
