import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@chakra-ui/react";

const CustomDatePicker = ({
  selected = null,
  onChange,
  maxDate = null,
  minDate = null,
  showTimeSelect = false,
  dateFormat = "MM/dd/yyyy",
  timeFormat = "HH:mm",
  timeIntervals = 60,
  minTime = null,
  maxTime = null,
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
      minTime={minTime}
      maxTime={maxTime}
      customInput={
        <Input
          focusBorderColor="teal.500"
          errorBorderColor="red.500"
          borderColor="black"
        />
      }
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
  timeIntervals: PropTypes.number,
  minTime: PropTypes.instanceOf(Date),
  maxTime: PropTypes.instanceOf(Date),
};

export default CustomDatePicker;
