export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'feather icon-home',
                }, {
                    id: 'requests',
                    title: 'Requests',
                    type: 'item',
                    url: '/request',
                    icon: 'feather icon-package',
                }
            ]
        },
        
        {
            id: 'ui-forms',
            title: 'Forms & Tables',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Registration Of Donors',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-plus-circle'
                }, {
                    id: 'form-basic2',
                    title: 'Registered Donors',
                    type: 'item',
                    url: '/tables/registerd',
                    icon: 'feather icon-droplet'
                },
               {
                    id: 'bootstrap2',
                    title: 'Stocks',
                    type: 'item',
                    icon: 'feather icon-clipboard',
                    url: '/tables/bootstrap'
                }
            ]
        },
        {
            id: 'chart-maps',
            title: 'Chart & Maps',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'Analytics',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/charts/nvd3'
                }
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'sample-page',
                    title: 'About-us',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-help-circle'
                },
             
             
                


            ]
        }
    ]
}