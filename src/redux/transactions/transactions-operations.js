import { createAsyncThunk } from '@reduxjs/toolkit'
import { transactionsShelfAPI } from '../../apiService'

export const getSummary = createAsyncThunk(
  'transactions/getSummary',
  async ({ transactionType, date }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.fetchSummary(transactionType, date)
      console.log(data)
      return {
        transactionType,
        data
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getSummaryByCategory = createAsyncThunk(
  'transactions/categories/getSummaryByCategory',
  async ({ transactionType, date }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.fetchSummaryByCategory(
        transactionType,
        date
      )
      const year = date.substr((date.length - 4), (date.length - 1))
      const dataWithYear = data.map(({ category, sum }) => ({ year, category, sum }))
      
      return dataWithYear;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getTransForPeriod = createAsyncThunk(
  'transactions/categories/getTransForPeriod',
  async ({ transactionType, period }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.fetchTransForPeriod(
        transactionType,
        period
      )
      return {
        period,
        data
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const income = createAsyncThunk(
  'transaction/income',
  async ({ transactionType, date, description, category, sum }, { rejectWithValue }) => {
    try {
      const result = await transactionsShelfAPI.patchIncome({
        transactionType,
        date,
        description,
        category,
        sum
      })
      return result;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const expenses = createAsyncThunk(
  'transaction/expenses',
  async ({ transactionType, date, description, category, sum }, { rejectWithValue }) => {
    try {
      const result = await transactionsShelfAPI.patchExpenses({
        transactionType,
        date,
        description,
        category,
        sum
      })
      return result;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async ({transactionId, transactionType}, { rejectWithValue }) => {
    try {
      await transactionsShelfAPI.deleteTransaction(transactionId)
      return {transactionId, transactionType};
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
