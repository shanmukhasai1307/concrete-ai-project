import React, {
  useState,
  useEffect
} from "react";

import {
  Cpu,
  Waves,
  Leaf
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import BottomDock from "../components/BottomDock";

export default function Dashboard() {

  const navigate = useNavigate();

  // =====================================
  // STATES
  // =====================================
  useEffect(() => {

  const userName =
    localStorage.getItem(
      "userName"
    );

  if (!userName) {

    navigate("/login");

  }

}, [navigate]);

  const [projectType, setProjectType] =
    useState("House");

  const [landArea, setLandArea] =
    useState("");

  const [floors, setFloors] =
    useState("");

  const [environment, setEnvironment] =
    useState("Normal Climate");

  const [targetStrength,
    setTargetStrength] =
    useState("");

  // =====================================
  // ANALYZE REQUIREMENTS
  // =====================================

  const analyzeRequirements = () => {

    let strength = 20;

    // HOUSE

    if (projectType === "House") {

      strength =
        20 +
        Number(floors) * 2 +
        Number(landArea) / 2000;
    }

    // APARTMENT

    else if (
      projectType === "Apartment"
    ) {

      strength =
        30 +
        Number(floors) * 2 +
        Number(landArea) / 3000;
    }

    // COMMERCIAL

    else if (
      projectType ===
      "Commercial Building"
    ) {

      strength =
        38 +
        Number(floors) * 3 +
        Number(landArea) / 3500;
    }

    // INDUSTRIAL

    else if (
      projectType ===
      "Industrial Building"
    ) {

      strength =
        45 +
        Number(floors) * 3 +
        Number(landArea) / 4000;
    }

    // ROAD

    else if (
      projectType ===
      "Road Construction"
    ) {

      strength =
        50 +
        Number(landArea) / 2500 +
        Number(floors) * 2;
    }

    // PARKING

    else if (
      projectType ===
      "Parking Structure"
    ) {

      strength =
        40 +
        Number(floors) * 2 +
        Number(landArea) / 3000;
    }

    // =====================================
    // ENVIRONMENT FACTORS
    // =====================================

    if (
      environment ===
      "Coastal Area"
    ) {
      strength += 8;
    }

    if (
      environment ===
      "Heavy Rainfall Area"
    ) {
      strength += 5;
    }

    if (
      environment ===
      "High Humidity Zone"
    ) {
      strength += 6;
    }

    if (
      environment ===
      "Extreme Heat Zone"
    ) {
      strength += 7;
    }

    if (
      environment ===
      "Cold Weather Region"
    ) {
      strength += 6;
    }

    if (
      environment ===
      "Industrial Pollution Area"
    ) {
      strength += 9;
    }

    if (
      environment ===
      "Earthquake Prone Zone"
    ) {
      strength += 10;
    }

    if (
      environment ===
      "Flood Prone Area"
    ) {
      strength += 8;
    }

    if (
      environment ===
      "High Salinity Region"
    ) {
      strength += 9;
    }

    setTargetStrength(
      Math.round(strength)
    );
  };

  // =====================================
  // GENERATE PLAN
  // =====================================

  const generateConcretePlan =
  async () => {

  try {

    const response =
      await fetch(
        "http://127.0.0.1:8000/recommend",
        {

          method: "POST",

          headers: {
            "Content-Type":
            "application/json"
          },

          body: JSON.stringify({

            project_type:
            projectType,

            land_area:
            Number(landArea),

            floors:
            Number(floors),

            environment:
            environment,

            target_strength:
            Number(targetStrength)

          })

        }
      );

    const data =
      await response.json();

    console.log(
      "Backend Response:",
      data
    );

    // SAVE BACKEND RESULT

    localStorage.setItem(
      "concreteResult",
      JSON.stringify(data)
    );

    // SAVE PROJECT SUMMARY

    localStorage.setItem(
      "projectSummary",
      JSON.stringify({

        projectType,

        landArea,

        floors,

        environment,

        targetStrength

      })
    );

    // GO TO ANALYTICS

    navigate("/analytics");

  }

  catch (error) {

    console.log(error);

    alert(
      "Backend connection failed"
    );

  }

};
  return (

    <div

      style={{

        minHeight:"100vh",

        overflowX:"hidden",

        background:
        `
        linear-gradient(
          135deg,
          #f8fafc,
          #ffffff,
          #f5f3ff
        )
        `
      }}
    >

      {/* HERO */}

      <div
        style={{
          paddingTop:"60px",
          textAlign:"center"
        }}
      >

        <h1

          style={{

            fontSize:"92px",

            lineHeight:1,

            fontWeight:700,

            color:"#0f172a"
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

            marginTop:"20px",

            color:"#64748b",

            fontSize:"22px"
          }}
        >

          AI-powered sustainable
          concrete optimization platform.

        </p>

      </div>

      {/* STATS */}

      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",

          gap:"24px",

          maxWidth:"1200px",

          margin:"50px auto",

          padding:"0 30px"
        }}
      >

        {[
          {
            icon:<Cpu />,
            title:"AI Engine",
            value:"Active"
          },

          {
            icon:<Leaf />,
            title:"Sustainability",
            value:"Optimized"
          },

          {
            icon:<Waves />,
            title:"Analysis",
            value:"Real-Time"
          }
        ].map((item,index)=>(

          <div

            key={index}

            className="glass-card"

            style={{
              padding:"34px",
              borderRadius:"32px"
            }}
          >

            {item.icon}

            <div
              style={{
                marginTop:"20px",
                color:"#64748b"
              }}
            >

              {item.title}

            </div>

            <div
              style={{
                marginTop:"10px",
                fontSize:"40px",
                fontWeight:700
              }}
            >

              {item.value}

            </div>

          </div>

        ))}

      </div>

      {/* FORM */}

      <div

        className="glass-card"

        style={{

          maxWidth:"1000px",

          margin:"0 auto",

          padding:"50px",

          borderRadius:"40px",

          marginBottom:"140px"
        }}
      >

        <h2
          style={{
            fontSize:"42px",
            marginBottom:"30px"
          }}
        >

          Project Intelligence

        </h2>

        <div
          style={{
            display:"grid",
            gap:"20px"
          }}
        >

          {/* PROJECT TYPE */}

          <select
            className="input-box"
            value={projectType}
            onChange={(e)=>
              setProjectType(
                e.target.value
              )
            }
          >

            <option>House</option>

            <option>Apartment</option>

            <option>
              Commercial Building
            </option>

            <option>
              Industrial Building
            </option>

            <option>
              Road Construction
            </option>

            <option>
              Parking Structure
            </option>

          </select>

          {/* HOUSE */}

          {projectType === "House" && (

            <>

              <input
                className="input-box"
                type="number"
                placeholder="Land Area (sq.ft)"
                value={landArea}
                onChange={(e)=>
                  setLandArea(
                    e.target.value
                  )
                }
              />

              <input
                className="input-box"
                type="number"
                placeholder="Number of Floors"
                value={floors}
                onChange={(e)=>
                  setFloors(
                    e.target.value
                  )
                }
              />

    

            </>

          )}

          {/* APARTMENT */}

          {projectType ===
          "Apartment" && (

            <>

              <input
                className="input-box"
                type="number"
                placeholder="Apartment Area (sq.ft)"
                value={landArea}
                onChange={(e)=>
                  setLandArea(
                    e.target.value
                  )
                }
              />

              <input
                className="input-box"
                type="number"
                placeholder="Number of Floors"
                value={floors}
                onChange={(e)=>
                  setFloors(
                    e.target.value
                  )
                }
              />

            
              <select className="input-box">

                <option>
                  Lift Requirement
                </option>

                <option>
                  Standard Lift
                </option>

                <option>
                  High-Speed Lift
                </option>

              </select>

            </>

          )}

          {/* COMMERCIAL */}

          {projectType ===
          "Commercial Building" && (

            <>

              <input
                className="input-box"
                type="number"
                placeholder="Commercial Area (sq.ft)"
                value={landArea}
                onChange={(e)=>
                  setLandArea(
                    e.target.value
                  )
                }
              />

              <input
                className="input-box"
                type="number"
                placeholder="Building Floors"
                value={floors}
                onChange={(e)=>
                  setFloors(
                    e.target.value
                  )
                }
              />

              <input
                className="input-box"
                type="number"
                placeholder="Expected Occupancy"
              />

              <select className="input-box">

                <option>
                  Glass Usage
                </option>

                <option>
                  Low Glass
                </option>

                <option>
                  Medium Glass
                </option>

                <option>
                  High Glass
                </option>

              </select>

            </>

          )}

          {/* INDUSTRIAL */}

          {projectType ===
          "Industrial Building" && (

            <>

              <input
                className="input-box"
                type="number"
                placeholder="Factory Area (sq.ft)"
                value={landArea}
                onChange={(e)=>
                  setLandArea(
                    e.target.value
                  )
                }
              />

              <input
                className="input-box"
                type="number"
                placeholder="Machine Load Capacity"
                value={floors}
                onChange={(e)=>
                  setFloors(
                    e.target.value
                  )
                }
              />

              <select className="input-box">

                <option>
                  Chemical Exposure
                </option>

                <option>
                  Low
                </option>

                <option>
                  Medium
                </option>

                <option>
                  High
                </option>

              </select>

              <select className="input-box">

                <option>
                  Heat Exposure
                </option>

                <option>
                  Normal
                </option>

                <option>
                  High Heat
                </option>

                <option>
                  Extreme Heat
                </option>

              </select>

            </>

          )}

          {/* ROAD */}

          {projectType ===
          "Road Construction" && (

            <>

              <input
                className="input-box"
                type="number"
                placeholder="Road Length (meters)"
                value={landArea}
                onChange={(e)=>
                  setLandArea(
                    e.target.value
                  )
                }
              />

              <input
                className="input-box"
                type="number"
                placeholder="Road Width (meters)"
                value={floors}
                onChange={(e)=>
                  setFloors(
                    e.target.value
                  )
                }
              />

              <select className="input-box">

                <option>
                  Traffic Category
                </option>

                <option>
                  Low Traffic
                </option>

                <option>
                  Medium Traffic
                </option>

                <option>
                  Heavy Traffic
                </option>

              </select>

              <input
                className="input-box"
                type="number"
                placeholder="Heavy Vehicle Percentage"
              />

            </>

          )}

          {/* PARKING */}

          {projectType ===
          "Parking Structure" && (

            <>

              <input
                className="input-box"
                type="number"
                placeholder="Vehicle Capacity"
                value={landArea}
                onChange={(e)=>
                  setLandArea(
                    e.target.value
                  )
                }
              />

              <input
                className="input-box"
                type="number"
                placeholder="Parking Levels"
                value={floors}
                onChange={(e)=>
                  setFloors(
                    e.target.value
                  )
                }
              />

              <select className="input-box">

                <option>
                  Vehicle Type
                </option>

                <option>
                  Cars
                </option>

                <option>
                  Trucks
                </option>

                <option>
                  Mixed Vehicles
                </option>

              </select>

              <select className="input-box">

                <option>
                  Basement Included
                </option>

                <option>
                  Yes
                </option>

                <option>
                  No
                </option>

              </select>

            </>

          )}

          {/* ENVIRONMENT */}

          <select
            className="input-box"
            value={environment}
            onChange={(e)=>
              setEnvironment(
                e.target.value
              )
            }
          >

            <option>
              Normal Climate
            </option>

            <option>
              Coastal Area
            </option>

            <option>
              Heavy Rainfall Area
            </option>

            <option>
              Extreme Heat Zone
            </option>

          </select>

          {/* ANALYZE BUTTON */}

          <button

            onClick={
              analyzeRequirements
            }

            style={{

              border:"none",

              padding:"22px",

              borderRadius:"22px",

              background:
              "linear-gradient(135deg,#38bdf8,#8b5cf6)",

              color:"white",

              fontSize:"18px",

              fontWeight:600,

              cursor:"pointer"
            }}
          >

            Analyze Intelligence

          </button>

          {/* RESULT */}

          {targetStrength && (

            <div
              style={{
                marginTop:"20px"
              }}
            >

              <h2
                style={{
                  fontSize:"32px"
                }}
              >

                Recommended Strength

              </h2>

              <div

                style={{

                  marginTop:"10px",

                  fontSize:"80px",

                  fontWeight:700,

                  background:
                  "linear-gradient(135deg,#38bdf8,#8b5cf6)",

                  WebkitBackgroundClip:
                  "text",

                  WebkitTextFillColor:
                  "transparent"
                }}
              >

                {targetStrength} MPa

              </div>

              <button

                onClick={
                  generateConcretePlan
                }

                style={{

                  marginTop:"20px",

                  border:"none",

                  padding:
                  "18px 30px",

                  borderRadius:"20px",

                  background:
                  "linear-gradient(135deg,#38bdf8,#8b5cf6)",

                  color:"white",

                  fontSize:"18px",

                  fontWeight:600,

                  cursor:"pointer"
                }}
              >

                Generate Concrete Plan

              </button>

            </div>

          )}

        </div>

      </div>

      <BottomDock />

    </div>
  );
}