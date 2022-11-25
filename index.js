const SMS_URL = 'http://bulksms.techunico.com/vb/apikey.php';
import axios from 'axios';

async function sendSingleSms(smsPayload){
    axios.post(url, {smsPayload}).then(response => {
        return response;
    }).catch(error =>{
        return error
    });
}

module.export.sendSingleSms = sendSingleSms;
