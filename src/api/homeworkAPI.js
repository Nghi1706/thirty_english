import axiosRequest from "./api"
const homeworksAPI = {
    gelHomeworkById: (id) => {
        const url = 'homework/getHomeworkByCourseId/' + id;
        return axiosRequest.get(url);
    },
    getHomeworkResultByName: (email) => {
        const url = 'homeworkResult/getHomeworkResultByHomeworkUsername/' + email;
        return axiosRequest.get(url);
    },
    createHomework: (params) => {
        const url = 'homework/createHomework';
        return axiosRequest.post(url, params);
    },
    getQuestionbyId: (id) => {
        const url = 'question/getQuestionByHomeworkId/' + id;
        return axiosRequest.get(url);
    },
    createQuestion: (params) => {
        const url = 'question/createQuestion';
        return axiosRequest.post(url, params);
    },
    editQuestion: (params) => {
        const url = 'question/editQuestion';
        return axiosRequest.put(url, params);
    },
    getQuestionsTeacherById: (id) => {
        const url = 'question/checkListQuestionsByHomeworkId/' + id;
        return axiosRequest.get(url);
    },
    createHomeworkResult: (params) => {
        const url = 'homeworkResult/createHomeworkResult';
        return axiosRequest.post(url, params);
    },
}
export default homeworksAPI