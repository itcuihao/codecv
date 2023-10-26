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
    font: 'Arial',
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
    primaryBackground: '#fff',
    img: 'https://s1.imagehub.cc/images/2023/08/10/5ef200ce07ec45bcb.png'
  },
  {
    type: '23',
    id: 2,
    name: 'banner模块 2',
    content: '这是banner内容',
    primaryColor: '#f00',
    primaryBackground: '#0f0',
    img: 'banner2.jpg',
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
