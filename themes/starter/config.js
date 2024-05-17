/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'NankoYo静态生成器是一个创新性的网页项目，旨在为用户提供一种简单而强大的方式来创建静态网站。通过结合自然语言处理和图形学技术，NankoYo能够从用户提供的简单文本描述中生成复杂的网页布局和设计。', // 英雄区文字
  STARTER_HERO_TITLE_2: '这个项目的目标是让网站创建变得更加容易和直观，使任何人都能够在没有编程知识的情况下设计出令人印象深刻的网站。NankoYo静态生成器将用户的创意转化为现实，为他们带来了全新的网页开发体验。', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:'', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: 'https://img.tucang.cc/api/image/show/2acdf8c5a8b46c8381175c8abf0a11a0', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/signin',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/signup',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '特性', // 特性
  STARTER_FEATURE_TEXT_1: 'NankoYo静态生成器的主要特性', // 特性
  STARTER_FEATURE_TEXT_2:
    '利用自然语言处理和图形学技术，轻松创建个性化静态网站。', // 特性

  STARTER_FEATURE_1_TITLE_1: '自然语言处理技术', // 特性1
  STARTER_FEATURE_1_TEXT_1: '通过自然语言理解，将用户描述转化为网页设计。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 特性1

  STARTER_FEATURE_2_TITLE_1: '图形学技术支持', // 特性2
  STARTER_FEATURE_2_TEXT_1: '利用先进的图形学技术创建精美的网页布局和设计。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://docs.tangly1024.com/article/notion-next-themes', // 特性2

  STARTER_FEATURE_3_TITLE_1: '简单易用的界面', // 特性3
  STARTER_FEATURE_3_TEXT_1: '提供直观简单的界面，使用户轻松创建网站，无需编程知识。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://docs.tangly1024.com/article/next-js', // 特性3

  STARTER_FEATURE_4_TITLE_1: '完全自定义的选项', // 特性4
  STARTER_FEATURE_4_TEXT_1: '允许用户根据需求定制和调整生成的网页，实现个性化设计。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://docs.tangly1024.com/about', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一套轻量实用的建站解决方案',
  STARTER_ABOUT_TEXT:
    'NanKoYo静态生成器是一款简单而强大的网页生成器，旨在让任何人都能轻松创建出令人印象深刻的网站，无需编程知识。<br /> <br />我们结合了自然语言处理和图形学技术，为用户提供了直观、灵活的网页设计体验。无论您是个人用户还是企业客户，NanKoYo都能满足您的需求，让网页设计变得简单、直观和创意。 ',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://docs.tangly1024.com/about',
  STARTER_ABOUT_IMAGE_1: 'https://img.tucang.cc/api/image/show/a8a0e597f2acd9e98a0f6d24077bfc45',
  STARTER_ABOUT_IMAGE_2: 'https://img.tucang.cc/api/image/show/74e88b835701e67910ba71cd0c85919d',
  STARTER_ABOUT_TIPS_1: '我们的产品目前有,
  STARTER_ABOUT_TIPS_2: '100,000个',
  STARTER_ABOUT_TIPS_3: '终端客户正在使用',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。',

  STARTER_PRICING_1_TITLE: '基础套餐',
  STARTER_PRICING_1_PRICE: '99',
  STARTER_PRICING_1_PRICE_CURRENCY: '¥',
  STARTER_PRICING_1_PRICE_PERIOD: '每年',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '适用于个人用户或小型团队,自然语言处理技术,基本图形学技术支持,简单易用的界面,1个自定义域名,基本技术支持', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://qm.qq.com/q/hawob9Eyw8',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '专业套餐',
  STARTER_PRICING_2_PRICE: '199',
  STARTER_PRICING_2_PRICE_CURRENCY: '¥',
  STARTER_PRICING_2_PRICE_PERIOD: '每年',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '适用于中小型企业或创业者,自然语言处理技术,全面的图形学技术支持,简单易用的界面,3个自定义域名,定制化选项,优先技术支持', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://qm.qq.com/q/hawob9Eyw8',

  STARTER_PRICING_3_TITLE: '企业套餐',
  STARTER_PRICING_3_PRICE: '499',
  STARTER_PRICING_3_PRICE_CURRENCY: '¥',
  STARTER_PRICING_3_PRICE_PERIOD: '每年',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '适用于大型企业或需要高级定制的用户,自然语言处理技术,全面的图形学技术支持,简单易用的界面,无限自定义域名,定制化选项,24/7优先技术支持,SLA服务水平协议', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://qm.qq.com/q/hawob9Eyw8',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '倾听您的声音，打造更好的明天',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'NanoKoYo静态生成器确实是个神器，简单易用，帮我节省了大量时间！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://img.tucang.cc/api/image/show/9b7261d6f9eecd6f45d4105b4c41f0d2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Alice Wang',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '产品经理',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'NanoKoYo静态生成器是我使用过的最简单、最有效的工具之一，极大地提升了我的工作效率！！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://img.tucang.cc/api/image/show/74d53343a8e4e24703d49e1dda474ef2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Michael Smith',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '网站管理员',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'NanoKoYo静态生成器的稳定性和可靠性让我无需担心网站崩溃或数据丢失，十分放心！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://img.tucang.cc/api/image/show/6a631272e792ca20a823e4c0e065e0ef',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Emily Johnson',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '网站开发者',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'NanoKoYo静态生成器的团队服务态度非常好，对于我的疑问和需求都能及时回复和解决，让我感到非常满意和放心！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://img.tucang.cc/api/image/show/aa212728ef5a06574cf2f1504572b37d',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'David Brown',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '系统管理员',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'NanoKoYo静态生成器的用户反馈展示功能帮助我更好地了解用户需求，为产品改进提供了宝贵意见！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://img.tucang.cc/api/image/show/de4c2ec19bdfb681a9ff4fc8b269b54c',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Sarah Wilson',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '市场分析师',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '我对NanoKoYo静态生成器的用户反馈展示功能赞不绝口，它让我能够更直观地了解用户的需求和意见，为产品改进提供了重要参考！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://img.tucang.cc/api/image/show/4b1b80c0a248b5e14ead547eeb35a1d0',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'John Lee',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '项目经理',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'NanKoYo静态生成器是什么？',
  STARTER_FAQ_1_ANSWER:
    'NanKoYo静态生成器是一个用于创建静态网站的工具，它可以将网站内容转换为纯HTML、CSS和JavaScript文件，以提高网站加载速度和安全性。',

  STARTER_FAQ_2_QUESTION: 'NanKoYo静态生成器与动态网站有何不同？',
  STARTER_FAQ_2_ANSWER:
    '与动态网站相比，NanKoYo静态生成器生成的网站不需要在每次请求时动态生成内容，而是在构建时就生成所有页面。这样可以减少服务器负载和提高网站性能。',

  STARTER_FAQ_3_QUESTION: 'NanKoYo静态生成器适用于哪些类型的网站？',
  STARTER_FAQ_3_ANSWER:
    'NanKoYo静态生成器适用于许多类型的网站，特别是对于内容不经常更新或不需要动态交互的网站，例如博客、文档站点和企业官方网站等。',

  STARTER_FAQ_4_QUESTION: 'NanKoYo静态生成器的优势有哪些？',
  STARTER_FAQ_4_ANSWER:
    'NanKoYo静态生成器具有诸多优势，包括更快的页面加载速度、更低的服务器成本、更好的安全性和更简单的部署过程。此外，它还能够更好地应对高流量和DDoS攻击等挑战。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    'NanKoYo开发者团队是一支充满激情和创造力的团队，致力于开发创新的静态网站生成器。他们专注于提供简单易用、高效可靠的工具，帮助用户快速构建高性能的静态网站。',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于NanKoYo的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，福建',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@tangly1024.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://docs.tangly1024.com/about' },
        {
          TITLE: '帮助支持',
          URL: 'https://docs.tangly1024.com/article/how-to-question'
        },
        {
          TITLE: '合作申请',
          URL: 'https://docs.tangly1024.com/article/my-service'
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '部署指南',
          URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next'
        },
        {
          TITLE: '升级指南',
          URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: 'Notion写作',
      LINK_GROUP: [
        {
          TITLE: 'Notion开始写作',
          URL: 'https://docs.tangly1024.com/article/start-to-write'
        },
        {
          TITLE: '快捷键提升效率',
          URL: 'https://docs.tangly1024.com/article/notion-short-key'
        },
        {
          TITLE: '中国大陆使用Notion',
          URL: 'https://docs.tangly1024.com/article/notion-faster'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
