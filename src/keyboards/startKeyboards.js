const projectConsts = require('../utils/projectConsts');

function getStartActions() 
{
    return {
        inline_keyboard: [
            [
                { 
                    text: 'Launch 🎮', 
                    web_app:
                    {
                        url: projectConsts.UNITY_BUILD_HOST
                    }
                }
            ],
            [
                {
                    text: 'Documentation 📖',
                    url: projectConsts.SDK_DOCUMENTATION
                }
            ],
            [
                {
                    text: 'Uniton Connect Library 📈',
                    url: projectConsts.UNITON_CONNECT_REPO
                }
            ],
            [
                {
                    text: 'Unigram Payment Library 📈',
                    url: projectConsts.UNIGRAM_PAYMENT_REPO
                }
            ],
            [
                {
                    text: 'Uniton Connect Template 🤖',
                    url: projectConsts.UNITON_CONNECT_DEMO
                }
            ],
            [
                {
                    text: 'Unigram Payment Template 🤖',
                    url: projectConsts.UNIGRAM_PAYMENT_DEMO
                }
            ],
        ],
    };
}

module.exports =
{
    getStartActions,
};