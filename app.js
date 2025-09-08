document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const studentIdInput = document.getElementById('student-id');
    const resultContainer = document.getElementById('result-container');
    const rollNoElement = document.getElementById('roll-no');
    const studentNameElement = document.getElementById('student-name');
    const classElement = document.getElementById('class');
    const averageElement = document.getElementById('average');
    const decisionElement = document.getElementById('decision');
    const resultsTable = document.getElementById('results-table');
    const frontPageLink = document.querySelector('.navbar a:first-child');

    // Sample data representing student results
const studentResults = {
    // Form 4 Students
    'F42501': { name: 'Safio Mohamed Ahmed', class: 'Form 4', average: 'A+', decision: 'Pass',
        grades: { 'Islamic Studies': 96,'Electricity': 100,'Arabic': 97,'Biology': 93,'Mathematics': 95,'English': 91,'Construction': 100,'Chemistry': 95,'Physics':100,'Somali': 95,'ICT': 95 }
    },
    'F42502': { name: 'Su’ad Abdihakin Osman', class: 'Form 4', average: 'A+', decision: 'Pass',
        grades: { 'Islamic Studies': 95,'Electricity': 95,'Arabic': 95,'Biology': 95,'Mathematics': 95,'English': 95,'Construction': 95,'Chemistry': 95,'Physics': 95,'Somali': 95,'ICT': 95 }
    },
    'F42503': { name: 'AbdiRahaman AbdiKadir Warsame', class: 'Form 4', average: 'A+', decision: 'Pass',
        grades: { 'Islamic Studies': 95,'Electricity': 95,'Arabic': 95,'Biology': 95,'Mathematics': 95,'English': 95,'Construction': 95,'Chemistry': 95,'Physics': 95,'Somali': 95,'ICT': 95 }
    },
    'F42504': { name: 'Abdirahman Mohamed Muse', class: 'Form 4', average: 'B', decision: 'Pass',
        grades: { 'Islamic Studies': 75,'Electricity': 75,'Arabic': 75,'Biology': 75,'Mathematics': 75,'English': 75,'Construction': 75,'Chemistry': 75,'Physics': 75,'Somali': 75,'ICT': 75 }
    },
    'F42505': { name: 'Abdulahi Said Ahmed', class: 'Form 4', average: 'A', decision: 'Pass',
        grades: { 'Islamic Studies': 85,'Electricity': 85,'Arabic': 85,'Biology': 85,'Mathematics': 85,'English': 85,'Construction': 85,'Chemistry': 85,'Physics': 85,'Somali': 85,'ICT': 85 }
    },
    'F42506': { name: 'Muse Mohamed Muse', class: 'Form 4', average: 'B', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 75,'Arabic': 65,'Biology': 75,'Mathematics': 75,'English': 75,'Construction': 65,'Chemistry': 75,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F42507': { name: 'Abdirahman Mohamed Muse', class: 'Form 4', average: 'A', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F42508': { name: 'said jebril', class: 'Form 4', average: 'B', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F42509': { name: 'Abdiwahid Hasan Abdiwahid', class: 'Form 4', average: 'C', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F42510': { name: 'Mohamed Abdirahman', class: 'Form 4', average: 'C', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F42511': { name: 'jama elmi', class: 'Form 4', average: 'B', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    },

    // Form 3 Students
    'F32501': { name: 'Abdiasis Abdi jama', class: 'Form 3', average: 'A+', decision: 'Pass',
        grades: { 'Islamic Studies': 95,'Electricity': 95,'Arabic': 95,'Biology': 95,'Mathematics': 95,'English': 95,'Construction': 95,'Chemistry': 95,'Physics': 95,'Somali': 95,'ICT': 95 }
    },
    'F32502': { name: 'osman abshir nour', class: 'Form 3', average: 'A+', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 95,'Arabic': 65,'Biology': 95,'Mathematics': 95,'English': 85,'Construction': 95,'Chemistry': 85,'Physics': 85,'Somali': 85,'ICT': 95 }
    },
    'F32503': { name: 'Abdiasis moahmed hared', class: 'Form 3', average: 'A+', decision: 'Pass',
        grades: { 'Islamic Studies': 95,'Electricity': 95,'Arabic': 95,'Biology': 95,'Mathematics': 95,'English': 95,'Construction': 95,'Chemistry': 95,'Physics': 95,'Somali': 95,'ICT': 95 }
    },
    'F32504': { name: 'abdifatah said abdi', class: 'Form 3', average: 'B', decision: 'Pass',
        grades: { 'Islamic Studies': 75,'Electricity': 75,'Arabic': 75,'Biology': 75,'Mathematics': 75,'English': 75,'Construction': 75,'Chemistry': 75,'Physics': 75,'Somali': 75,'ICT': 75 }
    },
    'F32505': { name: 'Abdulahi Said Ahmed', class: 'Form 3', average: 'A', decision: 'Pass',
        grades: { 'Islamic Studies': 85,'Electricity': 85,'Arabic': 85,'Biology': 85,'Mathematics': 85,'English': 85,'Construction': 85,'Chemistry': 85,'Physics': 85,'Somali': 85,'ICT': 85 }
    },
    'F32506': { name: 'ahmed abdihakin mohamed', class: 'Form 3', average: 'B', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 75,'Arabic': 65,'Biology': 75,'Mathematics': 75,'English': 75,'Construction': 65,'Chemistry': 75,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F32507': { name: 'Abdirahman Mohamed Muse', class: 'Form 3', average: 'A', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F32508': { name: 'said jebril', class: 'Form 3', average: 'B', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F32509': { name: 'Abdiwahid Hasan Abdiwahid', class: 'Form 3', average: 'C', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F32510': { name: 'Mohamed Abdirahman', class: 'Form 3', average: 'C', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    },
    'F32511': { name: 'jama elmi', class: 'Form 3', average: 'B', decision: 'Pass',
        grades: { 'Islamic Studies': 65,'Electricity': 65,'Arabic': 65,'Biology': 75,'Mathematics': 65,'English': 75,'Construction': 65,'Chemistry': 65,'Physics': 65,'Somali': 75,'ICT': 65 }
    }
};

frontPageLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    studentIdInput.value = '';
    resultsTable.innerHTML = ''; 
    resultContainer.style.display = 'none'; 
});

    // Function to display results
    function displayResults(student) {
        rollNoElement.textContent = studentIdInput.value;
        studentNameElement.textContent = student.name;
        classElement.textContent = student.class;
        averageElement.textContent = student.average;
        decisionElement.textContent = student.decision;

        // Apply dangerous color to decision if "Fail"
        if (student.decision.toLowerCase() === 'fail') {
            decisionElement.classList.add('danger');
        } else {
            decisionElement.classList.remove('danger');
        }

        let tableContent = `
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>Subject</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
        `;

        const subjects = Object.keys(student.grades);
        for (let i = 0; i < subjects.length; i += 2) {
            tableContent += `
                <tr>
                    <td>${subjects[i]}</td>
                    <td>${student.grades[subjects[i]]}</td>
                    <td>${subjects[i + 1] || ''}</td>
                    <td>${student.grades[subjects[i + 1]] || ''}</td>
                </tr>
            `;
        }

        tableContent += `</tbody>`;

        resultsTable.innerHTML = tableContent;
        resultContainer.style.display = 'block';
    }

    // Search button event listener
    searchButton.addEventListener('click', () => {
        const studentId = studentIdInput.value.trim();

        if (studentResults[studentId]) {
            displayResults(studentResults[studentId]);
        } else {
            alert('No results found for the entered Roll Number.');
            resultContainer.style.display = 'none';
        }
    });
});


