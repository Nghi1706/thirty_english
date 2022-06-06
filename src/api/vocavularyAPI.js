import axiosRequest from "./api"
const vocabularyAPI = {
    gelAllVocabularyPacks: () => {
        const url = 'vocabularyPack/getAllVocabularyPack';
        return axiosRequest.get(url);
    },
    createVocabularyPack: (params) => {
        const url = 'vocabularyPack/createVocabularyPack';
        return axiosRequest.post(url, params);
    },
    createVocabularyPart: (params) => {
        const url = 'vocabularyPart/createVocabularyPart';
        return axiosRequest.post(url, params);
    },
    getVocabularyPartbyID: (id) => {
        const url = 'vocabularyPart/getVocabularyPartsByVocabularyPackId/' + id;
        return axiosRequest.get(url);
    },
    getVocabularybyID: (id) => {
        const url = 'vocabulary/getVocabularyByVocabularyPartId/' + id;
        return axiosRequest.get(url);
    },
    createVocabulary: (params) => {
        const url = 'vocabulary/createVocabulary';
        return axiosRequest.post(url, params);
    },
    getPackByCourseLevelId: (string) => {
        const url = 'vocabularyPack/getVocabularyPacksByCourseLevelId/' + string;
        return axiosRequest.get(url);
    },
    editVocabulary: (params) => {
        const url = 'vocabulary/editVocabulary';
        return axiosRequest.put(url, params);
    },
    deleteVocabulary: (id) => {
        const url = 'vocabulary/deleteVocabulary/'+ id;
        return axiosRequest.delete(url);
    },
}
export default vocabularyAPI