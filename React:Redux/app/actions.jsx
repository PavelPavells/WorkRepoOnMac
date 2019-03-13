var addPhone = function(phone) {
    return {
        type: 'ADD_TODO',
        phone
    }
};
var deletePhone = function(phone) {
    return {
        type: 'DELETE_PHONE',
        phone
    }
};

module.exports = {addPhone, deletePhone};