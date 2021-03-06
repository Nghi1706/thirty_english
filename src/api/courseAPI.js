import axiosRequest from "./api"
const courseAPI = {
    gelAllCategory: () => {
        const url = 'category/getAllCategory';
        return axiosRequest.get(url);
    },
    createCourse: (params) => {
        const url = 'course/createCourse';
        return axiosRequest.post(url, params);
    },
    gelAllCourse: () => {
        const url = 'course/getAllCourse';
        return axiosRequest.get(url);
    },
    createStudentCourse: (params) => {
        const url = 'studentCourse/createStudentCourse';
        return axiosRequest.post(url, params);
    },
    gelAllCourseStudent: (email) => {
        const url = 'studentCourse/getStudentCourseByStudentName/' + email;
        return axiosRequest.get(url);
    },
    createCourseLevel: (params) => {
        const url = 'courseLevel/createCourseLevel';
        return axiosRequest.post(url, params);
    },
    updateCourse: (params) => {
        const url = 'course/editCourse';
        return axiosRequest.put(url, params);
    },
    updateCourseLevel: (params) => {
        const url = 'courseLevel/editCourseLevel';
        return axiosRequest.put(url, params);
    },
    deleteCourseLevels: (id) => {
        const url = 'courseLevel/deleteCourseLevel/' + id;
        return axiosRequest.delete(url);
    }

}
export default courseAPI