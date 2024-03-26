const router = require("express").Router()

const {
	adminRegister,
	adminLogIn,
	deleteAdmin,
	getAdminDetail,
	getAdmins,
	updateAdmin,
} = require("../controllers/admin-controller.js")

const createAssignment = require("../controllers/assignment-controller.js")

const {
	getAnn,
	createAnn,
	deleteAnn,
	updateAnn,
} = require("../controllers/ann-controller.js")



const {
	createEvent,
	getEvent,
	deleteEvent,
	updateEvent
} = require("../controllers/event-controller.js")

const {
	developerRegister,
	developerLogIn,
	getdeveloperDetail,
	updatedeveloper
} = require("../controllers/developer-controller.js")

const {
	sclassCreate,
	sclassList,
	deleteSclass,
	deleteSclasses,
	getSclassDetail,
	getSclassStudents,
} = require("../controllers/class-controller.js")
const {
	complainCreate,
	complainList,
} = require("../controllers/complain-controller.js")
const {
	noticeCreate,
	noticeList,
	deleteNotices,
	deleteNotice,
	updateNotice,
} = require("../controllers/notice-controller.js")
const {
	upload_files,
	get_files,
} = require("../controllers/pdfFile-controller.js")
const {
	studentRegister,
	studentLogIn,
	getStudents,
	getStudentDetail,
	deleteStudents,
	deleteStudent,
	updateStudent,
	studentAttendance,
	deleteStudentsByClass,
	updateExamResult,
	clearAllStudentsAttendanceBySubject,
	clearAllStudentsAttendance,
	removeStudentAttendanceBySubject,
	removeStudentAttendance,
} = require("../controllers/student_controller.js")
const {
	subjectCreate,
	classSubjects,
	deleteSubjectsByClass,
	getSubjectDetail,
	deleteSubject,
	freeSubjectList,
	allSubjects,
	deleteSubjects,
} = require("../controllers/subject-controller.js")
const {
	teacherRegister,
	teacherLogIn,
	getTeachers,
	getTeacherDetail,
	deleteTeachers,
	deleteTeachersByClass,
	deleteTeacher,
	updateTeacherSubject,
	teacherAttendance,
} = require("../controllers/teacher-controller.js")
const upload = require("../helper/multerConfig.js")

router.post("/DeveloperReg", developerRegister)
router.post("/DeveloperLogin", developerLogIn)
router.get("/Developer/:id", getdeveloperDetail)
router.put("/Developer/:id", updatedeveloper)
// Dev Announcements
router.post("/announcements", createAnn)
router.get("/announcements", getAnn)
// router.get("/announcement/:id", getAnn)
router.delete("/announcements/:id", deleteAnn)
router.put("/announcements/:id", updateAnn)
// Dev events
router.post("/events", createEvent)
router.get("/events", getEvent)
// router.get("/events/:id", getEvent)
router.delete("/events/:id", deleteEvent)
router.put("/events/:id", updateEvent)


// Admin
router.post("/AdminReg", adminRegister)
router.post("/AdminLogin", adminLogIn)
router.get("/Admin/:id", getAdmins)
router.get("/Admin/:id", getAdminDetail)
router.delete("/Admin/:id", deleteAdmin)

router.put("/Admin/:id", updateAdmin)

// Student

router.post("/StudentReg", studentRegister)
router.post("/StudentLogin", studentLogIn)

router.get("/Students/:id", getStudents)
router.get("/Student/:id", getStudentDetail)

router.delete("/Students/:id", deleteStudents)
router.delete("/StudentsClass/:id", deleteStudentsByClass)
router.delete("/Student/:id", deleteStudent)

router.put("/Student/:id", updateStudent)

router.put("/UpdateExamResult/:id", updateExamResult)

router.put("/StudentAttendance/:id", studentAttendance)

router.put(
	"/RemoveAllStudentsSubAtten/:id",
	clearAllStudentsAttendanceBySubject
)
router.put("/RemoveAllStudentsAtten/:id", clearAllStudentsAttendance)

router.put("/RemoveStudentSubAtten/:id", removeStudentAttendanceBySubject)
router.put("/RemoveStudentAtten/:id", removeStudentAttendance)

// Teacher

router.post("/TeacherReg", teacherRegister)
router.post("/TeacherLogin", teacherLogIn)

router.get("/Teachers/:id", getTeachers)
router.get("/Teacher/:id", getTeacherDetail)

router.delete("/Teachers/:id", deleteTeachers)
router.delete("/TeachersClass/:id", deleteTeachersByClass)
router.delete("/Teacher/:id", deleteTeacher)

router.put("/TeacherSubject", updateTeacherSubject)

router.post("/TeacherAttendance/:id", teacherAttendance)

// Notice

router.post("/NoticeCreate", noticeCreate)

router.get("/NoticeList/:id", noticeList)

router.delete("/Notices/:id", deleteNotices)
router.delete("/Notice/:id", deleteNotice)

router.put("/Notice/:id", updateNotice)

// Complain

router.post("/ComplainCreate", complainCreate)

router.get("/ComplainList/:id", complainList)

// Sclass

router.post("/SclassCreate", sclassCreate)

router.get("/SclassList/:id", sclassList)
router.get("/Sclass/:id", getSclassDetail)

router.get("/Sclass/Students/:id", getSclassStudents)

router.delete("/Sclasses/:id", deleteSclasses)
router.delete("/Sclass/:id", deleteSclass)

// Subject

router.post("/SubjectCreate", subjectCreate)

router.get("/AllSubjects/:id", allSubjects)
router.get("/ClassSubjects/:id", classSubjects)
router.get("/FreeSubjectList/:id", freeSubjectList)
router.get("/Subject/:id", getSubjectDetail)

router.delete("/Subject/:id", deleteSubject)
router.delete("/Subjects/:id", deleteSubjects)
router.delete("/SubjectsClass/:id", deleteSubjectsByClass)

// Pdf File Routes
router.post("/upload-files", upload.single("file"), upload_files)
router.get("/get-files", get_files)
//  Assignment
router.post("/createAssignment", createAssignment)
module.exports = router
