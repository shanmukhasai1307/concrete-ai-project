import React, { useState } from "react";

import {
  Cpu,
  BarChart3,
  Leaf,
  FileText,
  ShieldCheck,
  Target,
  BrainCircuit
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import BottomDock from "../components/BottomDock";

export default function About() {
    const [showTechnical, setShowTechnical] =
  useState(false);
  const modelData = [

  {
    algorithm: "Linear",
    r2: 0.628
  },

  {
    algorithm: "Decision Tree",
    r2: 0.835
  },

  {
    algorithm: "Random Forest",
    r2: 0.884
  },

  {
    algorithm: "Gradient Boost",
    r2: 0.883
  }

];

  const features = [

    {
      icon: <Cpu size={30} />,
      title: "AI Mix Recommendation",
      description:
        "Generate optimized concrete mix designs based on project requirements."
    },

    {
      icon: <BarChart3 size={30} />,
      title: "Material Analytics",
      description:
        "Visualize material quantities and distributions."
    },

    {
      icon: <Leaf size={30} />,
      title: "Sustainability Analysis",
      description:
        "Support environmentally friendly construction."
    },

    {
      icon: <FileText size={30} />,
      title: "PDF Reports",
      description:
        "Generate professional engineering reports."
    },

    {
      icon: <ShieldCheck size={30} />,
      title: "Secure Authentication",
      description:
        "Protected access using login and signup."
    },

    {
      icon: <BrainCircuit size={30} />,
      title: "Strength Prediction",
      description:
        "Predict concrete strength before construction."
    }

  ];

  return (

    <div

      style={{

        minHeight: "100vh",

        background:
          "linear-gradient(135deg,#f8fafc,#ffffff,#f5f3ff)",

        padding: "50px"
      }}
    >

      {/* HERO */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "60px"
        }}
      >

        <h1

          style={{

            fontSize: "80px",

            fontWeight: 700,

            lineHeight: 1
          }}
        >

          Concrete

          <br />

          <span

            style={{

              background:
                "linear-gradient(135deg,#38bdf8,#8b5cf6)",

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent"
            }}
          >

            Intelligence

          </span>

        </h1>

        <p

          style={{

            fontSize: "22px",

            color: "#64748b",

            marginTop: "20px"
          }}
        >

          AI-Powered Sustainable Concrete
          Optimization Platform

        </p>

      </div>

      {/* WHY THIS PROJECT MATTERS */}

      <div

        className="glass-card"

        style={{

          padding: "35px",

          borderRadius: "30px",

          marginBottom: "30px"
        }}
      >

        <h2>

          Why This Project Matters

        </h2>

        <p>

          Traditional concrete mix design
          requires manual calculations,
          engineering expertise and
          repeated laboratory testing.

          <br /><br />

          Concrete Intelligence leverages
          Artificial Intelligence and
          Machine Learning to recommend
          optimized concrete mix designs
          based on project requirements,
          environmental conditions and
          target strength.

          <br /><br />

          The platform helps engineers
          make faster decisions, improve
          material efficiency, reduce
          construction costs and support
          sustainable construction
          practices.

        </p>

      </div>

      {/* PROBLEM & OBJECTIVE */}

      <div

        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",

          gap: "30px",

          marginBottom: "30px"
        }}
      >

        <div

          className="glass-card"

          style={{
            padding: "30px",
            borderRadius: "30px"
          }}
        >

          <Target size={35} />

          <h2>

            Problem Statement

          </h2>

          <p>

            Conventional concrete mix
            design requires significant
            manual effort and repeated
            testing, increasing project
            cost and time.

          </p>

        </div>

        <div

          className="glass-card"

          style={{
            padding: "30px",
            borderRadius: "30px"
          }}
        >

          <BrainCircuit size={35} />

          <h2>

            Project Objective

          </h2>

          <p>

            To develop an AI-based system
            capable of recommending
            optimized concrete mix designs
            with strength prediction,
            sustainability analysis and
            cost estimation.

          </p>

        </div>

      </div>

      {/* FEATURES */}

      <h2

        style={{

          textAlign: "center",

          marginBottom: "30px"
        }}
      >

        Core Features

      </h2>

      <div

        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",

          gap: "25px",

          marginBottom: "40px"
        }}
      >

        {features.map(
          (feature, index) => (

            <div

              key={index}

              className="glass-card"

              style={{

                padding: "30px",

                borderRadius: "30px"
              }}
            >

              {feature.icon}

              <h3>

                {feature.title}

              </h3>

              <p>

                {feature.description}

              </p>

            </div>

          )
        )}

      </div>

      {/* IMPACT */}

      <div

  className="glass-card"

  style={{

    padding: "35px",

    borderRadius: "30px",

    marginBottom: "40px"
  }}
