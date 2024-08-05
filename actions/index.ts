import auth from "./auth";
import courseEmployee from "./course-employee";

export interface BaseResponse<T> {
    data: T
}

export default {

    auth, courseEmployee

}