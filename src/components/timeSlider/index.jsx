import styled from 'styled-components';
import ReactSlider from 'react-slider'
import './style.css';

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
    margin: 12px 0 6px 0;
    border: 1px solid #ebebeb;
    border-radius: 999px;
`;

const StyledThumb = styled.div`
    height: 25px;
    width: 25px;
    color: #fff;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    border-radius: 50%;
    cursor: grab;
    outline: none;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;


export const TimeSlider = ({setValues, timeSlider}) => {
  
  return (
    <StyledSlider ref={timeSlider} defaultValue={[8, 22]} min={8} max={22} renderTrack={Track} renderThumb={Thumb} onChange={value=>setValues(value)} required/>
  )
}