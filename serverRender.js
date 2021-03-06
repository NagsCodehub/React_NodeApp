import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';


const getApiUrl = contestId =>
{
 if(contestId)
 {
     return `http://localhost:8080/api/contests/${contestId}`;
 }
  return `http://localhost:8080/api/contests`;
};

const getInitialData=(contestId,apiData) =>{
  if(contestId)
  {
      return { currentContestId : apiData.id,contests :{  [apiData.id] : apiData  } };
  }

  return {
      contests: apiData.contests
  };

};

const serverRender = (contestId) =>
axios.get(getApiUrl(contestId)) 
     .then(resp =>{  
         const initialData=getInitialData(contestId,resp.data);     
        return{
            initialMarkup:ReactDOMServer.renderToString(<App initialData={ initialData } />),
            initialData
        };       
        
     });
    //.catch(console.error);
     
export default serverRender;