from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import lightgbm as lgb
import pickle

app = FastAPI()

class InputData(BaseModel):
    soil_pH: float
    nitrogen: float
    organic_matter: float
    rainfall: float
    temperature: float
    humidity: float

with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.post("/predict/")
def predict(input_data: InputData):
    input_df = pd.DataFrame([input_data.dict()])
    prediction = model.predict(input_df)
    return {"prediction": prediction[0]}
