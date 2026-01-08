from fastapi import FastAPI, HTTPException
from auth.jwtHandler import create_access_token

app = FastAPI()

@app.post("/api/auth/login")
async def login(credentials: LoginSchema):
    user = db.verify_user(credentials.email, credentials.password)
    if not user:
        raise HTTPException(status_code=401, detail="First learn to enter right password, mortal.")
    
    token = create_access_token({"sub": user.email, "role": user.role})
    return {"access_token": token, "token_type": "bearer", "user": user}