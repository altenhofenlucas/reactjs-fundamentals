export const formatCurrencyFromString = (value: string): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    Number(value),
  );

export const formatCurrency = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export const formatDateFromTimestamp = (value: Date): string =>
  Intl.DateTimeFormat('pt-br').format(value);
