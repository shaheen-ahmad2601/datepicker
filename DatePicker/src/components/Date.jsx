import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import "./Date.css"
export const Dates =()=>{

    const [period, setPeriod] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
      return(
        <DateRangePicker className="Dates-picker"
        onChange={item => setPeriod([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={period}
        direction="horizontal"
      />
      )
}