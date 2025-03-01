// Sample demo patient data
const demoPatients = [
    {
        "patient_name": "John Doe",
        "sub_id": "v8866370536",
        "dob": "2005-03-15" // Use the format YYYY-MM-DD for consistency
    },
    {
        "patient_name": "Jane Smith",
        "sub_id": "SUB654321",
        "dob": "1990-10-20"
    },
    {
        "patient_name": "Alice Johnson",
        "sub_id": "SUB111222",
        "dob": "1975-03-30"
    },
    {
        "patient_name": "Bob Brown",
        "sub_id": "SUB333444",
        "dob": "1980-12-12"
    }
];

// Add event listener for the patient search form submission
document.getElementById("patientSearchForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const subId = document.getElementById("subId").value.trim();
    const dob = document.getElementById("dob").value;

    // Validate inputs
    if (!subId || !dob) {
        alert("Please fill in all required fields.");
        return;
    }

    // Show loading indicator
    document.getElementById("loading").classList.remove("hidden");

    // Check demo data first
    const foundPatient = demoPatients.find(patient => patient.sub_id === subId && patient.dob === dob);

    // Hide loading indicator
    document.getElementById("loading").classList.add("hidden");

    if (foundPatient) {
        // Redirect to ev.html with patient details
        const patientDetailsUrl = `ev.html?name=${encodeURIComponent(foundPatient.patient_name)}&sub_id=${encodeURIComponent(foundPatient.sub_id)}&dob=${encodeURIComponent(foundPatient.dob)}`;
        window.location.href = patientDetailsUrl; // Redirect to the new page
    } else {
        // If not found in demo data, you can still fetch from the server if needed
        // Uncomment the following lines if you want to fetch from the server as a fallback
        /*
        const queryParams = new URLSearchParams();
        queryParams.append("sub_id", subId);
        queryParams.append("dob", dob);

        try {
            const response = await fetch(`/get_patient?${queryParams.toString()}`);
            const data = await response.json();

            if (response.ok) {
                displayResults(data); // Display the results
                document.querySelector('.results-section').style.display = 'block'; // Show results section
            } else {
                document.getElementById("searchResults").innerHTML = `<p>No patient found.</p>`;
                document.querySelector('.results-section').style.display = 'none'; // Hide results section
            }
        } catch (error) {
            console.error("Error fetching patient:", error);
            document.getElementById("searchResults").innerHTML = `<p>Error fetching patient data. Please try again later.</p>`;
            document.querySelector('.results-section').style.display = 'none'; // Hide results section
        }
        */
        document.getElementById("searchResults").innerHTML = `<p>No patient found.</p>`;
        document.querySelector('.results-section').style.display = 'none'; // Hide results section
    }
});

// Function to display patient results
function displayResults(patients) {
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = `<h3>Patient Results</h3>`;

    // Check if there are any patients returned
    if (patients.length === 0) {
        resultsDiv.innerHTML += `<p>No results found.</p>`;
        return;
    }

    // Loop through each patient and display their information
    patients.forEach(patient => {
        resultsDiv.innerHTML += `
            <div class="patient-card">
                <p><strong>Name:</strong> ${patient.patient_name || "N/A"}</p>
                <p><strong>Subscriber ID:</strong> ${patient.sub_id || "N/A"}</p>
                <p><strong>Date of Birth:</strong> ${patient.dob || "N/A"}</p>
                <hr>
            </div>
        `;
    });
}