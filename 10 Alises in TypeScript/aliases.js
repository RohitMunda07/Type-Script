var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createUser(user) {
    // return {
    //     name: user.name,
    //     email: user.email,
    //     isActive: user.isActive
    // }
    return __assign({}, user); // here we are returning a new object 
}
var user = createUser({ name: "Rohit", email: "email@gmail.com", isActive: true });
console.log(user);



