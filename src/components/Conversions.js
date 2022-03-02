import React, {useState} from "react";
import Conversion from "./Conversion";

function Conversions() {
    const [conversion, setConversion] = useState('Metric Conversion');
    const [conVal, setConVal] = useState(1);

    function metricConversion() {
        setConversion('Metric Conversion');
        setConVal(1);
    }
    function imperialConversion() {
        setConversion('Imperial Conversion');
        setConVal(2);
    }
    function metricToImperialConversion() {
        setConversion('Metric to Imperial Conversion');
        setConVal(3);
    }
    function imperialToMetricConversion() {
        setConversion('Imperial to Metric Conversion');
        setConVal(4);
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
          <Conversion text={conversion} value={conVal} />
      </div>
    </div>
  );
}

export default Conversions;
