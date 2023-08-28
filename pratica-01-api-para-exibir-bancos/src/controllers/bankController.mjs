import { getData } from "../models/bankModel.mjs";

export const bankController = () => {
  const getBank = getData();
  return getBank;
};
