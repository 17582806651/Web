import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createI18n } from 'vue-i18n'

const messages = {
    zhCn: {
        message: {
          hello: '你好,世界',
          success:'已切换成中文',
          text:'第一部分，测试理论（测试基础+需求分析+测试模型+测试计划+测试策略+测试案例等等）第二部分，Linux（ Linux基础+Linux练习题）第三部分，MySQL（基础知识+查询练习+万年学生表经典面试题汇总+数据库企业真题）第四部分，Web测试第五部分，API测试第六部分，App测试第七部分，管理工具第八部分，Python基础（Python基础+编程题+集合+函数+Python特性等等）第九部分，Selenium相关第十部分，性能测试第十一部分，LordRunner相关第十二部分，计算机网络第十三部分，组成原理第十四部分，数据结构与算法第十五部分，逻辑题第十六部分，人力资源'
        },
        button:{
            add:"添加"
        }
      },
    en: {
      message: {
        hello: 'hello world',
        success:'To switch to English',
        text:'The first part, test theory (test basis + demand analysis + test model + test plan + test strategy + test case, etc.) The second part, Linux (Linux foundation +Linux exercises) the third part, MySQL (basic knowledge + query exercises + ten thousand years student table classic interview questions summary + database enterprise real questions) the fourth part, Web Testing Part 5 API Testing Part 6 App Testing Part 7 Administrative Tools Part 8 Python Basics (Python Basics + programming problems + Collections + Functions +Python features, etc.) Part 9 Selenium Related Part 10 Performance Testing Part 11 LordRunner related Part 12, Computer networks Part 13, Principles of Composition part 14, Data Structures and algorithms Part 15, logic problem part 16, Human Resources'
      },
      button:{
            add:"add"
        }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界',
        success:'せーこー'
      },
      button:{
            add:"します "
        }
    }
  }
  
  // 通过选项创建 VueI18n 实例
  const i18n = createI18n({
    locale: 'zhCn', // 设置地区
    fallbackLocale: 'en', //设置备用语言
    legacy:false,
    messages, // 设置地区信息
  })

console.log(i18n);
createApp(App).use(ElementPlus).use(i18n).use(router).mount('#app')
