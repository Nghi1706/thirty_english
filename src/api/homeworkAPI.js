import axiosRequest from "./api"
const homeworksAPI = {
    gelHomeworkById: (id) => {
        const url = 'homework/getHomeworkByCourseId/' + id;
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


}
export default homeworksAPI