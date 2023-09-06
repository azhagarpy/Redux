export const User1 = () => {
  return { type: 1 };
};

export const User2 = () => {
  return { type: 2 };
};

export const User3 = () => {
  return { type: 3 };
};

// custome state from form

export const User4 = (Name, Age) => {
    return { type: 4, payload: { Name: Name, Age: Age } };
};
