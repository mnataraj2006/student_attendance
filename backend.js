const form = document.getElementById('attendanceForm');
const tableBody = document.querySelector('#attendanceTable tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('studentName').value.trim();
  const status = document.getElementById('status').value;
  const date = document.getElementById('date').value;

  if (name === '') {
    alert("Please enter the student's name.");
    return;
  }

  const row = document.createElement('tr');

  // Highlight if status is Absent
  if (status === 'Absent') {
    row.style.backgroundColor = '#f8d7da'; // light red
  }

  row.innerHTML = `<td>${name}</td><td>${status}</td><td>${date}</td>`;
  tableBody.appendChild(row);

  form.reset();
});
