import auth from "./auth";
import course from "./course";
import courseEmployee from "./course-employee";

export interface BaseResponse<T> {
    data: T
}

export default {

    auth, course, courseEmployee

}