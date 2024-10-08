import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { id: 'test@test.com_google' },
    update: {},
    create: {
      email: 'test@test.com',
      id: "test@test.com",
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