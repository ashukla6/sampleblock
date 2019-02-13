require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

var SDK = require('blocksdk');
var sdk = new SDK();

sdk.getContent(function (content) 
{
content += '.';
sdk.setContent(content);
});
