const AdminJS = require('admin-bro')
const AdminJSSequelize = require('@admin-bro/sequelize')


const AdminJSExpress = require('@admin-bro/express')

require('dotenv').config();

if (!global.__basedir) {
    global.__basedir = __dirname;
}


const db = require('./models');

const express = require('express')
const app = express()

AdminJS.registerAdapter(AdminJSSequelize)


// }

// bcrypt.compare(password, user.password);

// const adminBro = new AdminBro({
//     databases: [db],
//     rootPath: '/admin',
// })
const contentNavigation = {
    name: 'content',
    icon: 'User',
}
const adminBroOptions = {
    // databases: [db],
    resources: [
        {
            resource: db.User,
            options: {
                navigation: contentNavigation
            },
        }
    ],
    rootPath: '/admin',
    branding: {
        companyName: 'Amazing c.o.',
        theme: {
            colors: {
                primary100: '#4268F6',
                primary80: "#6483F8",
                primary60: "#879FFA",
                primary40: "#A9BAFA",
                primary20: "#CBD5FD",
                accent: "#38CAF1",
                love: "#e6282b",
                grey100: "#1C1C38",
                grey80: "#454655",
                grey60: "#898A9A",
                grey40: "#C0C0CA",
                grey20: "#F6F7FB",
                white: "#fff",
                errorDark: "#DE405D",
                error: "#FF4567",
                errorLight: "#FFA5B5",
                successDark: "#32A887",
                success: "#70C9B0",
                successLight: "#DBF0F1",
                infoDark: "#4268F6",
                info: "#879FFA",
                infoLight: "#CBD5FD",
                filterBg: "#343F87",
                hoverBg: "#535B8E",
                inputBorder: "#898A9A",
                border: "#DDE1E5,",
                separator: "#C0C0CA",
                highlight: "#F6F7FB",
                filterInputBorder: "rgba(255,255,255,0.15)",
                filterDisabled: "rgba(83,91,142,0.05)",
                bg: "#F6F7FB"
            }
        },
        // theme: {
        //     colors: {
        //         bg: '#20273E',
        //         defaultText: '#FFFFFF',
        //         lightText: '#A9AABC',
        //         border: '#2E324A',
        //         borderOnDark: '#2E324A',
        //         white: '#192035',
        //         darkBck: '#20273E',
        //         lightBck: '#485899',
        //         superLightBack: '#303B62',
        //         inputBck: '#192035',
        //         lightSuccess: '#008340',
        //         lightError: '#660040',
        //     }
        // }
    },
}
const adminBro = new AdminJS(adminBroOptions)

const router = AdminJSExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)
// sequelize.sync().then(s => {
//     app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
// })
// .catch(err => {
//     console.log(err);
// });
app.listen(process.env.APP_PORT, () => console.log('AdminBro is under localhost:8080/admin'))