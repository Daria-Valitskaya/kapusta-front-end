import { createSlice } from "@reduxjs/toolkit";
import { transactionsOperations } from ".";

const initialState = {
  allTransactions: {
    income: [],
    expense: [],
  },
  transactionsByCategories: [],
  transactionsForPeriod: {
    income: [],
    expense: [],
  },
  isLoading: false,
  errorMessage: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: (builder) => {
    // GET SUMMARY
    builder.addCase(
      transactionsOperations.getSummary.fulfilled,
      ({ allTransactions, isLoading }, { payload }) => {
        // console.log("transactions received successfully");
        allTransactions[payload.transactionType] = payload.data;
        isLoading = false;
      }
    );

    builder.addCase(
      transactionsOperations.getSummary.rejected,
      ({ isLoading, error }, { payload }) => {
        // console.log("something went wrong, transactions are not received");
        error = payload.message;
        isLoading = false;
      }
    );

    builder.addCase(
      transactionsOperations.getSummary.pending,
      ({ isLoading, error }, _) => {
        // console.log("wait, pending...");
        error = null;
        isLoading = true;
      }
    );

    // GET SUMMARY BY CATEGORY
    builder.addCase(
      transactionsOperations.getSummaryByCategory.fulfilled,
      ({ transactionsByCategories, isLoading }, { payload }) => {
        // console.log("transactions received successfully");
        // console.log(payload);
        transactionsByCategories = [...payload];
        isLoading = false;
      }
    );

    builder.addCase(
      transactionsOperations.getSummaryByCategory.rejected,
      ({ isLoading, error }, { payload }) => {
        // console.log("something went wrong, transactions are not received");
        error = payload.message;
        isLoading = false;
      }
    );

    builder.addCase(
      transactionsOperations.getSummaryByCategory.pending,
      ({ isLoading, error }, _) => {
        // console.log("wait, pending...");
        error = null;
        isLoading = true;
      }
    );

    // GET TRANSACTION FOR PERIOD
    builder.addCase(
      transactionsOperations.getTransForPeriod.fulfilled,
      ({ isLoading, transactionsForPeriod }, { payload }) => {
        // console.log("transactions received successfully");
        transactionsForPeriod[payload.transactionType] = [...payload.data];
        isLoading = false;
      }
    );

    builder.addCase(
      transactionsOperations.getTransForPeriod.rejected,
      ({ isLoading, error, transactionsForPeriod }, { payload }) => {
        // console.log("something went wrong, transactions are not received");
        error = payload.message;
        isLoading = false;
        transactionsForPeriod[payload.transactionType] = [];
      }
    );

    builder.addCase(
      transactionsOperations.getTransForPeriod.pending,
      ({ isLoading, error }, _) => {
        // console.log("wait, pending...");
        error = null;
        isLoading = true;
      }
    );

    // ADD TRANSACTION
    builder.addCase(
      transactionsOperations.addTransaction.fulfilled,
      ({ isLoading, error }, { payload }) => {
        error = null;
        isLoading = false;
      }
    );

    builder.addCase(
      transactionsOperations.addTransaction.rejected,
      ({ isLoading, error }, { payload }) => {
        error = payload.message;
        isLoading = false;
      }
    );

    builder.addCase(
      transactionsOperations.addTransaction.pending,
      ({ isLoading, error }, _) => {
        error = null;
        isLoading = true;
      }
    );

    // DELETE TRANSACTION
    builder.addCase(
      transactionsOperations.deleteTransaction.fulfilled,
      ({ allTransactions, isLoading }, { payload }) => {
        // console.log("transaction have been deleted");
        allTransactions[payload.transactionType] = allTransactions[
          payload.transactionType
        ].filter((transaction) => transaction._id !== payload.transactionId);
        isLoading = false;
      }
    );

    builder.addCase(
      transactionsOperations.deleteTransaction.rejected,
      ({ isLoading, error }, { payload }) => {
        // console.log("something went wrong, transaction are not deleted");
        error = payload.message;
        isLoading = false;
      }
    );

    builder.addCase(
      transactionsOperations.deleteTransaction.pending,
      ({ isLoading, error }, _) => {
        // console.log("wait, pending...");
        error = null;
        isLoading = true;
      }
    );
  },
});

export default transactionsSlice.reducer;
