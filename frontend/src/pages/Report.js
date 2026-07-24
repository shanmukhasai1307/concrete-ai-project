import React, {
  useEffect
} from "react";

import {
  useNavigate
} from "react-router-dom";

import BottomDock
from "../components/BottomDock";

export default function Report() {

  const navigate =
    useNavigate();

  useEffect(() => {

    const userName =
      localStorage.getItem(
        "userName"
      );

    if (!userName) {

      navigate("/login");

    }

  }, [navigate]);

  const result =
    JSON.parse(
      localStorage.getItem(
        "concreteResult"
      )
    );

  const summary =
    JSON.parse(
      localStorage.getItem(
        "projectSummary"
      )
    );

  if (
    !result ||
    !summary
  ) {

    return (

      <div
        style={{
          padding:"50px",
          fontSize:"24px"
        }}
      >

        No Report Data Available

      </div>

    );
  }

  return (

    <div

      style={{

        minHeight:"100vh",

        background:
        "linear-gradient(135deg,#f8fafc,#ffffff)",

        padding:"50px"
      }}
    >

      {/* HEADER */}

      <div
        style={{
          textAlign:"center",
          marginBottom:"40px"
        }}
      >

        <h1
          style={{
            fontSize:"72px",
            margin:0
          }}
        >

          Project Report

        </h1>

        <p
          style={{
            color:"#64748b",
            fontSize:"20px"
          }}
        >

          Complete AI Concrete
          Intelligence Report

        </p>

      </div>

      {/* PROJECT SUMMARY */}

      <div
        className="glass-card"
        style={{
          padding:"35px",
          borderRadius:"30px",
          marginBottom:"30px"
        }}
      >

        <h2>
          Project Summary
        </h2>

        <p>
          Project Type :
          <b>
            {" "}
            {summary.projectType}
          </b>
        </p>

        <p>
          Area :
          <b>
            {" "}
            {summary.landArea}
          </b>
        </p>

        <p>
          Floors :
          <b>
            {" "}
            {summary.floors}
          </b>
        </p>

        <p>
          Environment :
          <b>
            {" "}
            {summary.environment}
          </b>
        </p>

        <p>
          Target Strength :
          <b>
            {" "}
            {summary.targetStrength}
            MPa
          </b>
        </p>

      </div>


      {/* MATERIALS */}

     <table
  style={{
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    textAlign: "center"
  }}
>
  <thead>
    <tr
      style={{
        background: "#f8fafc",
        borderBottom: "2px solid #e2e8f0"
      }}
    >
      <th style={{ padding: "15px" }}>Material</th>
      <th style={{ padding: "15px" }}>Quantity</th>
      <th style={{ padding: "15px" }}>Unit</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ padding: "12px" }}>Cement</td>
      <td style={{ padding: "12px" }}>{result.mix.cement}</td>
      <td style={{ padding: "12px" }}>kg</td>
    </tr>

    <tr>
      <td style={{ padding: "12px" }}>Fly Ash</td>
      <td style={{ padding: "12px" }}>{result.mix.flyash}</td>
      <td style={{ padding: "12px" }}>kg</td>
    </tr>

    <tr>
      <td style={{ padding: "12px" }}>Slag</td>
      <td style={{ padding: "12px" }}>{result.mix.slag}</td>
      <td style={{ padding: "12px" }}>kg</td>
    </tr>

    <tr>
      <td style={{ padding: "12px" }}>Water</td>
      <td style={{ padding: "12px" }}>{result.mix.water}</td>
      <td style={{ padding: "12px" }}>L</td>
    </tr>

    <tr>
      <td style={{ padding: "12px" }}>Superplasticizer</td>
      <td style={{ padding: "12px" }}>{result.mix.superplasticizer}</td>
      <td style={{ padding: "12px" }}>L</td>
    </tr>

    <tr>
      <td style={{ padding: "12px" }}>Coarse Aggregate</td>
      <td style={{ padding: "12px" }}>{result.mix.coarseagg}</td>
      <td style={{ padding: "12px" }}>kg</td>
    </tr>

    <tr>
      <td style={{ padding: "12px" }}>Fine Aggregate</td>
      <td style={{ padding: "12px" }}>{result.mix.fineagg}</td>
      <td style={{ padding: "12px" }}>kg</td>
    </tr>
  </tbody>
</table>

      {/* COST */}

      <div
        className="glass-card"
        style={{
          padding:"35px",
          borderRadius:"30px",
          marginBottom:"30px"
        }}
      >

        <h2>
          Cost Summary
        </h2>

        <p>

          Total Estimated Cost :

          <b>

            ₹
            {result.total_estimated_cost}

          </b>

        </p>

      </div>

      {/* PDF BUTTON */}

      <button

        onClick={() =>
          window.print()
        }

        style={{

          border:"none",

          padding:
          "18px 30px",

          borderRadius:"20px",

          background:
          "linear-gradient(135deg,#38bdf8,#8b5cf6)",

          color:"white",

          fontSize:"18px",

          fontWeight:600,

          cursor:"pointer",

          marginBottom:"120px"
        }}
      >

        Download PDF Report

      </button>

      <BottomDock />

    </div>

  );
}