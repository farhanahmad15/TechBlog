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
      image: 'https://dummyimage.com/400x400',
      provider:'Google'
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