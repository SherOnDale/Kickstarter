import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const factory = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x87D56a802fC3e0DE24AD40Ef067b6cE2C0968518'
);

export default factory;
