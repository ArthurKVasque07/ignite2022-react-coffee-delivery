export function formatMoney(value: number) {
  if(!value) return;
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
}