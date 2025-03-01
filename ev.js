// ev.js

// Function to get the current date in YYYY-MM-DD format
function getCurrentDate() {
    const date = new Date();
    return date.toISOString().slice(0, 10); // Format: YYYY-MM-DD
}

// Benefit data
const benefits = [
    {
        "BenefitClass": "Amalgam",
        "PlanPays": "80%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "1 per tooth every 2 Years",
            "AgeLimit": "None"
        }
    },
    {
        "BenefitClass": "Bitewing X-Rays",
        "PlanPays": "100%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "1 per Service Year",
            "AgeLimit": "None"
        }
    },
    {
        "BenefitClass": "Comprehensive and Periodic Exams",
        "PlanPays": "100%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "1 per Service Year",
            "AgeLimit": "None"
        }
    },
    {
        "BenefitClass": "Dental Crowns",
        "PlanPays": "50%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "2 per Service Year",
            "AgeLimit": "2 remaining this period"
        }
    },
    {
        "BenefitClass": "Dentures and Partials",
        "PlanPays": "50%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "1 per Service Year",
            "AgeLimit": "None"
        }
    },
    {
        "BenefitClass": "Endodontics",
        "PlanPays": "80%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "1 per Service Year",
            "AgeLimit": "2 remaining this period"
        }
    },
    {
        "BenefitClass": "Fixed Partial Dentures",
        "PlanPays": "50%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "1 per Lifetime",
            "AgeLimit": "None"
        }
    },
    {
        "BenefitClass": "Fluoride",
        "PlanPays": "N/A",
        "Deductible": "No",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "Not a Covered Benefit",
            "AgeLimit": "None"
        }
    },
    {
        "BenefitClass": "Full Mouth Debridement",
        "PlanPays": "100%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "1 per Lifetime",
            "AgeLimit": "Subject to Contract Limitations If Applicable"
        }
    },
    {
        "BenefitClass": "Full Mouth X-Ray",
        "PlanPays": "100%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "1 per 3 Years",
            "AgeLimit": "Last Service Date: 01/25/2024"
        }
    },
    {
        "BenefitClass": "Gen Anesthesia",
        "PlanPays": "80%",
        "Deductible": "Yes",
        "WaitingPeriod": "N/A",
        "ServicesAndUsage": {
            "Frequency": "3 per 1 Days",
            "AgeLimit": "None"
        }
    }
];

// Function to display benefits
function displayBenefits() {
    benefits.forEach(benefit => {
        console.log(`Benefit Class: ${benefit.BenefitClass}`);
        console.log(`% Plan Pays: ${benefit.PlanPays}`);
        console.log(`Deductible: ${benefit.Deductible}`);
        console.log(`Waiting Period: ${benefit.WaitingPeriod}`);
        console.log(`Services & Usage: Frequency - ${benefit.ServicesAndUsage.Frequency}, Age Limit - ${benefit.ServicesAndUsage.AgeLimit}`);
        console.log('------------------------------------');
    });
}

// Demo patient data
const demoPatients = [
    {
        "patient_name": "John Doe",
        "sub_id": "v8866370536",
        "dob": "2005-03-15",
        "requestDate": getCurrentDate(), // Set current date
        "memberName": "John Doe",
        "memberID": "123456",
        "age": 18,
        "coverage": "Full",
        "effectiveDate": "2023-01-01",
        "eligibleThrough": "2024-01-01",
        "coverageLevel": "Gold",
        "paymentLevel": "Standard",
        "serviceYear": "2023",
        "planMax": "$1,000,000",
        "individualDeductible": "$500",
        "familyDeductible": "$1000",
        "dependentEligibility": "Yes",
        "studentEligibility": "Yes"
    },
    {
        "patient_name": "Jane Smith",
        "sub_id": "SUB654321",
        "dob": "1990-10-20",
        "requestDate": getCurrentDate(), // Set current date
        "memberName": "Jane Smith",
        "memberID": "654321",
        "age": 33,
        "coverage": "Partial",
        "effectiveDate": "2022-05-01",
        "eligibleThrough": "2023-12-31",
        "coverageLevel": "Silver",
        "paymentLevel": "Standard",
        "serviceYear": "2023",
        "planMax": "$500,000",
        "individualDeductible": "$750",
        "familyDeductible": "$1500",
        "dependentEligibility": "No",
        "studentEligibility": "No"
    },
    {
        "patient_name": "Alice Johnson",
        "sub_id": "SUB111222",
        "dob": "1975-03-30",
        "requestDate": getCurrentDate(), // Set current date
        "memberName": "Alice Johnson",
        "memberID": "111222",
        "age": 48,
        "coverage": "Full",
        "effectiveDate": "2021-01-01",
        "eligibleThrough": "2024-01-01",
        "coverageLevel": "Platinum",
        "paymentLevel": "Premium",
        "serviceYear": "2023",
        "planMax": "$2,000,000",
        "individualDeductible": "$300",
        "familyDeductible": "$600",
        "dependentEligibility": "Yes",
        "studentEligibility": "Yes"
    },
    {
        "patient_name": "Bob Brown",
        "sub_id": "SUB333444",
        "dob": "1980-12-12",
        "requestDate": getCurrentDate(), // Set current date
        "memberName": "Bob Brown",
        "memberID": "333444",
        "age": 42,
        "coverage": "Limited",
        "effectiveDate": "2022-11-01",
        "eligibleThrough": "2023-11-01",
        "coverageLevel": "Bronze",
        "paymentLevel": "Basic",
        "serviceYear": "2023",
        "planMax": "$250,000",
        "individualDeductible": "$1000",
        "familyDeductible": "$2000",
        "dependentEligibility": "Yes",
        "studentEligibility": "No"
    }
];

