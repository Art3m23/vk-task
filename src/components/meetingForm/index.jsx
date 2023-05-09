import { useState, useRef } from "react";
import { TimeSlider } from "../timeSlider";
import { DateInput } from "../dateInput";
import { Select } from "../select";
import './style.css';

const towers = ['','A', 'B'];
const floors = ['',3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
const meetingItems = ['',1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const MeetingForm = () => {
  const [values, setValues] = useState([8, 22]);
  const [tower, setTower] = useState('');
  const [floor, setFloor] = useState('');
  const [meetingItem, setMeetingItem] = useState('');
  const [startDate, setStartDate] = useState(null);
  const meetingForm = useRef(null);
  const timeSlider = useRef(null);

  const handleChangeTower = (event) => {
    setTower(event.target.value);
  }

  const handleChangeFloor = (event) => {
    setFloor(event.target.value);
  }

  const handleChangeMeetingItem = (event) => {
    setMeetingItem(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(meetingForm.current)
    const formDataObj = {};
    let interval = '';
    formData.forEach((value, key) => {
      if (key === 'time') {
        interval += value + ' - ';
      } else {
        formDataObj[key] = value
      }
      formDataObj['interval'] = interval.slice(0, interval.length - 3);
    });
    console.log(JSON.stringify(formDataObj))
  }

  const handleClick = (e) => {
    e.target.reset();
    setStartDate(null);
    setValues([8, 22]);
    timeSlider.current.state.value = [8, 22];
  }

  return (
    <div className="form-container">
      <h1>Бронирование переговорной</h1>
      <form onSubmit={handleSubmit} onReset={handleClick} ref={meetingForm} className="form">
        <div className='form-groop'>
          <div className="form-element">
            <label>Башня:
              <Select array={towers} name='tower' value={tower} handleChange={handleChangeTower} />
            </label>
          </div>
          <div className="form-element">
            <label>Этаж:
              <Select array={floors} name='floor' value={floor} handleChange={handleChangeFloor} />
            </label>
          </div>
          <div className="form-element">
            <label >Переговорная:
              <Select array={meetingItems} name='meetingItem' value={meetingItem} handleChange={handleChangeMeetingItem} />
            </label>
          </div>
        </div>
        <div className="form-groop">
          <div className="form-element">
            <label>
              Интервал времени:
              <TimeSlider setValues={setValues} timeSlider={timeSlider} />
            </label>
          </div>
          <div className="form-element">
            <label>
              C:
              <input type="text" name='time' readOnly value={values[0] + ' : 00'} className='time' />
            </label>
          </div>
          <div className="form-element">
            <label>
              До:
              <input type="text" name='time' readOnly value={values[1] + ' : 00'} className='time' />
            </label>
          </div>
        </div>
        <div className="form-groop">
          <div className="form-element">
            <label>
              Дата бронирования:
              <DateInput startDate={startDate} setStartDate={setStartDate} />
            </label>
          </div>
        </div>
        <div className="form-groop">
          <div className="form-element comment-container">
            <label>
              Комментарий:
              <textarea name='comment'/>
            </label>
          </div>
        </div>
        <div className='button-container'>
          <input type="reset" value="Очистить форму" className='reset'/>
          <input type="submit" value="Отправить" className='submit'/>
        </div>
      </form>
    </div>
  )
}