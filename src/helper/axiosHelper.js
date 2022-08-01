import axios from "axios";

const rootUrl = "https://www.dnd5eapi.co/api/spells";
const onlyOneSpells = "https://www.dnd5eapi.co";

const apiProcessor = async (method, url) => {
  const response = await axios({
    method,
    url,
  });

  return response.data;
};

export const fetchAllSpells = () => {
  return apiProcessor("get", rootUrl);
};

export const fetchSingleSpells = (index) => {
  return apiProcessor("get", rootUrl + "/" + index);
};

export const fetchOnlyParticularSpells = (index) => {
  return apiProcessor("get", onlyOneSpells + index);
};
