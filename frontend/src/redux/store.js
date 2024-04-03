import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./userRelated/userSlice"
import { studentReducer } from "./studentRelated/studentSlice"
import { noticeReducer } from "./noticeRelated/noticeSlice"
import { sclassReducer } from "./sclassRelated/sclassSlice"
import { teacherReducer } from "./teacherRelated/teacherSlice"
import { complainReducer } from "./complainRelated/complainSlice"
import { annReducer } from "./announcements/annSlice"
import { eventReducer } from "./event/eventSlice"
import { researchReducer } from "./researchs/researchSlice"
import { adminReducer } from "./adminRelated/adminSlice"
import { contactReducer } from "./contactUsRelated/contactSlice"

// Ann
import productsReducer, { productsFetch } from "./announcements/annHandle"
import eventsReducer, { eventsFetch } from "./event/eventHandle"
import researchsReducer, { researchsFetch } from "./researchs/researchHandle"

const store = configureStore({
	reducer: {
		user: userReducer,
		student: studentReducer,
		teacher: teacherReducer,
		notice: noticeReducer,
		complain: complainReducer,
		sclass: sclassReducer,
		admin: adminReducer,
		contact: contactReducer,
		ann: annReducer,
		products: productsReducer, // Ann
		event: eventReducer,
		events: eventsReducer,
		research: researchReducer,
		researchs: researchsReducer,
	},
})
store.dispatch(productsFetch())
store.dispatch(eventsFetch())
store.dispatch(researchsFetch())

export default store
