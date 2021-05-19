const db = require('../../../config/db')

const mutations = {
    async newCollaborator(_, { data }, ctx) {
        try {
            ctx && ctx.userValidate()

            data.user_id = ctx.user.id
            const [id] = await db('collaborators')
                .insert(data)
            return db('collaborators')
                .where({ id })
                .first()
        } catch (error) {
            throw new Error(error.sqlMessage)
        }
    }
}

module.exports = mutations