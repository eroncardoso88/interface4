function teste() {
    // function getStyles() {
    //     return 'oie'
    // }
    const getStyles = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
              teste: 'oi'
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