import { FaStore } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import {
  AiOutlineDashboard,
  AiOutlineBoxPlot,
  AiOutlineFolder,
  AiOutlineUser,
  AiOutlineSafetyCertificate,
  AiOutlineShoppingCart,
  AiOutlineCreditCard,
  AiOutlineTags,
  AiOutlineBarChart,
} from 'react-icons/ai';

export const SuperAdminDashboardArray = [
  {
    label: 'Super Admin Dashboard',
    icon: <AiOutlineDashboard />,
    path: `/superadmin`,
  },
  {
    label: 'Settings',
    icon: <IoMdSettings />,
    path: `/superadmin/settings`,
  },
];

export const SuperAdminStoreArray = [
  {
    label: 'Manage Stores',
    icon: <FaStore />,
    path: `/superadmin/stores`,
  },
  {
    label: 'Manage Products',
    icon: <AiOutlineBoxPlot />,
    path: `/superadmin/products`,
  },
  {
    label: 'Manage Categories',
    icon: <AiOutlineFolder />,
    path: `/superadmin/categories`,
  },
];

export const SuperAdminUserArray = [
  {
    label: 'Manage Store',
    icon: <FaStore />,
    path: (id) => `/superadmin/manage/store/${id}`,
  },
  {
    label: 'Manage Users',
    icon: <AiOutlineUser />,
    path: () => `/superadmin/users`,
  },
  {
    label: 'Manage Roles & Permissions',
    icon: <AiOutlineSafetyCertificate />,
    path: () => `/superadmin/users`,
  },
];

export const SuperAdminOrderArray = [
  {
    label: 'Orders',
    icon: <AiOutlineShoppingCart />,
    path: `/superadmin/orders`,
  },
  {
    label: 'Payments',
    icon: <AiOutlineCreditCard />,
    path: `/superadmin/payments`,
  },
];

export const SuperAdminMarketingArray = [
  {
    label: 'Promotions',
    icon: <AiOutlineTags />,
    path: `/superadmin/promotions`,
  },
  {
    label: 'Analytics',
    icon: <AiOutlineBarChart />,
    path: `/superadmin/analytics`,
  },
];
