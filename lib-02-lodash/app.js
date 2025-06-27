const customers = ['Max', 'Manuel', 'Anna', 'Chris', 'Julia'];

const activeCustomers = ['Max', 'Manuel'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);