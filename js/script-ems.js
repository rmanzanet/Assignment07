// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: 12345678, name: 'John Doe', extension: 1234, email: 'john@example.com', department: 'Engineering' },
    { id: 23456789, name: 'Jane Smith', extension: 2345, email: 'jane@example.com', department: 'Marketing' },
    { id: 34567890, name: 'Alice Johnson', extension: 3456, email: 'alice@example.com', department: 'Sales' },
    { id: 45678901, name: 'Bob Brown', extension: 4567, email: 'bob@example.com', department: 'QA' },
    { id: 56789012, name: 'Carol White', extension: 5678, email: 'carol@example.com', department: 'Administrative' }
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}

// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const empTable = document.getElementById('empTable');
const empCount = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = {
        id: parseInt(id),
        name: name,
        extension: parseInt(extension),
        email: email,
        department: department
    };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            const row = e.target.closest('tr');
            const rowIndex = row.rowIndex - 1; // Adjust for table header

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex, 1);

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const oldTbody = empTable.querySelector('tbody');
    const newTbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    employees.forEach((employee) => {
        let row = newTbody.insertRow();

        row.insertCell(0).appendChild(document.createTextNode(employee.id));
        row.insertCell(1).appendChild(document.createTextNode(employee.name));
        row.insertCell(2).appendChild(document.createTextNode(employee.extension));
        row.insertCell(3).appendChild(document.createTextNode(employee.email));
        row.insertCell(4).appendChild(document.createTextNode(employee.department));

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete';
        deleteBtn.textContent = 'X';

        row.insertCell(5).appendChild(deleteBtn);
    });

    // BIND THE NEW TBODY TO THE EMPLOYEE TABLE
    empTable.replaceChild(newTbody, oldTbody);

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `(${employees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
}
