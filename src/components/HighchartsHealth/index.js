import React from 'react'
import Highcharts from 'highcharts';
import HighchartReact from 'highcharts-react-official'



const HighchartsHealth = (options) => {
  return (
    <>
      <HighchartReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default HighchartsHealth
