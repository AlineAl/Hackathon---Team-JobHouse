/*
  Warnings:

  - You are about to drop the column `city` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lodging` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addressId` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'admin', 'lessor', 'lessor_admin');

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "city",
DROP COLUMN "latitude",
DROP COLUMN "longitude",
ADD COLUMN     "addressId" INTEGER NOT NULL,
ADD COLUMN     "domainId" INTEGER,
ADD COLUMN     "lessorId" INTEGER,
ADD COLUMN     "sectorId" INTEGER,
ALTER COLUMN "title" SET NOT NULL;

-- DropTable
DROP TABLE "department";

-- DropTable
DROP TABLE "lodging";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "addressId" INTEGER,
    "lessorId" INTEGER,
    "role" "Role" NOT NULL DEFAULT E'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lessor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Lessor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lodging" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "area" INTEGER,
    "price" INTEGER,
    "description" TEXT,
    "lodgingTypeId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    "lessorId" INTEGER,

    CONSTRAINT "Lodging_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LodgingConstraints" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lodgingId" INTEGER,

    CONSTRAINT "LodgingConstraints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LodgingType" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "LodgingType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobDomain" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "JobDomain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobSector" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "JobSector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobConstraint" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "JobConstraint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "place" TEXT,
    "city" TEXT,
    "zip_code" TEXT,
    "department" TEXT,
    "longitude" INTEGER NOT NULL,
    "latitude" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LodgingToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_JobToJobConstraint" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_JobToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LodgingToUser_AB_unique" ON "_LodgingToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LodgingToUser_B_index" ON "_LodgingToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToJobConstraint_AB_unique" ON "_JobToJobConstraint"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToJobConstraint_B_index" ON "_JobToJobConstraint"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToUser_AB_unique" ON "_JobToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToUser_B_index" ON "_JobToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_lessorId_fkey" FOREIGN KEY ("lessorId") REFERENCES "Lessor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lodging" ADD CONSTRAINT "Lodging_lessorId_fkey" FOREIGN KEY ("lessorId") REFERENCES "Lessor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lodging" ADD CONSTRAINT "Lodging_lodgingTypeId_fkey" FOREIGN KEY ("lodgingTypeId") REFERENCES "LodgingType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lodging" ADD CONSTRAINT "Lodging_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LodgingConstraints" ADD CONSTRAINT "LodgingConstraints_lodgingId_fkey" FOREIGN KEY ("lodgingId") REFERENCES "Lodging"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_lessorId_fkey" FOREIGN KEY ("lessorId") REFERENCES "Lessor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "JobDomain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "JobSector"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LodgingToUser" ADD CONSTRAINT "_LodgingToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Lodging"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LodgingToUser" ADD CONSTRAINT "_LodgingToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToJobConstraint" ADD CONSTRAINT "_JobToJobConstraint_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToJobConstraint" ADD CONSTRAINT "_JobToJobConstraint_B_fkey" FOREIGN KEY ("B") REFERENCES "JobConstraint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToUser" ADD CONSTRAINT "_JobToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToUser" ADD CONSTRAINT "_JobToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
