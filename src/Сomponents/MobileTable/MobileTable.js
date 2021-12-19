import EllipsisText from "react-ellipsis-text";
import deleteImg from '../../images/other/delete.svg'
import s from './MobileTable.module.css';

const dataIncome = [
    {
        "_id": "61bbb3fdff32b0f7bb9db453",
        "date": "12.12.2021",
        "description": "no",
        "category": "Транспорт",
        "sum": 100,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-16T21:47:41.123Z",
        "updatedAt": "2021-12-16T21:47:41.123Z"
    },
    {
        "_id": "61bbb42fff32b0f7bb9db459",
        "date": "12.12.2021",
        "description": "no",
        "category": "Транспорт",
        "sum": 100,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-16T21:48:31.401Z",
        "updatedAt": "2021-12-16T21:48:31.401Z"
    },
    {
        "_id": "61bbb430ff32b0f7bb9db45d",
        "date": "12.12.2021",
        "description": "",
        "category": "Транспорт",
        "sum": 100,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-16T21:48:32.897Z",
        "updatedAt": "2021-12-16T21:48:32.897Z"
    },
    {
        "_id": "61bbb432ff32b0f7bb9db461",
        "date": "12.12.2021",
        "description": "",
        "category": "Транспорт",
        "sum": 100,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-16T21:48:34.404Z",
        "updatedAt": "2021-12-16T21:48:34.404Z"
    },
    {
        "_id": "61bbb86d1bdd51856f7c6f60",
        "date": "12.12.2021",
        "description": "cash",
        "category": "Транспорт",
        "sum": 10000000,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-16T22:06:37.097Z",
        "updatedAt": "2021-12-16T22:06:37.097Z"
    },
    {
        "_id": "61bbb91d1bdd51856f7c6f64",
        "date": "12.12.2021",
        "description": "travel",
        "category": "ЗП",
        "sum": 100000.67,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-16T22:09:33.886Z",
        "updatedAt": "2021-12-16T22:09:33.886Z"
    },
    {
        "_id": "61bbbaad1bdd51856f7c6f6e",
        "date": "12.09.2021",
        "description": "my wife",
        "category": "ЗП",
        "sum": 10000000.76,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-16T22:16:13.897Z",
        "updatedAt": "2021-12-16T22:16:13.897Z"
    },
    {
        "_id": "61bce43c471decf2df6c99ac",
        "date": "12.09.2021",
        "description": "buy a big good house for my wife",
        "category": "ЗП",
        "sum": 1000,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-17T19:25:48.550Z",
        "updatedAt": "2021-12-17T19:25:48.550Z"
    },
    {
        "_id": "61bcf8571141bd587fa21bc4",
        "date": "12.10.2021",
        "description": "house",
        "category": "ЗП",
        "sum": 10.00,
        "transactionType": "expense",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-17T20:51:35.603Z",
        "updatedAt": "2021-12-17T20:51:35.603Z"
    },
    {
        "_id": "61bcf86f1141bd587fa21bca",
        "date": "12.11.2021",
        "description": "",
        "category": "ЗП",
        "sum": 1000.00,
        "transactionType": "expense",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-17T20:51:59.806Z",
        "updatedAt": "2021-12-17T20:51:59.806Z"
    },
    {
        "_id": "61bcf8a61141bd587fa21bce",
        "date": "12.12.2021",
        "description": "prepare sandiches",
        "category": "ЗП",
        "sum": 1000.76,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-17T20:52:54.579Z",
        "updatedAt": "2021-12-17T20:52:54.579Z"
    },
    {
        "_id": "61bcf8ec1141bd587fa21bd6",
        "date": "12.08.2021",
        "description": "Metro",
        "category": "ЗП",
        "sum": 1000,
        "transactionType": "income",
        "owner": "61bb928304b8bb486d0b0e2b",
        "createdAt": "2021-12-17T20:54:04.487Z",
        "updatedAt": "2021-12-17T20:54:04.487Z"
    }
];

// const MobileTable = ({array}) => {
//     return (
//         <ul className={s.container}>
//             {dataIncome && dataIncome.map(item => (
//                 <li key={item._id} className={s.item}>
//                     <div className={s.itemWrapper}>
//                         <EllipsisText text={item.description} className={s.description} length={10} />
//                         <span className={s.date}>{item.date}</span>
//                     </div>
//                     <span className={s.category}>{item.category}</span>
//                     {item.transactionType === "income" 
//                         ? <span className={s.incomeTrsn}>- {item.sum.toFixed(2)}</span>
//                         : <span className={s.expenseTrsn}>{item.sum.toFixed(2)}</span>
//                     }
//                     <button className={s.deleteBtn}>
//                         <img 
//                             src={deleteImg} 
//                             alt="delete bucket" 
//                             className={s.deleteImg}
//                         />
//                     </button>
//                 </li>
//             ))}
//         </ul>
//     )
// };
const MobileTable = ({array}) => {
    return (
        <table className={s.table}>
            <tbody className={s.tbody}>
            
                {dataIncome && dataIncome.map(item => (
                    <tr key={item._id} className={s.tr}>
                        <td className={s.itemWrapper}>
                            {item.description 
                                ? <EllipsisText className={s.description} text={item.description} length={8} />
                                : <div className={s.emptyDescription}>&#9866;</div>
                            }
                            <span className={s.date}>{item.date}</span>
                        </td>
                        <td className={s.category}>{item.category}</td>
                        {item.transactionType === "income" 
                        ?   <td className={s.incomeTrsn}>
                                + {item.sum.toFixed(2)} грн.
                            </td> 
                        :   <td className={s.expenseTrsn}>
                                - {item.sum.toFixed(2)} грн.
                            </td>
                        }
                        <td>
                            <button className={s.deleteBtn}>
                                <img 
                                    src={deleteImg} 
                                    alt="delete bucket" 
                                    className={s.deleteImg}
                                    />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MobileTable;