>

  <ShieldCheck size={35} />

  <h2>

    Project Impact

  </h2>

  <ul>

    <li>Faster Decision Making</li>

    <li>Optimized Material Usage</li>

    <li>Reduced Manual Calculations</li>

    <li>Sustainable Construction Support</li>

    <li>Cost Efficient Planning</li>

    <li>Data-Driven Engineering</li>

  </ul>

</div>

{/* TECHNICAL VALIDATION */}

<div

  className="glass-card"

  style={{

    padding: "35px",

    borderRadius: "30px",

    marginBottom: "120px"
  }}
>

  <button

    onClick={() =>
      setShowTechnical(
        !showTechnical
      )
    }

    style={{

      width: "100%",

      border: "none",

      padding: "18px",

      borderRadius: "18px",

      cursor: "pointer",

      fontSize: "20px",

      fontWeight: 600,

      background:
      "linear-gradient(135deg,#38bdf8,#8b5cf6)",

      color: "white"
    }}
  >

    {showTechnical
      ? "Hide Technical Validation ▲"
      : "Show Technical Validation ▼"}

  </button>

 {showTechnical && (

<div style={{ marginTop: "30px" }}>

  {/* KPI CARDS */}

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
      gap: "20px",
      marginBottom: "30px"
    }}
  >

    <div
      className="glass-card"
      style={{
        padding: "25px",
        borderRadius: "20px",
        textAlign: "center"
      }}
    >
      <h4>Best R² Score</h4>

      <h1
        style={{
          color: "#8b5cf6",
          marginTop: "10px"
        }}
      >
        0.884
      </h1>

      <p>Random Forest</p>

    </div>

    <div
      className="glass-card"
      style={{
        padding: "25px",
        borderRadius: "20px",
        textAlign: "center"
      }}
    >
      <h4>Lowest MAE</h4>

      <h1
        style={{
          color: "#38bdf8",
          marginTop: "10px"
        }}
      >
        3.74
      </h1>

      <p>Prediction Error</p>

    </div>

    <div
      className="glass-card"
      style={{
        padding: "25px",
        borderRadius: "20px",
        textAlign: "center"
      }}
    >
      <h4>Dataset Size</h4>

      <h1
        style={{
          color: "#22c55e",
          marginTop: "10px"
        }}
      >
        1030
      </h1>

      <p>Concrete Samples</p>

    </div>

  </div>

  {/* DATASET */}

  <div
    className="glass-card"
    style={{
      padding: "30px",
      borderRadius: "25px",
      marginBottom: "25px"
    }}
  >

    <h2>Dataset Information</h2>

    <p>

      The project uses the
      Concrete Compressive Strength Dataset
      containing 1030 concrete samples.

      <br /><br />

      Features include:

      <br />

      • Cement

      <br />

      • Water

      <br />

      • Fly Ash

      <br />

      • Slag

      <br />

      • Superplasticizer

      <br />

      • Coarse Aggregate

      <br />

      • Fine Aggregate

      <br />

      • Age

    </p>

  </div>

  {/* AI PERFORMANCE */}

  <div
    className="glass-card"
    style={{
      padding: "30px",
      borderRadius: "25px",
      marginBottom: "25px"
    }}
  >

    <h2>AI Performance Metrics</h2>

    <table
      style={{
        width: "100%",
        marginTop: "20px",
        borderCollapse: "collapse",
        textAlign: "center"
      }}
    >

      <thead>

        <tr
          style={{
            borderBottom:
            "2px solid #e2e8f0"
          }}
        >

          <th style={{ padding:"15px" }}>
            Metric
          </th>

          <th style={{ padding:"15px" }}>
            Value
          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td style={{ padding:"15px" }}>
            R² Score
          </td>

          <td>
            0.884
          </td>

        </tr>

        <tr>

          <td style={{ padding:"15px" }}>
            MAE
          </td>

          <td>
            3.74
          </td>

        </tr>

        <tr>

          <td style={{ padding:"15px" }}>
            RMSE
          </td>

          <td>
            5.46
          </td>

        </tr>

      </tbody>

    </table>

  </div>

  {/* ALGORITHM COMPARISON */}

  {/* ALGORITHM COMPARISON */}

