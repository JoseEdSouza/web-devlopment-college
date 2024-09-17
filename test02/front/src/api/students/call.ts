import api from "../factory";
import { Student } from "./type";


export function getAllStudents() {
    return api.get<Student[]>("/student");
}

export default getAllStudents;