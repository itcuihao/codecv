import { ref } from 'vue'

const initialCVState: Map<string, string[]> = new Map()

// 创作模板的默认配置
initialCVState.set('create', ['#333', '#333', '', '25'])

// type Module = {
//   default: SubModule
// }

type SubModule = {
  type: string
  id: number
  name: string
  font?: string
  lineHeight?: number
  content: string
  primaryColor: string
  primaryBackground: string
  img: string
  hot?: number | string
}
export type TemplateType = SubModule

export const templates = ref<SubModule[]>([])

export const modulesData: SubModule[] = [
  {
    type: '5graduation_reexam',
    id: 1,
    name: '研究生复试',
    font: 'Noto Serif SC',
    lineHeight: 20,
    content: `::: headStart
::: start
# 番茄炒鸡蛋
**性别**：男 ｜ **年龄**：23 ｜ **电话**：11011011011 ｜ **邮箱**：resume@163.com
:::
![个人头像](https://codeleilei.gitee.io/blog/avatar.jpg)
::: end
::: headEnd
## icon:practice 报考信息
::: start
**报考院校：**xxx大学
:::
**报考专业：**金融学（020204）
:::
**报考属性：**专硕学位研究生
::: end
| 初试科目 | 英语（一） | 政治 | 专业课1 | 专业课2 | 总分 |
| 初试成绩 | 90 | 80 | 130 | 130 | 430 |

## icon:school 教育经历
::: start
### xxx大学
:::
2019年9月 - 2023年7月
::: end
- GPA: 3.9 / 4.0
- 国家励志奖学金（2019 - 2020、2020 - 2021、2021 - 2022、2022 - 2023）
- xxxx学院优秀学生干部（2019 - 2023）
## icon:head 科研经历
::: start
### 基于xxx的研究
:::
xxxx年xx月 - xxxx年xx月
::: end
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx

::: start
### 基于xxx的研究
:::
xxxx年xx月 - xxxx年xx月
::: end
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx

## icon:application 项目经历
::: start
### xxxx平台
:::
xxxx年xx月 - xxxx年xx月
::: end
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
## icon:technology 个人技能
- xxxxxxxxxxxxxxxxxxxx
`,
    primaryColor: '#333',
    primaryBackground: '#2186D2',
    img: 'https://s1.imagehub.cc/images/2023/08/10/5ef200ce07ec45bcb.png'
  },
  {
    type: '19social',
    id: 2,
    name: '社招/简约',
    content: `## CodeCV - 前端开发工程师
::: start
icon:email **邮箱**：coderleilei@163.com
icon:phone **电话号码**：15507942706
icon:work **工作经验**：3 年工作经验
:::
icon:link **博客**：https://coderlei.netlify.app
icon:github **GitHub**：https://github.com/acmenlei
icon:gitee **Gitee**：https://gitee.com/codeleilei
::: end

## 教育背景
::: start
华东师范大学
:::
计算机科学与技术 / GPA 4.0
:::
**2019.09 - 2023.07**
::: end
**主修课程**：编译原理、C++、操作系统原理、计算机网络技术、数据结构与算法、机器学习等

## 专业技能
1. 精通 Vue.js、React.js 框架源码，对此类框架有自己的理解，能根据实际业务场景进行技术选型
2. 精通 Nuxt.js、Next.js 以及社区相关的 SSR 渲染框架原理以及使用，对其实现也有自己的理解
3. 精通计算机网络、计算机组成原理、操作系统，对 HTTPS、HTTP、TCP、UDP 有过深入研究
4. 精通微前端框架，如 qiankun、EMP、Single-spa，并能够根据实际业务场景进行项目架构设计
5. 精通前端性能优化、浏览器底层原理、ChromeV8引擎，对前端性能调优有自己的理解

## 工作经历
::: start
icon:tencent **腾讯微信事业群**
:::
**前端开发工程师（2021.07 - 2023.05）**
::: end
负责xx项目的xx模块开发，主导xxx需求的推进，优化首屏加载速度xs，从xs优化至1s，压缩整体生产包体积66%，编写开发模式下清空不属于自己的console语句，提升全组同事的开发效率，得到同事的一致认可

::: start
icon:alibaba **阿里巴巴飞猪**
:::
**前端开发工程师（2018.07 - 2021.07）**
::: end
负责xx项目的xx模块开发，主导xxx需求的推进，优化首屏加载速度xs，从xs优化至1s，压缩整体生产包体积66%，编写开发模式下清空不属于自己的console语句，提升全组同事的开发效率，得到同事的一致认可

## 开源项目
::: start
icon:github  **codecv**
:::
https://github.com/acmenlei/codecv
:::
**2022.09 - 至今**
::: end
这是一款使用 \`markdown\` 制作简历的工具，它可以将你编写的 \`markdown\` 简历转换为 \`PDF\`，支持多种模板，可扩展性极高，GitHub/Gitee icon:star 420+

::: start
icon:github  **markdown-plus**
:::
https://github.com/acmenlei/markdown-plus
:::
**2022.09 - 至今**
::: end
这是一款 \`md\` 转 \`html\`的插件，它支持常见的 \`md\` 语法，同时弥补了 \`md\` 本身的一些缺陷，支持多列布局，图标等语法

## 项目经历
::: start
**codecv**
:::
**全栈开发（2022.09 - 至今）**
::: end

**技术栈**：vue xxx
**项目简介**：这是一款使用 markdown 制作简历的工具，它可以将你编写的 markdown 简历转换为 PDF，支持多种模板，可扩展性极高，GitHub/Gitee icon:star 420+
**主要内容**：xxx
**项目难点**：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
**项目亮点**：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
## 自我评价
自行发挥吧。。。
## 致谢
感谢您阅读我的简历，期待与您一起共事。`,
    primaryColor: '#333',
    primaryBackground: '#2186D2',
    img: 'https://s1.imagehub.cc/images/2023/08/10/19.png',
    hot: 100
  }
]

// const moduleEntries = Object.entries(import.meta.glob('./modules/*/index.ts', { eager: true }))

// for (const [path, curModule] of moduleEntries) {
//   const content = (curModule as Module).default
//   content.id = Math.ceil(Math.random() * 1000000000)
//   content.type = path.split('/')[2]
//   templates.value.push(content)
//   initialCVState.set(content.type, [
//     content.primaryColor,
//     content.primaryBackground,
//     content.font || '',
//     String(content.lineHeight || 25)
//   ])
// }

modulesData.forEach(content => {
  // const content = (data as Module).default
  console.log(content)
  content.id = Math.ceil(Math.random() * 1000000000)
  templates.value.push(content)
  initialCVState.set(content.type, [
    content.primaryColor,
    content.primaryBackground,
    content.font || '',
    String(content.lineHeight || 25)
  ])
})

const match = (module: SubModule) => +(module.type.match(/^\d+/) as RegExpMatchArray)[0]
templates.value.sort((a, b) => match(b) - match(a))

export function getPrimaryBGColor(type: string) {
  return (initialCVState.get(type) as string[])[1]
}

export function getPrimaryColor(type: string) {
  return (initialCVState.get(type) as string[])[0]
}

export function getFontFamily(type: string) {
  return (initialCVState.get(type) as string[])[2]
}

export function getLineHeight(type: string) {
  return (initialCVState.get(type) as string[])[3]
}
