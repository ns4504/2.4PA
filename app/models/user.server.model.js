const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    username: {
        type: String,
        trim: true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now
    },
    website: {
        type: String,
        get: function(url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0    &&          url.indexOF('https://') !== 0) {
                    url = 'http://' + url;
                }

            return url;
            }
        }
    },
});

UserSchema.set('toJSON', {getters: true});
mongoose.model('User', UserSchema);