"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

export interface IContributor {
  login?: string;
  avatar_url?: string;
  html_url?: string;
  id?: string;
}

const githubAPI = axios.create({
  baseURL: `https://api.github.com/repos/chainsafe/forest`,
  timeout: 3000,
});

const isTimeToReFetch = (lastFetch: number): boolean => {
  const timeNow = Date.now();
  const minutesToAllowReFetch = 1;
  return lastFetch + minutesToAllowReFetch * 60 * 1000 < timeNow;
};

const getContributors = async (): Promise<IContributor[]> => {
  try {
    const response = await githubAPI.get('/contributors?per_page=100');
    const contributorList = response.data;
    console.log(contributorList);
    const lastFetch = Date.now();

    const storedData = {
      lastFetchTimeStamp: lastFetch,
      contributors: contributorList,
    };

    localStorage.setItem('Forest_Contributors', JSON.stringify(storedData));
    return contributorList;
  } catch {
    return [];
  }
};

export const useContributors = () => {
  const [contributors, setContributors] = useState<IContributor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const storedContributorData = localStorage.getItem(
        'Forest_Contributors'
      );

      if (storedContributorData !== null) {
        const cached = JSON.parse(storedContributorData);

        if (isTimeToReFetch(cached.lastFetchTimeStamp)) {
          const contributors = await getContributors();
          setContributors(contributors);
        } else {
          setContributors(cached.contributors);
        }
      } else {
        const contributors = await getContributors();
        setContributors(contributors);
      }
      setLoading(false);
    })();
  }, []);

  return { contributors, loading };
};