// Function to get URL parameters
function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

// Function to fetch patient data based on name
function fetchPatientData(patientName) {
    const patient = demoPatients.find(p => p.patient_name === patientName);

    if (patient) {
        // Populate the patient info section
        document.getElementById('patientName').innerText = patient.patient_name;
        document.getElementById('requestDate').innerText = patient.requestDate;
        document.getElementById('memberName').innerText = patient.memberName;
        document.getElementById('memberID').innerText = patient.memberID;
        document.getElementById('dob').innerText = patient.dob;
        document.getElementById('age').innerText = patient.age;
        document.getElementById('coverage').innerText = patient.coverage;
        document.getElementById('effectiveDate').innerText = patient.effectiveDate;
        document.getElementById('eligibleThrough').innerText = patient.eligibleThrough;
        document.getElementById('coverageLevel').innerText = patient.coverageLevel;
        document.getElementById('paymentLevel').innerText = patient.paymentLevel;
        document.getElementById('serviceYear').innerText = patient.serviceYear;
        document.getElementById('planMax').innerText = patient.planMax;
        document.getElementById('individualDeductible').innerText = patient.individualDeductible;
        document.getElementById('familyDeductible').innerText = patient.familyDeductible;
        document.getElementById('dependentEligibility').innerText = patient.dependentEligibility;
        document.getElementById('studentEligibility').innerText = patient.studentEligibility;
    } else {
        document.getElementById('patientDetails').innerHTML = `<p>No patient details available.</p>`;
    }
}

// Event listener for the lookup button
document.getElementById('lookupButton').addEventListener('click', function() {
    const patientName = document.getElementById('patientNameInput').value; // Assuming there's an input field for patient name
    fetchPatientData(patientName);
});

// Function for search input filtering
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("codeSearch");
    const patientDetails = document.getElementById("patientDetails");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const coverageItems = patientDetails.querySelectorAll(".coverage-item");

        coverageItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchTerm)) {
                item.style.display = "block"; // Show matching item
            } else {
                item.style.display = "none"; // Hide non-matching item
            }
        });
    });
});

// Event listener for the search button
document.getElementById("searchBtn").addEventListener("click", function() {
    let code = document.getElementById("codeSearch").value.trim();
    if (code) {
        alert("Searching for Dental Code: " + code);
        document.getElementById("patientDetails").style.display = "block";
    }
});

// Populate patient details on page load
window.onload = function() {
    const params = getUrlParams();
    const patientDetailsDiv = document.getElementById("patientDetails");

    if (params.name) {
        fetchPatientData(params.name);
    } else {
        patientDetailsDiv.innerHTML = `<p>No patient details available.</p>`;
    }
};

// Call displayBenefits to show benefits in console
displayBenefits();

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("codeSearch");
    const searchButton = document.getElementById("searchBtn");
    const benefitsTable = document.getElementById("benefitsTable");

    // Load data from `code.js`
    function displayDentalCodes(codes) {
        benefitsTable.innerHTML = ""; // Clear table before displaying data
        if (codes.length === 0) {
            benefitsTable.innerHTML = "<tr><td colspan='7'>No results found</td></tr>";
            return;
        }

        codes.forEach(benefit => {
            let row = `<tr>
                <td>${benefit.code}</td>
                <td>${benefit.description}</td>
                <td>${benefit.plan_pays}</td>
                <td>${benefit.deductible}</td>
                <td>${benefit.waiting_period}</td>
                <td>${benefit.frequency}</td>
                <td>${benefit.age_limit}</td>
            </tr>`;
            benefitsTable.innerHTML += row;
        });
    }

    // Function to handle search
    function handleSearch() {
        let searchQuery = searchInput.value.trim();
        let filteredCodes = dentalCodes.filter(item =>
            item.code.includes(searchQuery) || item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        displayDentalCodes(filteredCodes);
    }

    // Trigger search when clicking the button
    searchButton.addEventListener("click", handleSearch);

    // Trigger search when pressing Enter
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            handleSearch();
        }
    });

    // Load all dental codes initially
    displayDentalCodes(dentalCodes);
});
