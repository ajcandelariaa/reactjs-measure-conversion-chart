import React, {useState} from "react";
import Conversion from "./Conversion";

function Conversions() {
    const [conversion, setConversion] = useState('Metric Conversion');

    function metricConversion() {
        setConversion('Metric Conversion');
    }
    function imperialConversion() {
        setConversion('Imperial Conversion');
    }
    function metricToImperialConversion() {
        setConversion('Metric to Imperial Conversion');
    }
    function imperialToMetricConversion() {
        setConversion('Imperial to Metric Conversion');
    }

  return (
    <div>
      <div>
        <button onClick={metricConversion}>Metric Conversion</button>
        <button onClick={imperialConversion}>Imperial Conversion</button>
        <button onClick={metricToImperialConversion}>Metric to Imperial</button>
        <button onClick={imperialToMetricConversion}>Imperial to Metric</button>
      </div>
      <div>
          <Conversion text={conversion} />
      </div>
    </div>
  );
}

export default Conversions;
