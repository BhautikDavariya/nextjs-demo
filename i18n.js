export const getRequestConfig = (locale) => {
  const localeValue = locale ? locale : "en";
  return {
    messages: () =>
      import(`./locales/${localeValue}.json`).then((module) => module.default),
  };
};
