from flask import Flask, request, jsonify  # type: ignore
import mysql.connector  # type: ignore

app = Flask(__name__)

# Database Configuration
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "smile_guard"
}
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "healthcare_db"
}

# Function to connect to the database
def get_db_connection():
    try:
        return mysql.connector.connect(**db_config)
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

# ✅ Test database connection
@app.route('/test_db', methods=['GET'])
def test_db():
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        cursor = conn.cursor()
        cursor.execute("SHOW TABLES;")
        tables = cursor.fetchall()
        return jsonify({"tables": [table[0] for table in tables]})  # Return table names as a list
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return a 500 error for server issues
    finally:
        conn.close()  # Ensure the connection is closed

# ✅ Route to fetch patient details using insurance ID
@app.route('/get_patient', methods=['GET'])
def get_patient():
    patient_name = request.args.get('patient_name')
    sub_id = request.args.get('sub_id')
    dob = request.args.get('dob')

    if not patient_name and not sub_id and not dob:
        return jsonify({"error": "At least one search parameter is required"}), 400

    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor(dictionary=True)

    # Build dynamic query based on provided parameters
    query = "SELECT * FROM patients WHERE"
    conditions = []
    params = []

    if patient_name:
        conditions.append(" patient_name LIKE %s ")
        params.append(f"%{patient_name}%")  # Using LIKE for partial search

    if sub_id:
        conditions.append(" sub_id = %s ")
        params.append(sub_id)

    if dob:
        conditions.append(" dob = %s ")
        params.append(dob)

    query += " AND ".join(conditions)

    cursor.execute(query, tuple(params))
    patients = cursor.fetchall()
    
    conn.close()

    if not patients:
        return jsonify({"error": "No patients found"}), 404

    return jsonify(patients)

# ✅ Route to check patient eligibility
@app.route('/check_eligibility', methods=['GET'])
def check_eligibility():
    insurance_id = request.args.get('insurance_id')

    # Check if insurance_id is provided
    if not insurance_id:
        return jsonify({"error": "Insurance ID is required"}), 400

    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Database connection failed"}), 500

    cursor = conn.cursor(dictionary=True)

    # Log query execution for eligibility check
    print(f"Executing query: SELECT e.status, e.effective_date FROM eligibility e WHERE e.insurance_id = '{insurance_id}'")

    # Query the eligibility table for the given insurance ID
    query = """
    SELECT e.status, e.effective_date
    FROM eligibility e
    WHERE e.insurance_id = %s
    """
    cursor.execute(query, (insurance_id,))
    result = cursor.fetchone()

    conn.close()

    # Log result
    print(f"Eligibility result: {result}")

    if result:
        return jsonify(result)
    else:
        return jsonify({"status": "Not Found", "effective_date": None})

# ✅ Ensure the app runs at the end
if __name__ == '__main__':
    app.run(debug=True)