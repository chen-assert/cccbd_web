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
                    create: 'Create new account',
                    send_email:'Send Email',
                    gender:'Gender',
                    male:'Male',
                    female:'Female',
                    about_us:'Help',
                    contact_us:'Contact Us',
                    language:'Language',
                    luggage_lost:'Luggage Lost',
                    select_insurance:'Buy Insurance',
                    access_policy:'Access Your Policy',
                    logout:'Log out',
                    dashboard:"Dashboard",
                    lostluggage:'Lost Luggage',
                    procedure:'Process Procedure',
                    policies:'Policies',
                    date:'Date: ',
                    name:'Full Name: ',
                    lossdate:'Loss Date: ',
                    flight:'Flight Number: ',
                    baggageno:'Baggage Check Number: ',
                    receipt:'Receipt(If You Have): ',
					photos:'Photos ( If You Have )',
                    description:'Description: ',
                    submit:'Submit',
                    profile:'User Profile',
                    setting:'Settings',
                    Logout:'Logout',
                    processed_claim:'Processed Claims',
                    unprocessed_claim:'Unprocessed Claims',
                    claim_of_lostluggage:'Claims of Lost Luggage',
                    small_policies:'More than professional',
                    Summary_of_your_Claims:'Summary of the Claims',
                    fair:' Please be fair and professional',
                    detail:'Details'
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
                    create: '创建新账号',
                    send_email:'发送邮件',
                    gender:'性别',
                    male:'男性',
                    female:'女性',
                    about_us:'帮助',
                    contact_us:'联系我们',
                    language:'语言',
                    luggage_lost:'行李丢失',
                    select_insurance:'购买保险',
                    access_policy:'已购保险',
                    logout:'退出',
                    dashboard:'指示板',
                    lostluggage:'行李丢失',
                    procedure:'处理进程',
                    policies:'我的保险',
                    date:'日期: ',
                    name:'姓名: ',
                    lossdate:'丢失日期: ',
                    flight:'航班号: ',
                    baggageno:'托运行李单号: ',
                    receipt:'发票: ',
					photos:'图片',
                    description:'细节描述: ',
                    submit:'提交',
                    profile:' 个人主页',
                    setting:' 设置',
                    Logout:' 退出',
                    processed_claim:'已处理',
                    unprocessed_claim:'未处理',
                    claim_of_lostluggage:'申请数量',
                    small_policies:'不止是专业',
                    Summary_of_your_Claims:'各项数量',
                    fair:'耐心 专业',
                    detail:'详情'
                }
            }
        }
    }
}, function (err, t) {
    jqueryI18next.init(i18next, $);
    $('.translate').localize();

});
function changeLanguage(selectObject) {
    setLanguage(selectObject.value);
}
function setLanguage(lan) {
    localStorage.setItem('language', lan);
    i18next.changeLanguage(lan);
    $('.translate').localize();
}

$(document).ready(function () {
    lan=localStorage.getItem('language');
    $('#lan_selecter').val(lan).change();
    // i18next.changeLanguage(lan);
    // $('.translate').localize();
});