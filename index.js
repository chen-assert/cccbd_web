i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                noun: {
                    customer: 'Customer',
                    employee: 'Employee',
                    english: 'English',
                    chinese: 'Chinese',
                    login: 'Login',
                    userlogin: 'User login',
                    employeelogin: 'employee login',
                    username: 'username',
                    password: 'password',
                    forget: 'Forget Password?',
                    create: 'Create new account'
                }
            }
        },
        ch: {
            translation: {
                noun: {
                    customer: '客户',
                    employee: '员工',
                    english: '英文',
                    chinese: '中文',
                    login: '登陆',
                    userlogin: '用户登录',
                    employeelogin: '员工登陆',
                    username: '用户名',
                    password: '密码',
                    forget: '忘记密码?',
                    create: '创建新账号'
                }
            }
        }
    }
}, function (err, t) {
    jqueryI18next.init(i18next, $);
    $('.translate').localize();

});

function setLanguage(lan) {
    i18next.changeLanguage(lan);
    $('.translate').localize();
}

$(document).ready(function () {
    $('.translate').localize();
});
// $('.btnSubmit').addEventListener("click", function (event) {
//     event.preventDefault()
// });
