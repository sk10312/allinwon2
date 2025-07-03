-- ALL IN WON Database Schema
CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    dob DATE,
    insurance_provider VARCHAR(100),
    insurance_id VARCHAR(100)
);

CREATE TABLE claims (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(id),
    claim_date DATE,
    amount DECIMAL,
    status VARCHAR(50)
);


-- Internal Email System
CREATE TABLE internal_emails (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER,
    recipient_id INTEGER,
    subject TEXT,
    message TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    is_read BOOLEAN DEFAULT FALSE
);

-- Clock In/Out Log
CREATE TABLE employee_clock_logs (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER,
    clock_in TIMESTAMP,
    clock_out TIMESTAMP,
    notes TEXT
);

-- Employee Users
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    password_hash TEXT,
    role TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);


-- Employee Activity Log Table
CREATE TABLE activity_logs (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER,
    action TEXT,
    path TEXT,
    timestamp TIMESTAMP DEFAULT NOW()
);
