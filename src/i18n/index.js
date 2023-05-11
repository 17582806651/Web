import { createI18n } from 'vue-i18n'
import messages from './lang'

  // 通过选项创建 VueI18n 实例
export default createI18n({
    locale: 'zhCn', // 设置地区
    fallbackLocale: 'en', //设置备用语言
    legacy:false,
    messages, // 设置地区信息
  })