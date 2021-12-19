import { createAsyncThunk } from '@reduxjs/toolkit'
import { transactionsShelfAPI } from '../../apiService'

export const getSummary = createAsyncThunk(
  'transactions/getSummary',
  async ({ type, date }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.fetchSummary(type, date)
      const year = date.substr(6, 9)
      return {
        year,
        type,
        data
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getSummaryByCategory = createAsyncThunk(
  'transactions/categories/getSummaryByCategory',
  async ({ type, date }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.fetchSummaryByCategory(
        type,
        date
      )
      const year = date.substr(6, 9)
      return {
        year,
        type,
        data
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getTransForPeriod = createAsyncThunk(
  'transactions/categories/getTransForPeriod',
  async ({ type, period }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.fetchTransForPeriod(
        type,
        period
      )
      return {
        period,
        type,
        data
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const income = createAsyncThunk(
  'transactions/income',
  async ({ date, description, category, sum }, { rejectWithValue }) => {
    try {
      const { data } =  await transactionsShelfAPI.patchIncome({
        date,
        description,
        category,
        sum
      })
      const year = data.date.substr(6, 9)
      return {
        year,
        data
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const expenses = createAsyncThunk(
  'transactions/expenses',
  async ({ date, description, category, sum }, { rejectWithValue }) => {
    try {
      const { data } = await transactionsShelfAPI.patchExpenses({
        date,
        description,
        category,
        sum
      })
      const year = data.date.substr(6, 9)
      return {
        year,
        data
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async ({date, transactionId, type}, { rejectWithValue }) => {
    try {
      await transactionsShelfAPI.deleteTransaction(transactionId)
      const year = date.substr(6, 9)
      return {
        year,
        transactionId,
        type
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
