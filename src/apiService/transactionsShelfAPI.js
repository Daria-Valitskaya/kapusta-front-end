import axios from 'axios';

export async function fetchSummary(type, date) {
    const { data } = await axios.get(`/transactions/summary/${type}/${date}`);
    return data;
}

export async function fetchSummaryByCategory(type, date) {
    const { data } = await axios.get(`/transactions/categories/${type}/${date}`)
    return data;
}

export async function fetchTransForPeriod(type, period) {
    const { data } = await axios.get(`/transactions/${type}/${period}`)
    return data;
} 
export async function patchIncome({date, description, category, sum}) {
    const { data } =  await axios.patch('/transactions/income', {
        date,
        description,
        category,
        sum,
    });
    return data;
}

export async function patchExpenses({date, description, category, sum}) {
    const { data } = await axios.patch('/transactions/expenses', {
        date,
        description,
        category,
        sum,
    });
    return data;
}

export async function deleteTransaction(transactionId) {
    return await axios.delete(`/transactions/${transactionId}`);
}
