import express from 'express';
import data from '../src/testdata';

const router=express.Router();

const contests=data.contests.reduce((obj,contest) => {
            obj[contest.id]=contest;
            return obj;
        },{});

router.get('/contests',(req,res) =>{
    res.send({
        contests:contests
    
});
});

router.get('/contests/:contestId',(req,resp) =>
{
    let contest=contests[req.params.contestId];
     contest.description='My edesfription is fdgfdkj odsffd,mn ytrcx kj.kerwtlcdsfcdsafds';
    resp.send(contest);
});
export default router;
