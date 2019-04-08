/**
 * Mocking client-server processing
 */
import _data from './data.json';
const TIMEOUT = 1;
export default {
    getOfflineWeather: (cb, timeout) => setTimeout(() => cb(_data), timeout || TIMEOUT)
}