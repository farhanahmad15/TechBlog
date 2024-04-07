import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { uid: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      uid: "3",
      role: "User",
      name: 'Test User',
      password: `$2y$12$GBfcgD6XwaMferSOdYGiduw3Awuo95QAPhxFE0oNJ.Ds8qj3pzEZy`,
      image: 'https://dummyimage.com/400x400',
      provider:'Credentials'
    }
  })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })