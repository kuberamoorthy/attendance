// No imports needed, Firebase is loaded globally via CDN in index.html

// Schedule Data
const schedules = {
    'I': [
        { hour: 1, subject: 'OB', staff: 'SV' },
        { hour: 2, subject: 'OB', staff: 'ST' },
        { hour: 3, subject: 'PY', staff: 'VP' },
        { hour: 4, subject: 'TAM', staff: 'VJ' },
        { hour: 5, subject: 'ENG', staff: 'TS' }
    ],
    'II': [
        { hour: 1, subject: 'PY lab', staff: 'PSD' },
        { hour: 2, subject: 'PY lab', staff: 'GI' },
        { hour: 3, subject: 'PY lab', staff: 'MR' },
        { hour: 4, subject: 'TAM', staff: 'MR' },
        { hour: 5, subject: 'ENG', staff: 'Unknown' }
    ],
    'III': [
        { hour: 1, subject: 'OB lab', staff: 'VMB' },
        { hour: 2, subject: 'OB lab', staff: 'VMB' },
        { hour: 3, subject: 'OB lab', staff: 'PSD' },
        { hour: 4, subject: 'TAM', staff: 'VJ' },
        { hour: 5, subject: 'ENG', staff: 'GR' }
    ],
    'IV': [
        { hour: 1, subject: 'PY', staff: 'SV' },
        { hour: 2, subject: 'PY', staff: 'VP' },
        { hour: 3, subject: 'OB', staff: 'ST' },
        { hour: 4, subject: 'TAM', staff: 'MR' },
        { hour: 5, subject: 'ENG', staff: 'TS' }
    ],
    'V': [
        { hour: 1, subject: 'OB', staff: 'SV' },
        { hour: 2, subject: 'OB', staff: 'ST' },
        { hour: 3, subject: 'PY', staff: 'VP' },
        { hour: 4, subject: 'TAM', staff: 'VJ' },
        { hour: 5, subject: 'ENG', staff: 'GR' }
    ],
    'VI': [
        { hour: 1, subject: 'OB', staff: 'SV' },
        { hour: 2, subject: 'D', staff: 'PSD' },
        { hour: 3, subject: 'PY', staff: 'SV' },
        { hour: 4, subject: 'TAM', staff: 'MR' },
        { hour: 5, subject: 'ENG', staff: 'GR' }
    ]
};

// Full Students List
const dummyStudents = [
    { id: '25CAC201', name: 'SRIRAM S' },
    { id: '25CAC202', name: 'LONG ABSENT' },
    { id: '25CAC203', name: 'ABISHEK V' },
    { id: '25CAC204', name: 'JEEVA S' },
    { id: '25CAC205', name: 'ABISHEK S' },
    { id: '25CAC206', name: 'DHARNESH D' },
    { id: '25CAC207', name: 'ARUNKUMAR M' },
    { id: '25CAC208', name: 'JEEVA V' },
    { id: '25CAC209', name: 'Long absent' },
    { id: '25CAC210', name: 'SUJITH P' },
    { id: '25CAC211', name: 'VARUNRAJ R' },
    { id: '25CAC212', name: 'VIGNESH S' },
    { id: '25CAC213', name: 'PRAVIN M' },
    { id: '25CAC214', name: 'SANTHOSH G' },
    { id: '25CAC215', name: 'SANTHOSH S' },
    { id: '25CAC216', name: 'MATHAVAN P' },
    { id: '25CAC217', name: 'MAHADEVAN S' },
    { id: '25CAC218', name: 'SIVAPOZHILAN G' },
    { id: '25CAC219', name: 'PRAGATHISWARAN S' },
    { id: '25CAC220', name: 'ARAVIND K' },
    { id: '25CAC221', name: 'RITHISH R' },
    { id: '25CAC222', name: 'Long absent' },
    { id: '25CAC223', name: 'PRAVEENKUMAR B' },
    { id: '25CAC224', name: 'VASANTHAN S' },
    { id: '25CAC225', name: 'SABARINATHAN V' },
    { id: '25CAC226', name: 'VIGNESHWARAN' },
    { id: '25CAC227', name: 'JANARTHANAN P' },
    { id: '25CAC228', name: 'HARIHARAN S' },
    { id: '25CAC229', name: 'AJAI S' },
    { id: '25CAC230', name: 'ABDULAJMEER' },
    { id: '25CAC231', name: 'VIGNESHWARAN S' },
    { id: '25CAC232', name: 'ESHWARAN S' },
    { id: '25CAC233', name: 'DINESH M' },
    { id: '25CAC234', name: 'SANJAY S' },
    { id: '25CAC235', name: 'VENKATESAN P' },
    { id: '25CAC236', name: 'DHIVAKAR M' },
    { id: '25CAC237', name: 'RAJESHKUMAR M' },
    { id: '25CAC238', name: 'ASWINKUMAR K' },
    { id: '25CAC239', name: 'GOKUL J' },
    { id: '25CAC240', name: 'JAYASANTHOSH T' },
    { id: '25CAC241', name: 'SANTHOSH S' },
    { id: '25CAC242', name: 'LAKSHMISHANKAR M' },
    { id: '25CAC243', name: 'GOWTHAM B' },
    { id: '25CAC244', name: 'Long absent' },
    { id: '25CAC245', name: 'BARANITHARAN S' },
    { id: '25CAC246', name: 'MUKILAN K' },
    { id: '25CAC248', name: 'HARIRAM S' },
    { id: '25CAC249', name: 'Long absent' },
    { id: '25CAD201', name: 'PERLIN A' },
    { id: '25CAD202', name: 'SANTHOSH B' },
    { id: '25CAD203', name: 'Long absent' },
    { id: '25CAD204', name: 'Long absent' },
    { id: '25CAD205', name: 'THARUNPRABHU V' },
    { id: '25CAD206', name: 'SATHIYASEELAN V' },
    { id: '25CAD207', name: 'PERARASU S' },
    { id: '25CAD208', name: 'HARISH' },
    { id: '25CAD209', name: 'ANANTH N' },
    { id: '25CAD210', name: 'PRIYADHARSHAN' }
];

// State
let currentDay = null;
let currentClassInfo = null;
let attendanceData = {};

// DOM Elements
const loginView = document.getElementById('loginView');
const mainAppView = document.getElementById('mainAppView');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const selectedDateEl = document.getElementById('selectedDate');
const dayOrderSelection = document.getElementById('dayOrderSelection');
const scheduleView = document.getElementById('scheduleView');
const attendanceView = document.getElementById('attendanceView');
const logsView = document.getElementById('logsView');
const logsTableBody = document.getElementById('logsTableBody');
const timelineContainer = document.getElementById('timelineContainer');
const currentDayOrderEl = document.getElementById('currentDayOrder');
const studentsListEl = document.getElementById('studentsList');
const attHourEl = document.getElementById('attHour');
const attSubjectEl = document.getElementById('attSubject');
const successModal = document.getElementById('successModal');

// Header Buttons
const viewLogsBtn = document.getElementById('viewLogsBtn');
const lockSystemBtn = document.getElementById('lockSystemBtn');
const backFromLogs = document.getElementById('backFromLogs');

// Add Student Elements
const addStudentModal = document.getElementById('addStudentModal');
const openAddStudentModalBtn = document.getElementById('openAddStudentModalBtn');
const cancelAddStudentBtn = document.getElementById('cancelAddStudentBtn');
const confirmAddStudentBtn = document.getElementById('confirmAddStudentBtn');
const newStudentRollInput = document.getElementById('newStudentRoll');
const newStudentNameInput = document.getElementById('newStudentName');

// Init
function init() {
    // Login Form Handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = usernameInput.value.trim();
        const pass = passwordInput.value;
        
        // Simple hardcoded check - change as needed
        if (user === 'admin' && pass === 'password123') {
            loginView.classList.add('hidden');
            mainAppView.classList.remove('hidden');
            loginError.classList.add('hidden');
        } else {
            loginError.classList.remove('hidden');
        }
    });

    // Set Current Date in Date Picker
    const today = new Date();
    // Format YYYY-MM-DD for the input[type="date"]
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    selectedDateEl.value = `${yyyy}-${mm}-${dd}`;

    // Event Listeners for Day Selection
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const day = e.target.getAttribute('data-day');
            openSchedule(day);
        });
    });

    // Back Buttons
    document.getElementById('backToDays').addEventListener('click', () => {
        scheduleView.classList.add('hidden');
        dayOrderSelection.classList.remove('hidden');
    });

    document.getElementById('backToSchedule').addEventListener('click', () => {
        attendanceView.classList.add('hidden');
        scheduleView.classList.remove('hidden');
    });

    // Submit Attendance
    document.getElementById('submitAttendanceBtn').addEventListener('click', submitAttendance);
    
    // Close Success Modal
    document.getElementById('closeModalBtn').addEventListener('click', () => {
        successModal.classList.add('hidden');
        attendanceView.classList.add('hidden');
        dayOrderSelection.classList.remove('hidden');
    });

    // Add Student Logic
    openAddStudentModalBtn.addEventListener('click', () => {
        newStudentRollInput.value = '';
        newStudentNameInput.value = '';
        addStudentModal.classList.remove('hidden');
    });

    cancelAddStudentBtn.addEventListener('click', () => {
        addStudentModal.classList.add('hidden');
    });

    confirmAddStudentBtn.addEventListener('click', () => {
        const roll = newStudentRollInput.value.trim();
        const name = newStudentNameInput.value.trim();
        
        if (!roll || !name) {
            alert("Please fill in both Roll Number and Name.");
            return;
        }

        // Add to array
        dummyStudents.push({ id: roll, name: name });
        
        // Close modal
        addStudentModal.classList.add('hidden');
        
        // Re-render attendance view to show new student
        openAttendance(currentClassInfo);
    });

    // Lock System & Logs Logic
    lockSystemBtn.addEventListener('click', () => {
        mainAppView.classList.add('hidden');
        loginView.classList.remove('hidden');
        usernameInput.value = '';
        passwordInput.value = '';
    });

    viewLogsBtn.addEventListener('click', fetchLogs);

    backFromLogs.addEventListener('click', () => {
        logsView.classList.add('hidden');
        dayOrderSelection.classList.remove('hidden');
    });
}

