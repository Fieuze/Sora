exports.SystemOperatorOverRide = function () {

    var SystemOperators = ['championonyxe', 'blakjack', 'onyxegale'];

    Users.User.prototype.hasSysopAccess = function () {
        if (SystemOperators.indexOf(this.userid) > -1 && this.authenticated) {
        	return true;
        } else {
        	return false;
        }
    };
    
};
