export const inputsRegister = (dispatch, type, input) => {
  return dispatch({
    type: type,
    input: input,
  });
};
