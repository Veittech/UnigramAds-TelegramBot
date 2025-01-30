const BOT_USERNAME = 'UnigramAds_bot';
const UNITY_BUILD_HOST = 'https://veittech.github.io/UnigramAds/';
const SDK_DOCUMENTATION = 'https://github.com/Veittech/UnigramAds/blob/master/README.md';

const UNIGRAM_PAYMENT_REPO = 'https://github.com/MrVeit/Veittech-UnigramPayment/blob/master/README.md';
const UNITON_CONNECT_REPO = 'https://github.com/MrVeit/Veittech-UnitonConnect/blob/main/README.MD';
const UNITON_CONNECT_DEMO = 'https://t.me/UnitonConnect_bot/dAppStart';
const UNIGRAM_PAYMENT_DEMO = 'https://t.me/UnigramPayment_bot/launch';

function getBotUrl()
{
    return `https://t.me/${encodeURIComponent(BOT_USERNAME)}`;
}

module.exports =
{
    BOT_USERNAME,
    UNITY_BUILD_HOST,
    SDK_DOCUMENTATION,

    UNITON_CONNECT_REPO,
    UNITON_CONNECT_DEMO,
    UNIGRAM_PAYMENT_REPO,
    UNIGRAM_PAYMENT_DEMO,

    getBotUrl
};