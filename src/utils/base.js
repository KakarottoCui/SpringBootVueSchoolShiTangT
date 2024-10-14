const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanshitangdingcan/",
            name: "xiaoyuanshitangdingcan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanshitangdingcan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园食堂订餐系统"
        } 
    }
}
export default base
