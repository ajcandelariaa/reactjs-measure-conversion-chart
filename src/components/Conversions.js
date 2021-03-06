import React, {useState} from "react";
import { Buttons } from "../styles/Buttons.styled";
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
      <Buttons>
        <button className={ (conVal === 1) ? 'btn-active' : '' } onClick={metricConversion}>Metric Conversion</button>
        <button className={ (conVal === 2) ? 'btn-active' : '' } onClick={imperialConversion}>Imperial Conversion</button>
        <button className={ (conVal === 3) ? 'btn-active' : '' } onClick={metricToImperialConversion}>Metric to Imperial</button>
        <button className={ (conVal === 4) ? 'btn-active' : '' } onClick={imperialToMetricConversion}>Imperial to Metric</button>
      </Buttons>
      <div className="bg-conversion">
          <Conversion text={conversion} value={conVal} />
      </div>
    </div>
  );
}

export default Conversions;
