import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LinearRegression

from sklearn.tree import DecisionTreeRegressor

from sklearn.ensemble import (
    RandomForestRegressor,
    GradientBoostingRegressor
)

from sklearn.metrics import (
    r2_score,
    mean_absolute_error,
    mean_squared_error
)

# ====================================
# LOAD DATASET
# ====================================

df = pd.read_csv("backend/Concrete.csv")

# ====================================
# FEATURES & TARGET
# ====================================

target_column = df.columns[-1]

X = df.iloc[:, :-1]

y = df[target_column]

# ====================================
# TRAIN TEST SPLIT
# ====================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# ====================================
# MODELS
# ====================================

models = {

    "Linear Regression":
    LinearRegression(),

    "Decision Tree":
    DecisionTreeRegressor(
        random_state=42
    ),

    "Random Forest":
    RandomForestRegressor(
        n_estimators=100,
        random_state=42
    ),

    "Gradient Boosting":
    GradientBoostingRegressor(
        random_state=42
    )
}

# ====================================
# COMPARISON
# ====================================

results = []

for name, model in models.items():

    model.fit(
        X_train,
        y_train
    )

    predictions = model.predict(
        X_test
    )

    r2 = r2_score(
        y_test,
        predictions
    )

    mae = mean_absolute_error(
        y_test,
        predictions
    )

    rmse = mean_squared_error(
        y_test,
        predictions
    ) ** 0.5

    results.append([
        name,
        round(r2, 3),
        round(mae, 3),
        round(rmse, 3)
    ])

# ====================================
# RESULTS TABLE
# ====================================

results_df = pd.DataFrame(

    results,

    columns=[
        "Algorithm",
        "R2 Score",
        "MAE",
        "RMSE"
    ]
)

results_df = results_df.sort_values(
    by="R2 Score",
    ascending=False
)

print("\n")
print("=" * 60)
print("      CONCRETE STRENGTH MODEL COMPARISON")
print("=" * 60)
print(results_df.to_string(index=False))
print("=" * 60)

best_model = results_df.iloc[0]

print("\nBEST MODEL SELECTED")
print("-" * 30)
print("Algorithm :", best_model["Algorithm"])
print("R2 Score  :", best_model["R2 Score"])
print("MAE       :", best_model["MAE"])
print("RMSE      :", best_model["RMSE"])