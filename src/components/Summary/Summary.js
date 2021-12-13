import s from './Summary.module.css';

const arrayData = [
    {
        month: "Январь",
        sum: 10000.00
    },
    {
        month: "Февраль",
        sum: 25000.00
    },
    {
        month: "Март",
        sum: 26000.00
    },
    {
        month: "Апрель",
        sum: 30000.00
    },
    {
        month: "Май",
        sum: 30900.00
    },
    {
        month: "Июнь",
        sum: 17800.00
    },
    {
        month: "Июль",
        sum: 43000.00
    },
    {
        month: "Август",
        sum: 30450.00
    },
    {
        month: "Сентябрь",
        sum: 25070.00
    },
    {
        month: "Октябрь",
        sum: 10280.00
    },
    {
        month: "Ноябрь",
        sum: 37000.00
    },
    {
        month: "Декабрь",
        sum: 31090.00
    }
]

const Summary = () => {
    return (
        <ul className={s.list}>
            <li className={s.caption}>Сводка</li>
            {arrayData.map(item => (
                <li key={item.month} className={s.listItem}>
                    <span>{item.month}</span>
                    <span>{item.sum}</span>
                </li>
            ))}
        </ul>
    )
};

export default Summary;