import React, { useState, useRef } from "react";
import { Inputs } from "../styles/Inputs.styled";
import Answer from "./Answer";

function Form(props) {
  const [finalAnswer, setFinalAnswer] = useState();
  const firstInput = useRef();
  const metric1 = useRef();
  const metric2 = useRef();

  function pageOne(input1, choice1, choice2) {
    let result = 0;

    if (choice1 === "cm") {
      if (choice2 === "mm") {
        result = input1 * 10;
      } else if (choice2 === "dm") {
        result = input1 * 0.1;
      } else if (choice2 === "km") {
        result = input1 * 0.000001;
      } else if (choice2 === "m") {
        result = input1 * 0.01;
      } else {
        result = input1;
      }
    }

    //METRIC CONVERSION From DECIMETRE
    if (choice1 === "dm") {
      if (choice2 === "mm") {
        result = input1 * 100;
      } else if (choice2 === "cm") {
        result = input1 * 10;
      } else if (choice2 === "km") {
        result = input1 * 0.0001;
      } else if (choice2 === "m") {
        result = input1 * 0.1;
      } else {
        result = input1;
      }
    }

    //METRIC CONVERSION From METRE
    if (choice1 === "m") {
      if (choice2 === "mm") {
        result = input1 * 1000;
      } else if (choice2 === "cm") {
        result = input1 * 100;
      } else if (choice2 === "km") {
        result = input1 * 0.001;
      } else if (choice2 === "dm") {
        result = input1 * 10;
      } else {
        result = input1;
      }
    }
    //METRIC CONVERSION From KILOMETRE
    if (choice1 === "km") {
      if (choice2 === "mm") {
        result = input1 * 1000000;
      } else if (choice2 === "cm") {
        result = input1 * 100000;
      } else if (choice2 === "m") {
        result = input1 * 1000;
      } else if (choice2 === "dm") {
        result = input1 * 10000;
      } else {
        result = input1;
      }
    }
    //METRIC CONVERSION From MILLIMETRE
    if (choice1 === "mm") {
      if (choice2 === "km") {
        result = input1 * 0.0000001;
      } else if (choice2 === "cm") {
        result = input1 * 0.1;
      } else if (choice2 === "m") {
        result = input1 * 0.001;
      } else if (choice2 === "dm") {
        result = input1 * 0.01;
      } else {
        result = input1;
      }
    }
    return input1 + choice1 + " is equal to " + result + choice2;
  }

  function pageTwo(input1, choice1, choice2) {
    let result = 0;
    //IMPERIAL CONVERSION From FOOT
    if (choice1 === "ft") {
      if (choice2 === "in") {
        result = input1 * 12;
      } else if (choice2 === "yd") {
        result = input1 * 0.333333333;
      } else if (choice2 === "ch") {
        result = input1 * 0.0151515152;
      } else if (choice2 === "fur") {
        result = input1 * 0.00151515152;
      } else if (choice2 === "mi") {
        result = input1 * 0.000189393939;
      } else {
        result = input1;
      }
    }
    //IMPERIAL CONVERSION From YARD
    if (choice1 === "yd") {
      if (choice2 === "in") {
        result = input1 * 36;
      } else if (choice2 === "ft") {
        result = input1 * 3;
      } else if (choice2 === "ch") {
        result = input1 * 0.0454545455;
      } else if (choice2 === "fur") {
        result = input1 * 0.00454545455;
      } else if (choice2 === "mi") {
        result = input1 * 0.000568181818;
      } else {
        result = input1;
      }
    }
    //IMPERIAL CONVERSION From CHAIN
    if (choice1 === "ch") {
      if (choice2 === "in") {
        result = input1 * 792;
      } else if (choice2 === "ft") {
        result = input1 * 66;
      } else if (choice2 === "yd") {
        result = input1 * 22;
      } else if (choice2 === "fur") {
        result = input1 * 0.1;
      } else if (choice2 === "mi") {
        result = input1 * 0.0125;
      } else {
        result = input1;
      }
    }
    //IMPERIAL CONVERSION From FURLONG
    if (choice1 === "fur") {
      if (choice2 === "in") {
        result = input1 * 7920;
      } else if (choice2 === "ft") {
        result = input1 * 660;
      } else if (choice2 === "yd") {
        result = input1 * 220;
      } else if (choice2 === "ch") {
        result = input1 * 10;
      } else if (choice2 === "mi") {
        result = input1 * 0.125;
      } else {
        result = input1;
      }
    }
    //IMPERIAL CONVERSION From MILE
    if (choice1 === "mi") {
      if (choice2 === "in") {
        result = input1 * 63360;
      } else if (choice2 === "ft") {
        result = input1 * 0.1;
      } else if (choice2 === "yd") {
        result = input1 * 0.001;
      } else if (choice2 === "ch") {
        result = input1 * 0.01;
      } else if (choice2 === "fur") {
        result = input1 * 0.01;
      } else {
        result = input1;
      }
    }
    return input1 + choice1 + " is equal to " + result + choice2;
  }

  function pageThreeFour(input1, choice1, choice2) {
    let result = 0;
    //METRIC - IMPERIAL vice versa CONVERSION From MILLIMETRE
    if (choice1 === "mm") {
      if (choice2 === "in") {
        result = input1 * 0.0393700787;
      } else if (choice2 === "ft") {
        result = input1 * 0.0032808399;
      } else if (choice2 === "yd") {
        result = input1 * 0.0010936133;
      } else if (choice2 === "mi") {
        result = input1 * 0.00000062137;
      } else if (choice2 === "m") {
        result = input1 * 0.001;
      } else if (choice2 === "km") {
        result = input1 * 0.000001;
      } else if (choice2 === "cm") {
        result = input1 * 0.1;
      } else {
        result = input1;
      }
    }
    //METRIC - IMPERIAL vice versa CONVERSION From CENTIMETRE
    if (choice1 === "cm") {
      if (choice2 === "in") {
        result = input1 * 0.393700787;
      } else if (choice2 === "ft") {
        result = input1 * 0.032808399;
      } else if (choice2 === "yd") {
        result = input1 * 0.010936133;
      } else if (choice2 === "mi") {
        result = input1 * 0.0000062137;
      } else if (choice2 === "m") {
        result = input1 * 0.01;
      } else if (choice2 === "km") {
        result = input1 * 0.00001;
      } else if (choice2 === "mm") {
        result = input1 * 10;
      } else {
        result = input1;
      }
    }
    //METRIC - IMPERIAL vice versa CONVERSION From METRE
    if (choice1 === "m") {
      if (choice2 === "in") {
        result = input1 * 39.3700787;
      } else if (choice2 === "ft") {
        result = input1 * 3.2808399;
      } else if (choice2 === "yd") {
        result = input1 * 1.0936133;
      } else if (choice2 === "mi") {
        result = input1 * 0.000621371192;
      } else if (choice2 === "cm") {
        result = input1 * 100;
      } else if (choice2 === "km") {
        result = input1 * 0.001;
      } else if (choice2 === "mm") {
        result = input1 * 1000;
      } else {
        result = input1;
      }
    }
    //METRIC - IMPERIAL vice versa CONVERSION From INCH
    if (choice1 === "in") {
      if (choice2 === "cm") {
        result = input1 * 2.54;
      } else if (choice2 === "m") {
        result = input1 * 0.0254;
      } else if (choice2 === "km") {
        result = input1 * 0.0000254;
      } else if (choice2 === "ft") {
        result = input1 * 0.0833333333;
      } else if (choice2 === "yd") {
        result = input1 * 0.0277777778;
      } else if (choice2 === "mi") {
        result = input1 * 0.0000157828;
      } else if (choice2 === "mm") {
        result = input1 * 25.4;
      } else {
        result = input1;
      }
    }
    //IMPERIAL - METRIC vice versa CONVERSION From KILOMETRE
    if (choice1 === "km") {
      if (choice2 === "in") {
        result = input1 * 39370.0787;
      } else if (choice2 === "ft") {
        result = input1 * 3280.8399;
      } else if (choice2 === "yd") {
        result = input1 * 1093.6133;
      } else if (choice2 === "mi") {
        result = input1 * 0.621371192;
      } else if (choice2 === "cm") {
        result = input1 * 100000;
      } else if (choice2 === "mm") {
        result = input1 * 1000000;
      } else if (choice2 === "m") {
        result = input1 * 1000;
      } else {
        result = input1;
      }
    }
    //METRIC - IMPERIAL vice versa CONVERSION From FOOT
    if (choice1 === "ft") {
      if (choice2 === "in") {
        result = input1 * 12;
      } else if (choice2 === "km") {
        result = input1 * 0.0003048;
      } else if (choice2 === "yd") {
        result = input1 * 0.333333333;
      } else if (choice2 === "mi") {
        result = input1 * 0.000189393939;
      } else if (choice2 === "cm") {
        result = input1 * 30.48;
      } else if (choice2 === "mm") {
        result = input1 * 304.8;
      } else if (choice2 === "m") {
        result = input1 * 0.3048;
      } else {
        result = input1;
      }
    }
    //METRIC - IMPERIAL vice versa CONVERSION From YARD
    if (choice1 === "yd") {
      if (choice2 === "in") {
        result = input1 * 36;
      } else if (choice2 === "ft") {
        result = input1 * 3280.8399;
      } else if (choice2 === "km") {
        result = input1 * 0.0009144;
      } else if (choice2 === "mi") {
        result = input1 * 0.000568181818;
      } else if (choice2 === "cm") {
        result = input1 * 91.44;
      } else if (choice2 === "mm") {
        result = input1 * 914.4;
      } else if (choice2 === "m") {
        result = input1 * 0.9144;
      } else {
        result = input1;
      }
    }
    //METRIC - IMPERIAL vice versa CONVERSION From MILES
    if (choice1 === "mi") {
      if (choice2 === "in") {
        result = input1 * 63360;
      } else if (choice2 === "ft") {
        result = input1 * 5280;
      } else if (choice2 === "yd") {
        result = input1 * 1760;
      } else if (choice2 === "km") {
        result = input1 * 1.609344;
      } else if (choice2 === "cm") {
        result = input1 * 160934.4;
      } else if (choice2 === "mm") {
        result = input1 * 1609344;
      } else if (choice2 === "m") {
        result = input1 * 1609.344;
      } else {
        result = input1;
      }
    }
    return input1 + choice1 + " is equal to " + result + choice2;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredFirstInput = firstInput.current.value;
    const enteredMetric1 = metric1.current.value;
    const enteredMetric2 = metric2.current.value;

    if (props.value === 1) {
      setFinalAnswer(
        pageOne(enteredFirstInput, enteredMetric1, enteredMetric2)
      );
    } else if (props.value === 2) {
      setFinalAnswer(
        pageTwo(enteredFirstInput, enteredMetric1, enteredMetric2)
      );
    } else {
      setFinalAnswer(
        pageThreeFour(enteredFirstInput, enteredMetric1, enteredMetric2)
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Inputs>
        {props.value === 1 ? (
          <>
            <select ref={metric1}>
              <option value="cm">Centimeter (cm)</option>
              <option value="dm">Decimetre (dm)</option>
              <option value="mm">Millimetre (mm)</option>
              <option value="km">Kilometre (km)</option>
              <option value="m">Meter (m)</option>
            </select>
            <input type="number" ref={firstInput} min="1" required />
            <select ref={metric2}>
              <option value="cm">Centimeter (cm)</option>
              <option value="dm">Decimetre (dm)</option>
              <option value="mm">Millimetre (mm)</option>
              <option value="km">Kilometre (km)</option>
              <option value="m">Meter (m)</option>
            </select>
          </>
        ) : props.value === 2 ? (
          <>
            <select ref={metric1}>
              <option value="ft">Feet (ft)</option>
              <option value="in">Inches (in)</option>
              <option value="yd">Yard (yd)</option>
              <option value="ch">Chain (ch)</option>
              <option value="fur">Furlong (fur)</option>
              <option value="mi">Mile (mi)</option>
            </select>
            <input type="number" ref={firstInput} min="1" required />
            <select ref={metric2}>
              <option value="ft">Feet (ft)</option>
              <option value="in">Inches (in)</option>
              <option value="yd">Yard (yd)</option>
              <option value="ch">Chain (ch)</option>
              <option value="fur">Furlong (fur)</option>
              <option value="mi">Mile (mi)</option>
            </select>
          </>
        ) : props.value === 3 ? (
          <>
            <select ref={metric1}>
              <option value="mm">Millimetre (mm)</option>
              <option value="cm">Centimeter (cm)</option>
              <option value="dm">Decimetre (dm)</option>
              <option value="km">Kilometre (km)</option>
              <option value="m">Meter (m)</option>
              <option value="in">Inches (in)</option>
              <option value="yd">Yard (yd)</option>
              <option value="mi">Mile (mi)</option>
            </select>
            <input type="number" ref={firstInput} min="1" required />
            <select ref={metric2}>
              <option value="m">Meter (m)</option>
              <option value="in">Inches (in)</option>
              <option value="yd">Yard (yd)</option>
              <option value="mi">Mile (mi)</option>
              <option value="cm">Centimeter (cm)</option>
              <option value="dm">Decimetre (dm)</option>
              <option value="mm">Millimetre (mm)</option>
              <option value="km">Kilometre (km)</option>
            </select>
          </>
        ) : (
          <>
            <select ref={metric1}>
              <option value="m">Meter (m)</option>
              <option value="in">Inches (in)</option>
              <option value="yd">Yard (yd)</option>
              <option value="mi">Mile (mi)</option>
              <option value="cm">Centimeter (cm)</option>
              <option value="dm">Decimetre (dm)</option>
              <option value="mm">Millimetre (mm)</option>
              <option value="km">Kilometre (km)</option>
            </select>
            <input type="number" ref={firstInput} min="1" required />
            <select ref={metric2}>
              <option value="mm">Millimetre (mm)</option>
              <option value="cm">Centimeter (cm)</option>
              <option value="dm">Decimetre (dm)</option>
              <option value="km">Kilometre (km)</option>
              <option value="m">Meter (m)</option>
              <option value="in">Inches (in)</option>
              <option value="yd">Yard (yd)</option>
              <option value="mi">Mile (mi)</option>
            </select>
          </>
        )}
        </Inputs>
        <div className="btn-calculate">
          <button>Calculate</button>
        </div>
      </form>

      {finalAnswer && <Answer answer={finalAnswer}  />}
    </div>
  );
}

export default Form;
