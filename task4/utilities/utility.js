import { ClientFunction } from 'testcafe';
class utility{

    getLocation = ClientFunction(() => document.location.href);


}
export default new utility();

