import type { CourseEmployee } from ".";
import type { BaseResponse } from "..";

export async function fetch(page = 0){

    const response  = await useGet('api/course-employee' + ((page > 0) ? '?page=' + page : null));

    const data      = response.data.value as BaseResponse<CourseEmployee>;

    useCourseEmployeeStore().loadCourseEmployee(data.data);

}