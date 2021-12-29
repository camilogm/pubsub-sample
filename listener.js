const { PubSub } = require('@google-cloud/pubsub');

async function main(){

    const pubsub = new PubSub();
    const subscription = pubsub.subscription('my-sub');

    console.log('Waiting for events');
    subscription.on('message', (event)=>{
        console.log("listen event");
        const  data = JSON.parse(event.data.toString());
        console.log(data)
    });

}

main();