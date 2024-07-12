import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@chakra-ui/react";

const CustomDatePicker = ({
  selected,
  onChange,
  maxDate,
  minDate,
  showTimeSelect,
  dateFormat,
  timeFormat,
  timeIntervals,
}) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      maxDate={maxDate}
      minDate={minDate}
      showTimeSelect={showTimeSelect}
      dateFormat={dateFormat}
      timeFormat={timeFormat}
      timeIntervals={timeIntervals}
      customInput={<Input />}
    />
  );
};

CustomDatePicker.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  showTimeSelect: PropTypes.bool,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  timeIntervals: PropTypes.number
};

CustomDatePicker.defaultProps = {
  selected: null,
  maxDate: null,
  minDate: null,
  showTimeSelect: false,
  dateFormat: "MM/dd/yyyy",
  timeFormat: "HH:mm",
  timeIntervals: 60,
};

export default CustomDatePicker;
