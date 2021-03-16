const roleToRoute = {
  coustomer: [
    {
      name: 'Product',
    },
    {
      name: 'ProductAdd',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductEdit',
    },
  ],
  admin: [
    {
      name: 'Product',
    },
    {
      name: 'ProductAdd',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'Category',
    },
    {
      name: 'ProductEdit',
    },
  ],
};
export default function getMenuRoute(role, routes) {
  const routeName = roleToRoute[role].map((item) => item.name);
  const allowRoutesName = routes.map((item) => {
    const obj = item;
    if (routeName.indexOf(item.name) !== -1) {
      const { children } = item;
      obj.children = children.filter((r) => (routeName.indexOf(r.name) !== -1));
    }
    return obj;
  });
  return allowRoutesName;
}
