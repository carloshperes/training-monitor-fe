import { fetch } from "./fetch";

export interface CourseEmployee {
    id:             string;
    course_id:      string;
    courses:        object;
    employee_id:    string;
    employees:      object;
    progress:       string;
    score:          string;
    created_at:     string;
    updated_at:     string;
}

export default {
    fetch
}