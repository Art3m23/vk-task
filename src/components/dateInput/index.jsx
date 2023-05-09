import React from "react";
import DatePicker from "react-datepicker";
import { registerLocale} from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

registerLocale('ru', ru);

export const DateInput = ({startDate, setStartDate}) => {
  return (
    <DatePicker
      selected={startDate}
      dateFormat="dd.MM.yyyy"
      name='dateBooking'
      placeholderText="дд.мм.гггг"
      locale='ru'
      onChange={(date) => setStartDate(date)}
      className='date-picker'
      required
    />
  );
};