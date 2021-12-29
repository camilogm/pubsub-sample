const axios  = require('axios').default;
const { PubSub } = require('@google-cloud/pubsub');

/**
 * 
 * @returns {Promise<any[]>}
 */
async function getMessages(){
    const data = await axios.get('http://localhost:3000/messages');
    return data.data;

}

async function emitMessages(pubSub, messages){
    const topic = pubSub.topic('my-topic');
    
    messages.forEach((message)=>{
        const buffer = Buffer.from(JSON.stringify(message.message));
        topic.publishMessage({
            data:buffer
        });
    });
    
}


async function main(){

    const pubsub = new PubSub();
    const messages = await getMessages();
    await emitMessages(pubsub,messages); 
    console.log("events emmited")
 
}

main();