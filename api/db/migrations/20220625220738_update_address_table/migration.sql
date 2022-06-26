/*
  Warnings:

  - You are about to drop the column `zip_code` on the `Address` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "zip_code",
ADD COLUMN     "departmentCode" TEXT,
ADD COLUMN     "zipCode" TEXT;
