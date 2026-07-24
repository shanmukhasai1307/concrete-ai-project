import React, {
  useEffect
} from "react";

import { useNavigate }
from "react-router-dom";

import BottomDock from "../components/BottomDock";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";

import { motion }
from "framer-motion";

function Analytics() {
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

  if (!result) {

    return (

      <div
      style={{
        padding:50,
        fontSize:24
      }}
      >
        No Data Available
      </div>

    );
  }

  // ====================================
  // CHART DATA
  // ====================================

  const data = Object.entries(result.mix)

  .filter(
    ([key, value]) =>
      value > 0
  )

  .map(
    ([key, value]) => ({

      name: key
        .replace(
          "_",
          " "
        )
        .toUpperCase(),

      value: value

    })
  );

 const COLORS = [

  "#7dd3fc",
  "#a78bfa",
  "#86efac",
  "#f9a8d4",
  "#fbbf24",
  "#fb7185",
  "#34d399",
  "#60a5fa",
  "#c084fc",
  "#f97316"
];

  return (

    <div

      style={{

        minHeight:"100vh",

        background:
        `
        radial-gradient(
          circle at top left,
          rgba(125,211,252,0.3),
          transparent 30%
        ),

        radial-gradient(
          circle at top right,
          rgba(196,181,253,0.3),
          transparent 30%
        ),

        linear-gradient(
          135deg,
          #f8fafc,
          #ffffff
        )
        `,

        padding:"50px",

        overflow:"hidden"
      }}
    >

      {/* HERO */}

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        style={{
          textAlign:"center"
        }}
      >

        <div

          style={{

            fontSize:95,

            fontWeight:700,

            lineHeight:1
          }}
        >

          Material

          <br/>

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

            Analytics

          </span>

        </div>

        <p

          style={{

            marginTop:30,

            fontSize:22,

            color:"#64748b",

            maxWidth:850,

            marginInline:"auto",

            lineHeight:1.8
          }}
        >

          AI-powered real-time
          concrete intelligence and
          material composition
          visualization.

        </p>

      </motion.div>

      {/* MATERIAL CARDS */}

      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(260px,1fr))",

          gap:30,

          marginTop:80,

          maxWidth:1300,

          marginInline:"auto"
        }}
      >

        {Object.entries(result.mix)

        .filter(([key]) =>
          key !== "age"
        )

        .map(([key,value],index)=>(

          <motion.div

            key={index}

            whileHover={{
              y:-8
            }}

            style={{

              background:
              "rgba(255,255,255,0.55)",

              backdropFilter:
              "blur(20px)",

              border:
              "1px solid rgba(255,255,255,0.5)",

              borderRadius:36,

              padding:35,

              boxShadow:
              "0 10px 40px rgba(148,163,184,0.08)"
            }}
          >

            <div

              style={{

                color:"#64748b",

                fontSize:18,

                textTransform:"capitalize"
              }}
            >

              {key}

            </div>

            <div

              style={{

                marginTop:18,

                fontSize:48,

                fontWeight:700,

                color:"#0f172a"
              }}
            >

              {key === "water"
                ? `${value} L`
                : `${value} kg`
              }

            </div>

          </motion.div>

        ))}

      </div>

      {/* MIX SUMMARY */}

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          delay:0.2
        }}

        style={{

          marginTop:60,

          maxWidth:1300,

          marginInline:"auto",

          background:
          "rgba(255,255,255,0.55)",

          backdropFilter:
          "blur(20px)",

          border:
          "1px solid rgba(255,255,255,0.5)",

          borderRadius:40,

          padding:40,

          boxShadow:
          "0 10px 40px rgba(148,163,184,0.08)"
        }}
      >

        <div

          style={{

            fontSize:36,

            fontWeight:700,

            marginBottom:25
          }}
        >

          Recommended Mix Design

        </div>

        <div

          style={{

            fontSize:22,

            color:"#334155",

            lineHeight:2
          }}
        >

          ✅ Cement :
          <b> {result.mix.cement} kg</b>

          <br/>

          ✅ Fly Ash :
          <b> {result.mix.flyash} kg</b>

          <br/>

          ✅ Slag :
          <b> {result.mix.slag} kg</b>

          <br/>

          ✅ Water :
          <b> {result.mix.water} L</b>

        </div>

      </motion.div>

      {/* CHART */}

      <motion.div

        initial={{
          opacity:0,
          y:50
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          delay:0.3
        }}

        style={{

          marginTop:80,

          maxWidth:1300,

          marginInline:"auto",

          background:
          "rgba(255,255,255,0.55)",

          backdropFilter:
          "blur(20px)",

          border:
          "1px solid rgba(255,255,255,0.5)",

          borderRadius:50,

          padding:50,

          boxShadow:
          "0 10px 40px rgba(148,163,184,0.08)"
        }}
      >

        <div

          style={{

            fontSize:38,

            fontWeight:700,

            marginBottom:40
          }}
        >

          Material Distribution

        </div>

        <div
        style={{
          height:500
        }}
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie

                data={data}

                cx="50%"

                cy="50%"

                outerRadius={180}

                dataKey="value"

                label
              >

                {data.map(
                  (entry,index)=>(

                  <Cell
                    key={index}
                    fill={
                      COLORS[index]
                    }
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </motion.div>

      <BottomDock />

    </div>

  );
}

export default Analytics;