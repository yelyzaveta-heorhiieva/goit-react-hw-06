import { FaUser, FaPhone } from "react-icons/fa6";
import s from './Contact.module.css'

const Contact = ({ data: {name, number, id}, onDelete }) => {

  return (
      <>
        <div className={s.wrapper}>
            <p className={s.text}><FaUser />{name}</p>
            <a className={s.text} href={`tel:+${number.split('-').join('')}`}><FaPhone />{number}</a>
        </div>
        <button className={s.deleteBtn} type="button" onClick={() => onDelete(id)}>Delete</button>
    </>

  )
}

export default Contact

