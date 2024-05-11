import { FaStore } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import {
  AiOutlineDashboard,
  AiOutlineBoxPlot,
  AiOutlineFolder,
  AiOutlineUser,
  AiOutlineSafetyCertificate,
} from 'react-icons/ai';

export const schoolManagementArray = [
  {
    label: 'School Management',
    icon: <AiOutlineDashboard />,
    subLinks: [
      {
        label: 'Dashboard',
        path: `/superadmin/dashboard`,
        icon: <AiOutlineDashboard />,
      },
      {
        label: 'Schools',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Classes',
        path: `/superadmin/classes`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Categories',
        path: `/superadmin/categories`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Sessions',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Settings',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
    ],
  },
];

export const superAdminSchoolArray = [
  {
    label: 'My School',
    icon: <AiOutlineDashboard />,
    subLinks: [
      {
        label: 'Dashboard',
        icon: <FaStore />,
        // path: `/superadmin/stores`,
      },
      {
        label: 'My School',
        icon: <AiOutlineBoxPlot />,
        path: `/superadmin/schools/Dashboard`,
      },
      {
        label: 'Enquiries',
        icon: <AiOutlineFolder />,
        path: `/superadmin/categories`,
      },
      {
        label: 'Settings',
        icon: <AiOutlineFolder />,
        path: `/superadmin/categories`,
      },
      {
        label: 'Logs',
        icon: <AiOutlineFolder />,
        path: `/superadmin/categories`,
      },
    ],
  },
];

export const SuperAcademicArray = [
  {
    label: 'Academic',
    icon: <AiOutlineDashboard />,
    subLinks: [
      {
        label: 'Dashboard',
        icon: <FaStore />,
        path: (id) => `/superadmin/manage/store/${id}`,
      },
      {
        label: 'Manage class sections',
        icon: <AiOutlineUser />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Subjects',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Timetable',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Attendance',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Student Permissions',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Manage Learning Materials',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Manage Home work',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Manage Notices',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Manage Events',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Manage Live Classes',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Manage Staff Ratting',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
      {
        label: 'Students Birthdays',
        icon: <AiOutlineSafetyCertificate />,
        path: () => `/superadmin/users`,
      },
    ],
  },
];

export const studentArray = [
  {
    label: 'Students',
    icon: <AiOutlineDashboard />,
    subLinks: [
      {
        label: 'Dashboard',
        path: `/superadmin/dashboard`,
        icon: <AiOutlineDashboard />,
      },
      {
        label: 'Admission',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Students',
        path: `/superadmin/classes`,
        icon: <IoMdSettings />,
      },
      {
        label: 'ID Cards',
        path: `/superadmin/categories`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Student Promotion',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Student Transfer',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Certificates',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Notifications',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
    ],
  },
];

export const administratorArray = [
  {
    label: 'Users',
    icon: <AiOutlineDashboard />,
    subLinks: [
      {
        label: 'Dashboard',
        path: `/superadmin/dashboard`,
        icon: <AiOutlineDashboard />,
      },
      {
        label: 'Admins',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Staffs',
        path: `/superadmin/classes`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Staff Attendance',
        path: `/superadmin/categories`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Staff Permissions',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
    ],
  },
];

export const accountingArray = [
  {
    label: 'Accounting',
    icon: <AiOutlineDashboard />,
    subLinks: [
      {
        label: 'Dashboard',
        path: `/superadmin/dashboard`,
        icon: <AiOutlineDashboard />,
      },
      {
        label: 'Fee Invoices',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Expenses',
        path: `/superadmin/classes`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Income  ',
        path: `/superadmin/categories`,
        icon: <IoMdSettings />,
      },
      {
        label: 'Fee Types',
        path: `/superadmin/schools`,
        icon: <IoMdSettings />,
      },
    ],
  },
];
