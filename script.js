// script.js
document.addEventListener('DOMContentLoaded', function() {
    var appList = [{
            name: 'JMComic2',
            icon: '/img/jm.png',
            downloadLink: 'https://i-450.wwentua.com:446/07091100186151294bb/2024/06/14/d3bcd9dcf777799424f681752519f853.apk?st=CQM9dxlugW9XwTN3UEgNng&e=1720497470&b=Vk4OQ1QXUzlUbFdoBDcANlNZAWwDLFRlB3pdYFN6BWYIKlsw&fi=186151294&pid=115-231-220-36&up=2&mp=0&co=0',
            description: '使用后会进入贤者模式！'
        },
        {
           name: 'Miru',
            icon: '/img/miru.png',
           downloadLink: 'https://i-710.wwentua.com:446/07091100189788467bb/2024/07/09/31983ab8bc5015b16ccde8e08d36df1f.apk?st=fwP4tAyEMpp_aKa3a7CrSQ&e=1720497867&b=VkldNAl7AnICCF84B3kBPQd8XDECLQZhBiVaPA_c_c&fi=189788467&pid=115-231-220-36&up=2&mp=0&co=0',
           description:'免费观看漫画、番剧、小说'
        },
        {
        name:'MusicFree',
        icon:'/img/CG.png',
        downloadLink:'https://i-570.wwentua.com:446/07091100189788475bb/2024/07/09/36be2e1514a6be0c2be45e5da6a5c468.apk?st=7H3VwibiDPhH3S3_nstDeA&e=1720497956&b=BhlaL1ckA29Ybl9PUHJQMQExXl0CMwAoBmYMLwcwACwAM1oqAWo_c&fi=189788475&pid=115-231-220-36&up=2&mp=0&co=0',
        description:'免费音乐软件，插件链接https://short-link.me/IxZq'
        },
        {
        name:'雪豹速清',
        icon:'/img/xb.png',
        downloadLink:'https://i-940.wwentua.com:446/07091100189788459bb/2024/07/09/7ffd4896d595a6995b543e0053d37b26.apk?st=kFJaLpbNRgOAZGakxReo1A&e=1720498026&b=AboAmwCqVLkF4QPsCrMGglSeW_bFT6guIVloPMAYvVGYHe1xvVXtXMwMmAD0_c&fi=189788459&pid=115-231-220-36&up=2&mp=0&co=0',
        description:'清理手机内存，非常好用'
        },
        {
        name:'pixiv',
        icon:'/img/8X.png',
        downloadLink:'https://i-240.wwentua.com:446/07091100189788492bb/2024/07/09/c7d81bd753489b6416e84fd43417c1a5.apk?st=wU071ZAnT306r_S6-x3tmQ&e=1720498104&b=VXcJYFUtUj5Ud1deAWcHLQltWTQBMQYuCWgJKlE3A3FSaw_c_c&fi=189788492&pid=115-231-220-36&up=2&mp=0&co=0',
        description:'破解版，需配合魔法使用'
        },
        {
        name:'V2ray VPN',
        icon:'/img/vn.jpg',
        downloadLink:'https://i-240.wwentua.com:446/07091100189788482bb/2024/07/09/3e62ca9155f25564dd9c3c6e0424bc96.apk?st=VIdBCFfnRy0z0w-Zv7kLwQ&e=1720498161&b=VlJdbwFzBWFZdQN1AwwCMAV_bCWZRfgI2CHVfMwdwUTg_c&fi=189788482&pid=115-231-220-36&up=2&mp=0&co=0',
        description:'魔法🔮'
        },
        
        
        // ...其他应用
    ];

    // 按照名称排序
    appList.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    // 渲染应用列表
var appListNode = document.querySelector('.app-list');
    appList.forEach(function(app) {
        var appNode = document.createElement('div');
        appNode.className = 'app';

        var iconNode = document.createElement('img');
        iconNode.src = app.icon;
        iconNode.alt = app.name + ' Icon';
        iconNode.className = 'app-icon';
        appNode.appendChild(iconNode);

        var infoNode = document.createElement('div');
        infoNode.className = 'app-info';

        var nameNode = document.createElement('h2');
        nameNode.className = 'app-name';
        nameNode.textContent = app.name;
        infoNode.appendChild(nameNode);

        var descriptionNode = document.createElement('p');
        descriptionNode.className = 'app-description';
        descriptionNode.textContent = app.description;
        infoNode.appendChild(descriptionNode);

        var downloadNode = document.createElement('a');
        downloadNode.href = app.downloadLink;
        downloadNode.download = '';
        downloadNode.className = 'app-download';
        downloadNode.textContent = '下载';
        infoNode.appendChild(downloadNode);

        appNode.appendChild(infoNode);
        appListNode.appendChild(appNode);

        
    });

    // 添加搜索功能
    document.getElementById('searchBox').addEventListener('input', function(event) {
        var searchQuery = event.target.value.toLowerCase();
        var apps = document.querySelectorAll('.app');

        apps.forEach(function(app) {
            var appName = app.querySelector('.app-name').textContent.toLowerCase();
            if (appName.includes(searchQuery)) {
                app.style.display = 'flex';
            } else {
                app.style.display = 'none';
            }
        });
    });
});