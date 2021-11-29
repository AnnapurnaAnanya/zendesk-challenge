const express = require("express");
const router = express.Router();
const request = require('request')

router.get('/',(req,res)=>{
    console.log("entered here")
    const url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets.json`
    const auth = 'Basic ' + Buffer.from(`${process.env.USER_NAME}:${process.env.PASSWORD}`, 'utf8').toString('base64')
    
    request({  
        url,
        headers: {
            'Authorization': auth
        }}, (error, response) => {
            if (error) 
            return res.send(error)

            return res.send(JSON.parse(response.body))
         })
})

module.exports = router;