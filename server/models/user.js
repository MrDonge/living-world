const User = require('../lib/mongo').User


module.exports = {

    // 用户注册
    create(user) {
        return User.create(user)
    },

    // 根据用户名获取用户信息
    getUserByAccount(account) {
        return User.findOne({ account }).exec()
    },

    // 根据用户 id 查询 点赞的用户
    getLikesUserById(userId) {
        return User.findOne({ _id: userId }).exec()
    }
}
