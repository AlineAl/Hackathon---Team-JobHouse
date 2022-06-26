-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "longitude" SET DATA TYPE TEXT,
ALTER COLUMN "latitude" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT;
