/**
 * Created by Necfol on 2017/1/13.
 */
global.HOST = 'https://cnodejs.org';

export default {
    getListData: global.HOST + '/api/v1/topics',
    getInfoData: global.HOST + '/api/v1/topic/',
    like: global.HOST + '/reply/',
}