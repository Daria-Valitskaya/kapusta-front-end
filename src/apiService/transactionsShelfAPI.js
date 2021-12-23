import axios from "axios";

export async function fetchSummary(type, date) {
  const { data } = await axios.get(`/transaction/summary/${type}/${date}`);
  return data;
}

export async function fetchSummaryByCategory(type, date) {
  const { data } = await axios.get(`/transaction/categories/${type}/${date}`);
  return data;
}

export async function fetchTransForPeriod(type, period) {
  const { data } = await axios.get(`/transaction/${type}/${period}`);
  return data;
}

const API_BY_TRANSACTION_TYPE = {
  income: "income",
  expense: "expenses",
};
export async function addTransaction({
  transactionType,
  date,
  description,
  category,
  sum,
}) {
  const { data } = await axios.patch(
    `/transaction/${API_BY_TRANSACTION_TYPE[transactionType]}`,
    {
      transactionType,
      date,
      description,
      category,
      sum,
    }
  );
  return data.data.result;
}

export async function deleteTransaction(transactionId) {
  return await axios.delete(`/transaction/${transactionId}`);
}