<div
  className="glass-card"
  style={{
    padding: "30px",
    borderRadius: "25px",
    marginBottom: "25px",
    overflowX: "auto"
  }}
>

  <h2
    style={{
      marginBottom: "20px"
    }}
  >
    Algorithm Comparison
  </h2>

  <table
    style={{
      width: "100%",
      minWidth: "700px",
      borderCollapse: "collapse",
      textAlign: "center"
    }}
  >

    <thead>

      <tr
        style={{
          borderBottom:
          "2px solid #e2e8f0"
        }}
      >

        <th style={{ padding: "15px" }}>
          Algorithm
        </th>

        <th style={{ padding: "15px" }}>
          R² Score
        </th>

        <th style={{ padding: "15px" }}>
          Status
        </th>

      </tr>

    </thead>

    <tbody>

      <tr>

        <td style={{ padding: "15px" }}>
          Linear Regression
        </td>

        <td>0.628</td>

        <td>Baseline</td>

      </tr>

      <tr>

        <td style={{ padding: "15px" }}>
          Decision Tree
        </td>

        <td>0.835</td>

        <td>Good</td>

      </tr>

      <tr
        style={{
          background:
          "rgba(139,92,246,0.08)"
        }}
      >

        <td
          style={{
            padding: "15px",
            fontWeight: 700
          }}
        >
          Random Forest
        </td>

        <td
          style={{
            color: "#8b5cf6",
            fontWeight: 700
          }}
        >
          0.884
        </td>

        <td
          style={{
            color: "#16a34a",
            fontWeight: 700
          }}
        >
          ✓ Selected
        </td>

      </tr>

      <tr>

        <td style={{ padding: "15px" }}>
          Gradient Boosting
        </td>

        <td>0.883</td>

        <td>Excellent</td>

      </tr>

    </tbody>

  </table>

</div>

  {/* BAR CHART */}

  <div
    className="glass-card"
    style={{
      padding: "30px",
      borderRadius: "25px",
      marginBottom: "25px"
    }}
  >

    <h2>R² Score Comparison</h2>

   <div
  style={{
    width: "100%",
    height: "450px",
    marginTop: "20px"
  }}
>

      <ResponsiveContainer
        width="100%"
        height={450}
      >

        <BarChart data={modelData}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="algorithm"
          />

          <YAxis
            domain={[0,1]}
          />

          <Tooltip />

          <Bar
            dataKey="r2"
            fill="#8b5cf6"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  </div>

  {/* WHY RANDOM FOREST */}

  <div
    className="glass-card"
    style={{
      padding: "30px",
      borderRadius: "25px",
      marginBottom: "25px"
    }}
  >

    <h2>Why Random Forest?</h2>

    <p>

      Multiple machine learning
      algorithms were trained and
      evaluated using the Concrete
      Strength Dataset.

      <br /><br />

      Random Forest achieved the
      highest R² Score (0.884)
      while maintaining the
      lowest prediction error.

      <br /><br />

      Therefore it was selected
      as the final model for
      deployment in the platform.

    </p>

  </div>

  {/* WORKFLOW */}

  <div
    className="glass-card"
    style={{
      padding: "30px",
      borderRadius: "25px"
    }}
  >

    <h2>Project Workflow</h2>

    <div
      style={{
        textAlign: "center",
        fontSize: "18px",
        lineHeight: "2.2"
      }}
    >

      User Inputs

      <br />↓<br />

      AI Analysis

      <br />↓<br />

      Concrete Mix Recommendation

      <br />↓<br />

      Sustainability Analysis

      <br />↓<br />

      Cost Analysis

      <br />↓<br />

      PDF Report

    </div>

  </div>
</div>

)}

</div>

<BottomDock />

    </div>

  );
}

