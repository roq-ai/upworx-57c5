interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Apply for job offers', 'View job offers', 'Manage own job applications', 'View contracts'],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage job offers',
    'Manage job applications',
    'Manage contracts',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2f0eaeff-5503-4d56-9d4c-c76cf660c813',
};
