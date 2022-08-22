import axios from 'axios';
import {AcitivitiesResponse, DealsResponse, ProfileListResponse} from './types';

const BASE_URL = 'https://api.pipedrive.com/v1';
const LIMIT = 20;
const API_TOKEN = '9e25592ca3c906081540a892dba0f6741ea56e4b';

export const fetchProfileList = async ({pageParam = 0}) => {
  let apiUrl = `${BASE_URL}/persons?start=${pageParam}&limit=20`;

  return axios
    .get<ProfileListResponse>(apiUrl, {
      params: {
        api_token: API_TOKEN,
      },
    })
    .then(response => response.data);
};

export const fetchDeals = async (id: number) => {
  let apiUrl = `${BASE_URL}/persons/${id}/deals`;

  return axios
    .get<DealsResponse>(apiUrl, {
      params: {
        api_token: API_TOKEN,
      },
    })
    .then(response => response.data);
};

export const fetchActivities = async (id: number) => {
  let apiUrl = `${BASE_URL}/persons/${id}/activities/?limit=20`;

  return axios
    .get<AcitivitiesResponse>(apiUrl, {
      params: {
        api_token: API_TOKEN,
      },
    })
    .then(response => response.data);
};
