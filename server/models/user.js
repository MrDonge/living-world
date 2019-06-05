const User = require('../lib/mongo').User


module.exports = {

    // 用户注册
    create(user) {
        return User.create(user)
    },

    // 根据用户名获取用户信息
    getUserByAccount(account) {
        return User.findOne({ account }).exec()
    }
}
