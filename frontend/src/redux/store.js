import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./userRelated/userSlice"
import { studentReducer } from "./studentRelated/studentSlice"
import { noticeReducer } from "./noticeRelated/noticeSlice"
import { sclassReducer } from "./sclassRelated/sclassSlice"
import { teacherReducer } from "./teacherRelated/teacherSlice"
import { complainReducer } from "./complainRelated/complainSlice"
import { annReducer } from "./announcements/annSlice"
import { eventReducer } from "./event/eventSlice"
import { adminReducer } from "./adminRelated/adminSlice"
import { contactReducer } from "./contactUsRelated/contactSlice"

const store = configureStore({
	reducer: {
		user: userReducer,
		student: studentReducer,
		teacher: teacherReducer,
		notice: noticeReducer,
		complain: complainReducer,
		sclass: sclassReducer,
		ann: annReducer,
		event: eventReducer,
		admin: adminReducer,
		contact: contactReducer,
	},
})

export default store
