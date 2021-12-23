import EllipsisText from "react-ellipsis-text";
import deleteImg from "../../images/other/delete.svg";
import s from "./MobileTable.module.css";

const MobileTable = ({ array }) => {
  return (
    <table className={s.table}>
      <tbody className={s.tbody}>
        {array &&
          array.map((item) => (
            <tr key={item._id} className={s.tr}>
              <td className={s.itemWrapper}>
                {item.description ? (
                  <EllipsisText
                    className={s.description}
                    text={item.description}
                    length={8}
                  />
                ) : (
                  <div className={s.emptyDescription}>&#9866;</div>
                )}
                <span className={s.date}>{item.date}</span>
              </td>
              <td className={s.category}>{item.category}</td>
              {item.transactionType === "income" ? (
                <td className={s.incomeTrsn}>+ {item.sum.toFixed(2)} грн.</td>
              ) : (
                <td className={s.expenseTrsn}>- {item.sum.toFixed(2)} грн.</td>
              )}
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
  );
};

export default MobileTable;
