export const languageChangeForTodo = (language) => {
  if (language === "ukraine") {
    return {
      titleTodo: "Todo",
      filterTodo: {
        all: "Всі",
        complete: "Виконані",
        incomplete: "Невиконані",
      },
      settingTodo: {
        titleLanguage: "Мова",
        titleTheme: "Тема",
        btnSubmitChange: "Змінити",
      },
    };
  }
  if (language === "sweden") {
    return {
      titleTodo: "Todo",
      filterTodo: {
        all: "Allt",
        complete: "Avrättade",
        incomplete: "Ouppfylld",
      },
      settingTodo: {
        titleLanguage: "Språk",
        titleTheme: "Tema",
        btnSubmitChange: "Förändra",
      },
    };
  }
  return {
    titleTodo: "Todo",
    filterTodo: {
      all: "All",
      complete: "Complete",
      incomplete: "Incomplete",
    },
    settingTodo: {
      titleLanguage: "Language",
      titleTheme: "Theme",
      btnSubmitChange: "Change",
    },
  };
};
