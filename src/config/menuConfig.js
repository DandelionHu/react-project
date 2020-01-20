const menuList=[
  {
    title:'首页',
    key:'/admin/home',
    icon:'pie-chart'
  },
  {
    title: 'UI',
    key:'/admin/ui',
    icon:'desktop',
    children:[
      {
        title:'按钮',
        key:'/admin/ui/buttons',
        icon:'',
      },
      {
        title:'表单',
        key:'/admin/ui/forms',
        icon:'',
        children:[
          {
            title:'input',
            key:'/admin/ui/forms/input',
            icon:'',
          },
          {
            title:'checkbox',
            key:'/admin/ui/forms/checkbox',
            icon:'',
          }
        ]
      }
    ]
  }
]

export default menuList