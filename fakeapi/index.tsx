function teste() {
    // function getStyles() {
    //     return 'oie'
    // }
    const getStyles = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
              "backgroundColor": "#000000",
              "backgroundImageUrl": "https://la-xgrow.sfo3.digitaloceanspaces.com/5772df9ecc46ffa3928bafcf8b70a735-MicrosoftTeams-image%20%282%29.png",
              "logoUrl": "https://la-xgrow.sfo3.digitaloceanspaces.com/180d5f0237148d777de10569e24bfae6-grayLogo.svg",
              "faviconUrl": "https://la-xgrow.sfo3.digitaloceanspaces.com/5d537df9692dba4e6d13769f3fb6da5d-favicon.ico",
              "bannerUrl": "https://la-xgrow.sfo3.digitaloceanspaces.com/5772df9ecc46ffa3928bafcf8b70a735-MicrosoftTeams-image%20%282%29.png",
              "description": "Meta descricao da plataforma",
              "keywords": "meta;keywords;",
              "_id": "60edd080e3f7402cf8ef4189",
              "platformId": "102a35f7-eeca-40ee-b35f-1505c901943f",
              "platformName": "Platform F",
              "primaryColor": "#7f7f7f",
              "secondaryColor": "#a7dd5f",
              "tertiaryColor": "#2e2d2d",
              "textColor": "#fff",
              "inputColor": "#333333",
              "backgroundType": "image",
              "backgroundGradientFirst": null,
              "backgroundGradientSecond": null,
              "backgroundGradientDegree": null,
              "borderRadius": 0,
              "title": "Titulo da Plataforma",
              "footer": "Agradecimentos plataforma Xgrow.",
              "supportNumber": "",
              "supportEmail": "",
              "createdAt": "2021-07-13T17:42:24.268Z",
              "updatedAt": "2021-07-23T06:31:25.544Z",
              "__v": 3
          });
        }, 1500);
      });
    const getContent = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
              teste: 'oi'
          });
        }, 5000);
      });
    return {
        getStyles,
        getContent
    }
}
const fakeApi = new teste()
export {fakeApi}