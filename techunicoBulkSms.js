const SMS_URL = 'http://bulksms.techunico.com/vb/apikey.php';
import axios from 'axios';

async function sendSingleSms(smsPayload){
    axios.post(SMS_URL, null, {params: {
        apikey : smsPayload.apikey,
        senderid : smsPayload.senderid,
        templateid : smsPayload.templateid,
        number : smsPayload.number,
        message : smsPayload.message,
    }}).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error =>{
        return error
    });
}

export {sendSingleSms} ;
