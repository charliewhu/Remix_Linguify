import axiosInstance from "./base.service";

type textData = { name: any; body: any }

async function getText(id: string | undefined){
  try {
    const response = await axiosInstance.get(`/texts/${id}/`)
    return response.data;
  } catch (error) {
    return error
  }
};

async function getTexts() {
  try {
    const response = await axiosInstance.get("/texts/")
    return response.data;
  } catch (error) {
    console.log(error)
    return error
  }
}

async function postText(data: textData) {
  try {
    const response = await axiosInstance.post(`/texts/`, data)
    return response.data;
  } catch (error) {
    return error
  }
}

const textService = {
  getText,
  getTexts,
  postText,
}

export default textService;
