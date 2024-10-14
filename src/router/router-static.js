import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import cart from '@/views/modules/cart/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import meishi from '@/views/modules/meishi/list'
    import meishiCollection from '@/views/modules/meishiCollection/list'
    import meishiCommentback from '@/views/modules/meishiCommentback/list'
    import meishiOrder from '@/views/modules/meishiOrder/list'
    import news from '@/views/modules/news/list'
    import shangjia from '@/views/modules/shangjia/list'
    import shitang from '@/views/modules/shitang/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryMeishi from '@/views/modules/dictionaryMeishi/list'
    import dictionaryMeishiCollection from '@/views/modules/dictionaryMeishiCollection/list'
    import dictionaryMeishiOrder from '@/views/modules/dictionaryMeishiOrder/list'
    import dictionaryMeishiOrderPayment from '@/views/modules/dictionaryMeishiOrderPayment/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangjia from '@/views/modules/dictionaryShangjia/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShitang from '@/views/modules/dictionaryShitang/list'
    import dictionaryStatus from '@/views/modules/dictionaryStatus/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryMeishi',
        name: '美食类型',
        component: dictionaryMeishi
    }
    ,{
        path: '/dictionaryMeishiCollection',
        name: '收藏表类型',
        component: dictionaryMeishiCollection
    }
    ,{
        path: '/dictionaryMeishiOrder',
        name: '订单类型',
        component: dictionaryMeishiOrder
    }
    ,{
        path: '/dictionaryMeishiOrderPayment',
        name: '订单支付类型',
        component: dictionaryMeishiOrderPayment
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangjia',
        name: '商家类型',
        component: dictionaryShangjia
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShitang',
        name: '食堂类型',
        component: dictionaryShitang
    }
    ,{
        path: '/dictionaryStatus',
        name: '账号状态',
        component: dictionaryStatus
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/meishi',
        name: '美食',
        component: meishi
      }
    ,{
        path: '/meishiCollection',
        name: '美食收藏',
        component: meishiCollection
      }
    ,{
        path: '/meishiCommentback',
        name: '美食评价',
        component: meishiCommentback
      }
    ,{
        path: '/meishiOrder',
        name: '美食订单',
        component: meishiOrder
      }
    ,{
        path: '/news',
        name: '新闻公告',
        component: news
      }
    ,{
        path: '/shangjia',
        name: '商家',
        component: shangjia
      }
    ,{
        path: '/shitang',
        name: '食堂',
        component: shitang
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
