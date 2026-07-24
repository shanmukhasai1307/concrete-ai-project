from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from database import Base
from database import engine

import models
import joblib
import numpy as np

from auth import router as auth_router

# ====================================
# FASTAPI APP
# ====================================

app = FastAPI()
model = joblib.load("concrete_model.pkl")

# ====================================
# DATABASE
# ====================================

Base.metadata.create_all(bind=engine)

# ====================================
# CORS
# ====================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ====================================
# AUTH ROUTES
# ====================================

app.include_router(auth_router)

# ====================================
# INPUT MODEL
# ====================================

class ProjectInput(BaseModel):

    project_type: str

    land_area: float

    floors: int

    environment: str

    target_strength: float

# ====================================
# AI RECOMMENDATION API
# ====================================

@app.post("/recommend")

def recommend(data: ProjectInput):

    # ====================================
    # VALIDATION
    # ====================================

    if data.land_area <= 0 or data.floors <= 0:

        return {

            "error":
            "Land area and floors must be greater than 0"
        }

    # ====================================
    # REALISTIC CONCRETE VOLUME
    # ====================================

    # 1 sqft ≈ 0.025 cubic meter concrete

    volume = (

        data.land_area *

        data.floors *

        0.025
    )

    # ====================================
    # MATERIAL CALCULATIONS
    # ====================================

    cement_kg = round(
        volume * 320
    )

    water_liters = round(
        volume * 160
    )

    flyash_kg = round(
        volume * 50
    )

    slag_kg = round(
        volume * 40
    )

    coarseagg_kg = round(
        volume * 1100
    )

    fineagg_kg = round(
        volume * 750
    )

    superplasticizer_l = round(
        volume * 0.8
    )

    # ====================================
    # CEMENT BAGS
    # ====================================

    cement_bags = round(
        cement_kg / 50
    )

    # ====================================
    # WATER CEMENT RATIO
    # ====================================

    if cement_kg == 0:

        water_cement_ratio = 0

    else:

        water_cement_ratio = round(

            water_liters /

            cement_kg,

            2
        )

    # ====================================
    # SAFETY STATUS
    # ====================================

    if data.target_strength >= 40:

        safety_status = "🟢 HIGHLY SAFE"

    elif data.target_strength >= 25:

        safety_status = "🟡 SAFE"

    else:

        safety_status = "🔴 LOW SAFETY"

    # ====================================
    # STRENGTH PREDICTION
    # ====================================

    # ====================================
    # STRENGTH PREDICTION
    # ====================================

    strength_factor = data.target_strength / 25

    ml_cement = round(320 * strength_factor)
    ml_water = round(160 * strength_factor)
    ml_flyash = round(50 * strength_factor)
    ml_slag = round(40 * strength_factor)

    ml_superplasticizer = round(
        4 * strength_factor,
        1
    )

    ml_coarseagg = round(
        1100 * strength_factor
    )

    ml_fineagg = round(
        750 * strength_factor
    )

    features = np.array([[
        ml_cement,
        ml_slag,
        ml_flyash,
        ml_water,
        ml_superplasticizer,
        ml_coarseagg,
        ml_fineagg,
        28
    ]])

    predicted_strength = round(
        float(
            model.predict(features)[0]
        ),
        2
    )

    # ====================================
    # INDIA MARKET PRICES
    # ====================================

    cement_price_per_bag = 430

    sand_price_per_kg = 1.8

    aggregate_price_per_kg = 1.5

    flyash_price_per_kg = 2

    slag_price_per_kg = 3

    water_price_per_liter = 0.05
    superplasticizer_price_per_l = 120

        # ====================================
        # COST CALCULATIONS
        # ====================================

    cement_cost = (

            cement_bags *

            cement_price_per_bag
        )

    sand_cost = (

            fineagg_kg *

            sand_price_per_kg
        )

    aggregate_cost = (

            coarseagg_kg *

            aggregate_price_per_kg
        )

    flyash_cost = (

            flyash_kg *

            flyash_price_per_kg
        )

    slag_cost = (

            slag_kg *

            slag_price_per_kg
        )

    water_cost = (

            water_liters *

            water_price_per_liter
        )

    superplasticizer_cost = (

            superplasticizer_l *

            superplasticizer_price_per_l
        )

        # ====================================
        # TOTAL COST
        # ====================================

    total_cost = round(

            cement_cost +

            sand_cost +

            aggregate_cost +

            flyash_cost +

            slag_cost +

            water_cost +

            superplasticizer_cost
        )

        # ====================================
        # FINAL RESPONSE
        # ====================================
    return {

        "predicted_strength":
        predicted_strength,

        "water_cement_ratio":
        water_cement_ratio,

        "safety_status":
        safety_status,

        "mix": {

            "cement":
            cement_kg,

            "slag":
            slag_kg,

            "flyash":
            flyash_kg,

            "water":
            water_liters,

            "superplasticizer":
            superplasticizer_l,

            "coarseagg":
            coarseagg_kg,

            "fineagg":
            fineagg_kg,

            "age":
            28
        },

        "estimated_materials": {

            "cement_bags":
            cement_bags,

            "water_liters":
            water_liters,

            "sand_kg":
            fineagg_kg,

            "aggregate_kg":
            coarseagg_kg,

            "flyash_kg":
            flyash_kg,

            "slag_kg":
            slag_kg
        },

        "material_prices": {

            "cement_cost":
            round(cement_cost),

            "sand_cost":
            round(sand_cost),

            "aggregate_cost":
            round(aggregate_cost),

            "flyash_cost":
            round(flyash_cost),

            "slag_cost":
            round(slag_cost),

            "water_cost":
            round(water_cost),

            "superplasticizer_cost":
            round(superplasticizer_cost)
        },

        "total_estimated_cost":
        total_cost
    }