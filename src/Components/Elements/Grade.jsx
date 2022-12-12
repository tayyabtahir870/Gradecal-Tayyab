import React from "react";

function Grade() {
  const calc = () => {
    let comp = document.getElementById("comp").value;
    let sci = document.getElementById("sci").value;
    let math = document.getElementById("math").value;
    let engl = document.getElementById("engl").value;
    // let showdata = document.getElementById("showdata ");
    let grade = "";

    let totalgrade =
      parseFloat(comp) + parseFloat(sci) + parseFloat(math) + parseFloat(engl);

    let perc = (totalgrade / 400) * 100;

    if (perc <= 100 && perc >= 80) {
      grade = "A";
    } else if (perc <= 79 && perc >= 60) {
      grade = "B";
    } else if (perc <= 59 && perc >= 40) {
      grade = "C";
    } else {
      grade = "F";
    }
    document.getElementById(
      "showdata"
    ).innerHTML = `Out of 400 your total Marks is ${totalgrade} and your percentage is ${perc}% and your Grade is ${grade}`;
  };
  return (
    <div className="grade">
      <h1>Grade calculator</h1>
      <div>
        
        <label>
          <b className="textcolor">Computer</b>
          <input
          id="comp"
           
            type="text"
            className="form-control"
            placeholder="Enter Your Computer Marks"
          />
        </label>
      </div>

      <div>
      
        <label>
          <b className="textcolor"> Science</b>
          <input
          id="sci"
           
            type="text"
            className="form-control"
            placeholder="Enter Your Science Marks"
          />
        </label>
      </div>

      <div>
      
        <label>
          <b className="textcolor">Math</b>
          <input
            id="math"
            type="text"
            className="form-control"
            placeholder="Enter Your Math Marks"
          />
        </label>
      </div>

      <div>
        <label>
          <b className="textcolor">English</b>
          <input
            id="engl"
            type="text"
            className="form-control"
            placeholder="Enter Your English Marks"
          />
        </label>
      </div>

      <div className="mt-3">
        <button onClick={calc} type="button" class="btn btn-info">
          Show Data
        </button>
      </div>

      <div className="mt-3 fw-bold">
        <p id="showdata"></p>
      </div>
    </div>
  );
}

export default Grade;
