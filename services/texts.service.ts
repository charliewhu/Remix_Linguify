import axiosInstance from "./base.service";

async function getText(id: number){
  try {
    const response = await axiosInstance(`/texts/${id}/`)
    return response.data;
  } catch (error) {
    return error
  }
};

const textService = {
  getText,
}

export default textService;
