import type { CourseEmployee } from "~/actions/course-employee"
import courseEmployee from "~/actions/course-employee";

export const useCourseEmployeeStore = defineStore('course-employee', () => {

    const courses               = ref(<any>([]));

    const loadCourseEmployee    = (newCourse: CourseEmployee) => courses.value = newCourse;

    return { courses, loadCourseEmployee }

})