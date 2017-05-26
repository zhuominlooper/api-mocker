module.exports = mongoose => {
    const { ObjectId } = mongoose.Schema.Types
    const ApiSchema = mongoose.Schema({
        group: {
            type: ObjectId,
            ref: 'group'
        },
        name: {
            type: String,
            unique: false
        },
        desc: String,
        createTime: {
            type: String,
            default: Date.now
        },
        modifiedTime: {
            type: String,
            default: Date.now
        },
        prodUrl: String,
        dsl: {
            type: Object,
            required: false
        },
        options: {
            method: String,
            proxy: {
                type: Object,
                default: {
                    mode: 0
                }
            },
            headers: {
                example: {},
                params: []
            },
            params: {},
            examples: {
                type: Object,
                default: {
                    query: null,
                    body: null,
                    path: null
                }
            },
            response: {},
            responseIndex: {
                type: Number,
                default: 0
            },
            delay: Number
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    })

    return mongoose.model('Api', ApiSchema)
}
