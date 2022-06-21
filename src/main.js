import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './components/views/HomeView.vue'
import ShipmentsView from './components/views/ShipmentsView.vue'
import BillingView from './components/views/BillingView';
import SettingsView from './components/views/SettingsView';
import ReportsView from './components/views/ReportsView';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name: 'Home', component: HomeView},
        {path:'/shipments', name: 'Shipment', component: ShipmentsView},
        {path:'/billing', name: 'Billing', component: BillingView},
        {path:'/reports', name: 'Reports', component: ReportsView},
        {path:'/settings', name: 'Settings', component: SettingsView},
    ]
})




createApp(App).use(router).mount('#app')
