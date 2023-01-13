import { CounterInputContainer, IconWrapper } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface CounterInputProps {
  size?: "medium" | "small";
  counter: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Counter({
  onIncrease,
  onDecrease,
  counter,
  size = "medium",
}: CounterInputProps) {
  return (
    <CounterInputContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={counter <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={counter} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CounterInputContainer>
  );
}