import axiosRequest from "./api"
const videoAPI = {
    gelAllVideo: (id) => {
        const url = 'video/getVideosByCourseLevelId/' + id;
        return axiosRequest.get(url);
    },
    createVideo: (params) => {
        const url = 'video/createVideo';
        return axiosRequest.post(url, params);
    },
    updateVideo: (params) => {
        const url = 'video/editYoutubeUrl';
        return axiosRequest.put(url, params);
    },
    deleteVideo: (id) => {
        const url = 'video/deleteVideo/' + id;
        return axiosRequest.delete(url);
    }

}
export default videoAPI