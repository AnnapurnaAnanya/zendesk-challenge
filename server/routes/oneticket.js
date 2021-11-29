const express = require("express");
const router = express.Router();
const request = require('request')

router.get('/:ticketid',(req,res)=>{
    const ticketdata = req.params.ticketid;
    console.log("ticketdata"+ticketdata);
    if (!ticketdata) 
    return res.err("Invalid ticket ID")
    const url=`https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets/${ticketdata}.json`
    const auth = 'Basic ' + Buffer.from(`${process.env.USER_NAME}:${process.env.PASSWORD}`, 'utf8').toString('base64')

    request({
        url,
        headers: {
            'Authorization': auth
        }}, (err, resp) => {
        if (err) 
        return res.send(err)
            return res.send(JSON.parse(resp.body))
    })
})
module.exports = router;