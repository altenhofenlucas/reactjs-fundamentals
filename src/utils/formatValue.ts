export const formatCurrencyValueFromString = (value: string): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    Number(value),
  );

export const formatCurrencyValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export const formatDateValueFromTimestamp = (value: Date): string =>
  Intl.DateTimeFormat('pt-br').format(value);
