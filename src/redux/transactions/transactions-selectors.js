const getTransactionByYear = (state) => state.transactions.transactionByYear;
const getTransactionsByCategories = (state) => state.transactions.transactionsByCategories;
const getTransactionsForPeriod = (state) => state.transactions.transactionsForPeriod;
const getIsLoading = (state) => state.transactions.isLoading;
const getError = (state) => state.transactions.error;

const transactionsSelectors = {
  getTransactionByYear,
  getTransactionsByCategories,
  getTransactionsForPeriod,
  getIsLoading,
  getError
};

export default transactionsSelectors;
