from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from pydantic import BaseModel

from jose import jwt

from database import SessionLocal

from models import User

import hashlib

# JWT SETTINGS

SECRET_KEY = "MYSECRETKEY"

ALGORITHM = "HS256"

router = APIRouter()

# DATABASE CONNECTION

def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()

# INPUT MODELS

class SignupModel(BaseModel):

    username: str

    email: str

    password: str

class LoginModel(BaseModel):

    email: str

    password: str

# SIGNUP API

@router.post("/signup")

def signup(

    user: SignupModel,

    db: Session = Depends(get_db)
):

    # CHECK EXISTING USER

    existing_user = db.query(User).filter(

        User.email == user.email

    ).first()

    if existing_user:

        raise HTTPException(

            status_code=400,

            detail="Email already exists"
        )

    # HASH PASSWORD

    hashed_password = hashlib.sha256(

        user.password.encode()

    ).hexdigest()

    # CREATE USER

    new_user = User(

        username=user.username,

        email=user.email,

        hashed_password=hashed_password
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {

        "message":
        "User created successfully"
    }

# LOGIN API

@router.post("/login")

def login(

    user: LoginModel,

    db: Session = Depends(get_db)
):

    # FIND USER

    existing_user = db.query(User).filter(

        User.email == user.email

    ).first()

    if not existing_user:

        raise HTTPException(

            status_code=401,

            detail="Invalid email"
        )

    # HASH INPUT PASSWORD

    hashed_input_password = hashlib.sha256(

        user.password.encode()

    ).hexdigest()

    # VERIFY PASSWORD

    if hashed_input_password != \
       existing_user.hashed_password:

        raise HTTPException(

            status_code=401,

            detail="Invalid password"
        )

    # CREATE JWT TOKEN

    token = jwt.encode(

        {

            "sub":
            existing_user.email
        },

        SECRET_KEY,

        algorithm=ALGORITHM
    )

    return {

        "access_token": token,

        "token_type": "bearer"
    }