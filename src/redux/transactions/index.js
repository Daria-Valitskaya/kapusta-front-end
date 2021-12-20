export * as transactionsOperations from './transactions-operations';
export * as transactionsReducer from './transactions-slice';
export { default as transactionsSelectors } from './transactions-selectors';

// ДЛЯ ТЕСТИНГА
// import { transactionsOperations } from "../../redux/transactions"
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// const dispatch = useDispatch();
// const date = '01.11.2021'
// const description = 'lorem'
// const category = "Транспорт"
// const sum = 4000

// useEffect(() => {
//   dispatch(transactionsOperations.income({date, description, category, sum}))
// }, [dispatch])