async function fetchLogs() {
    logsTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">Loading logs...</td></tr>';
    dayOrderSelection.classList.add('hidden');
    logsView.classList.remove('hidden');

    try {
        if (!db) {
            logsTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--danger);">Firebase not initialized. Check API Key.</td></tr>`;
            return;
        }
        
        const querySnapshot = await db.collection("attendance_records").get();
        logsTableBody.innerHTML = '';
        
        if (querySnapshot.empty) {
            logsTableBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No attendance logs found.</td></tr>';
            return;
        }

        const rawLogs = [];
        querySnapshot.forEach((doc) => rawLogs.push(doc.data()));
        
        // Group logs by Date
        const groupedData = {};
        
        rawLogs.forEach(log => {
            if (!groupedData[log.date]) {
                groupedData[log.date] = {
                    date: log.date,
                    dayOrder: log.dayOrder,
                    hoursTaken: 0,
                    totalPresent: 0,
                    totalAbsent: 0
                };
            }
            groupedData[log.date].hoursTaken++;
            groupedData[log.date].totalPresent += log.presentCount;
            groupedData[log.date].totalAbsent += log.absentCount;
        });
        
        const groupedLogs = Object.values(groupedData);
        
        // Sort newest date first
        groupedLogs.sort((a, b) => new Date(b.date) - new Date(a.date));

        groupedLogs.forEach(log => {
            const avgPresent = Math.round(log.totalPresent / log.hoursTaken);
            const avgAbsent = Math.round(log.totalAbsent / log.hoursTaken);
            
            const totalSlots = log.totalPresent + log.totalAbsent;
            const percentage = totalSlots > 0 ? Math.round((log.totalPresent / totalSlots) * 100) : 0;
            
            let progressColor = 'var(--success)';
            if (percentage < 75) progressColor = '#f59e0b'; // warning orange
            if (percentage < 50) progressColor = 'var(--danger)'; // danger red

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${log.date}</td>
                <td><span style="background: rgba(59, 130, 246, 0.15); color: var(--primary-color); padding: 0.3rem 0.8rem; border-radius: 8px; font-weight: 700;">Day ${log.dayOrder}</span></td>
                <td><strong>${log.hoursTaken}</strong> <span style="color: var(--text-muted); font-size: 0.9rem;">/ 5 Hours</span></td>
                <td style="color: var(--success); font-weight: bold; font-size: 1.1rem;">${avgPresent}</td>
                <td style="color: var(--danger); font-weight: bold; font-size: 1.1rem;">${avgAbsent}</td>
                <td style="min-width: 120px;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-size: 0.85rem; font-weight: 700; color: ${progressColor};">${percentage}%</span>
                    </div>
                    <div style="background: rgba(0,0,0,0.05); border-radius: 12px; overflow: hidden; width: 100%; height: 6px;">
                        <div style="background: ${progressColor}; height: 100%; width: ${percentage}%; border-radius: 12px;"></div>
                    </div>
                </td>
            `;
            logsTableBody.appendChild(tr);
        });

    } catch(e) {
        logsTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--danger);">Error fetching logs: ${e.message}</td></tr>`;
        console.error(e);
    }
}

function openSchedule(day) {
    currentDay = day;
    currentDayOrderEl.textContent = day;
    
    // Build timeline
    timelineContainer.innerHTML = '';
    
    schedules[day].forEach(item => {
        const card = document.createElement('div');
        card.className = 'schedule-card';
        card.innerHTML = `
            <div class="hour-badge">Hour ${item.hour}</div>
            <div class="class-details">
                <div>
                    <div class="subject-name">${item.subject}</div>
                    <div class="staff-name"><i class="fa-solid fa-user-tie"></i> ${item.staff}</div>
                </div>
                <button class="take-att-btn"><i class="fa-solid fa-clipboard-user"></i></button>
            </div>
        `;
        
        card.addEventListener('click', () => openAttendance(item));
        timelineContainer.appendChild(card);
    });

    dayOrderSelection.classList.add('hidden');
    scheduleView.classList.remove('hidden');
}

function openAttendance(classItem) {
    currentClassInfo = classItem;
    attHourEl.textContent = `Hour ${classItem.hour}`;
    attSubjectEl.textContent = `${classItem.subject} - Prof. ${classItem.staff}`;
    
    // Reset data
    attendanceData = {};
    
    // Build students list
    studentsListEl.innerHTML = '';
    
    dummyStudents.forEach(student => {
        // If the student is marked as "Long absent" in their name string, default to absent
        const isLongAbsent = student.name.toLowerCase().includes("absent");
        attendanceData[student.id] = !isLongAbsent;
        
        const initials = student.name.substring(0, 2).toUpperCase();
        
        const statusClass = isLongAbsent ? 'status-absent' : 'status-present';
        const statusText = isLongAbsent ? 'Absent' : 'Present';
        const checkedAttr = isLongAbsent ? '' : 'checked';

        const div = document.createElement('div');
        div.className = 'student-card';
        div.innerHTML = `
            <div class="student-info">
                <div class="student-avatar">${initials}</div>
                <div>
                    <div class="student-name">${student.name}</div>
                    <div class="student-roll">Roll No: ${student.id}</div>
                </div>
            </div>
            <div class="attendance-actions">
                <div class="attendance-toggle">
                    <span class="status-text ${statusClass}" id="status-${student.id}">${statusText}</span>
                    <label class="switch">
                        <input type="checkbox" ${checkedAttr} id="check-${student.id}" data-id="${student.id}">
                        <span class="slider"></span>
                    </label>
                </div>
                <button class="delete-student-btn" data-id="${student.id}" title="Remove Student">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
        
        studentsListEl.appendChild(div);
        
        // Listener for toggle and delete
        setTimeout(() => {
            document.getElementById(`check-${student.id}`).addEventListener('change', (e) => {
                const isPresent = e.target.checked;
                attendanceData[student.id] = isPresent;
                
                const statusText = document.getElementById(`status-${student.id}`);
                if(isPresent) {
                    statusText.textContent = 'Present';
                    statusText.className = 'status-text status-present';
                } else {
                    statusText.textContent = 'Absent';
                    statusText.className = 'status-text status-absent';
                }
            });

            // Delete listener
            document.querySelector(`.delete-student-btn[data-id="${student.id}"]`).addEventListener('click', () => {
                if(confirm(`Are you sure you want to remove ${student.name}?`)) {
                    const index = dummyStudents.findIndex(s => s.id === student.id);
                    if(index > -1) {
                        dummyStudents.splice(index, 1);
                        openAttendance(currentClassInfo); // Re-render list
                    }
                }
            });
        }, 0);
    });

    scheduleView.classList.add('hidden');
    attendanceView.classList.remove('hidden');
}

async function submitAttendance() {
    const btn = document.getElementById('submitAttendanceBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Saving...';
    btn.disabled = true;

    try {
        if (!db) {
            console.warn("Firebase not fully configured (missing API key). Showing success modal for demo purposes.");
            setTimeout(() => {
                successModal.classList.remove('hidden');
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1000);
            return;
        }

        const chosenDate = selectedDateEl.value; // YYYY-MM-DD

        // Prepare data
        const presentStudents = [];
        const absentStudents = [];
        let presentCount = 0;
        let absentCount = 0;
        
        dummyStudents.forEach(student => {
            if(attendanceData[student.id]) {
                presentStudents.push({ id: student.id, name: student.name });
                presentCount++;
            } else {
                absentStudents.push({ id: student.id, name: student.name });
                absentCount++;
            }
        });

        // Unique document ID: YYYY-MM-DD_DayX_HourY
        const docId = `${chosenDate}_Day${currentDay}_Hr${currentClassInfo.hour}`;
        
        // Save in the background (Optimistic UI Update) - DO NOT AWAIT
        db.collection("attendance_records").doc(docId).set({
            date: chosenDate,
            dayOrder: currentDay,
            hour: currentClassInfo.hour,
            subject: currentClassInfo.subject,
            staff: currentClassInfo.staff,
            presentCount: presentCount,
            absentCount: absentCount,
            present: presentStudents,
            absent: absentStudents,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(e => {
            console.error("Background save error: ", e);
            if (e.message && e.message.includes('API key')) {
                console.warn("API Key missing, but UI already updated.");
            }
        });

        console.log("Document save initiated Date-Wise with ID: ", docId);
        
        // Show success instantly!
        successModal.classList.remove('hidden');
        
    } catch (e) {
        console.error("Error preparing document: ", e);
        alert("Error saving attendance: " + e.message);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// Start app
document.addEventListener('DOMContentLoaded', init);
