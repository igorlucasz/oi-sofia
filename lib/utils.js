// TODO: funções utilitárias gerais do projeto

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date, locale = "pt-BR") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
