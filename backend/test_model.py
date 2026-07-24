import joblib

print("Loading model...")

model = joblib.load("concrete_model.pkl")

print("Model loaded successfully!")

print(type(model))