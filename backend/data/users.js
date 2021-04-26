import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Joannie',
    email: 'joannie@sacoleira.com',
    phone: 123123123,
    password: bcrypt.hashSync('joannie', 10),
    isAdmin: true,
    ispromember: true,
  },
]

export default users