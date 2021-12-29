const { PubSub } = require('@google-cloud/pubsub');


async function main(){

    const pubSub = new PubSub();
    const [ topic ] = await pubSub.createTopic('my-topic');
    await topic.createSubscription('my-sub');
    console.log("Configuration created");
    process.exit(0);
}


main();